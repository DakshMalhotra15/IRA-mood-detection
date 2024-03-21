import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';

import '../styles/globals.scss'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function MyApp({ Component, pageProps }) {
  const siteName = "IRA";
  const logo = "https://i.ibb.co/NrCZtW4/IRA.png";
  const color = "#FD365C";
  const router = useRouter();

  const [user, setUser] = useState({ token: null, id: null, name: null, email: null });
  const [key, setKey] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

    const myUser = JSON.parse(localStorage.getItem("ira-user"));
    if (myUser) {
      setUser({ token: myUser.token, id: myUser.id, name: myUser.name, email: myUser.email });
    }
    setKey(Math.random());
  }, [router]);

  const logout = () => {
    localStorage.removeItem("ira-user");
    setUser({ token: null, id: null, name: null, email: null });
    setKey(Math.random());
    router.push("/");
  }

  return <>
    <Head>
      <title>HOME | {siteName}</title>
      <meta name="description" content="A portal designed to help the user better identify their mood and emotions" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></Script>

    <LoadingBar
      color={color}
      height={5}
      progress={progress}
      waitingTime={800}
      onLoaderFinished={() => setProgress(0)}
    />

    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && router.asPath !== "/login" && router.asPath !== "/signup" && router.asPath !== "/reset" && router.asPath !== "/buildProfile" && router.asPath !== "/result" && !router.pathname.includes('/detect') && key && <Header siteName={siteName} key={key} logo={logo} user={user} logout={logout} />}
    <Component {...pageProps} siteName={siteName} logo={logo} user={user} color={color} />
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && router.asPath !== "/login" && router.asPath !== "/signup" && router.asPath !== "/reset" && router.asPath !== "/buildProfile" && router.asPath !== "/result" && !router.pathname.includes('/detect') && <Footer siteName={siteName} />}
  </>
}

export default MyApp
