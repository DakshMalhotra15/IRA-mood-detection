import React from 'react';
import Head from 'next/head';

import About from '../Components/About';
import Stats from '../Components/Stats';
import Contact from '../Components/Contact';

const Index = ({ siteName, color }) => {
  return (
    <>
      <Head>
        <title>HOME | {siteName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container-fluid main mx-auto d-flex justify-content-center align-items-center">
        <div className="text text-center">
          <h1 className="display-2 fw-bold bg-ira px-4">IRA - Inteligent Robot Assistance!</h1>
        </div>
      </section>

      <About siteName={siteName} color={color} />
      <Stats />
      <Contact color={color} />
    </>
  )
}

export default Index