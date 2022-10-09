import React, { useState } from 'react';
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const tst = (msg, type) => {
        const data = {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
        if (type == "success") {
            toast.success(`${msg}`, data);
        } else {
            toast.error(`${msg}`, data);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && email && message) {
            let query = await addDoc(collection(db, "contact"), {
                name: name,
                email: email,
                message: message
            });
            if (query.id) {
                tst("Query submitted successfully", "success");
            } else {
                tst("Something went wrong", "error");
            }
            setName('');
            setEmail('');
            setMessage('');
        } else {
            tst("Please fill all the fields", "error");
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        }
        else if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name === "message") {
            setMessage(e.target.value);
        }
    }

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <section className="body-font" id="contact">
                <div className="container px-2 py-5 mx-auto d-flex flex-wrap align-items-center justify-content-between">
                    <div className="details">
                        <h1 className="title">Contact Us</h1>
                        <p className="mt-4">Email Address : <a href='mailto:theritiktiwari@gmail.com'>theritiktiwari@gmail.com</a></p>
                        <p className="mt-4">Address : <span>Kelambakkam - Vandalur Rd, Rajan Nagar, Chennai, <br /> Tamil Nadu, 600-127</span></p>
                    </div>
                    <form onSubmit={handleSubmit} method="POST" className='p-5'>
                        <h5 className="mb-4 text-uppercase">Send Message</h5>
                        <div className="mb-3">
                            <label for="name" className='form-label'>Name</label>
                            <input type="name" className="form-control" name="name" id="name" value={name} onChange={handleChange} placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label for="email" className='form-label'>Email address</label>
                            <input type="email" className="form-control" name="email" id="email" value={email} onChange={handleChange} placeholder="user@ira.com" />
                        </div>
                        <div className=" mb-3">
                            <label for="message" className='form-label'>Message</label>
                            <textarea className="form-control" placeholder="Leave a message here" name="message" value={message} onChange={handleChange} id="message" style={{ height: "100px" }}></textarea>
                        </div>
                        <button type="submit" className="btn-main w-100 mt-2">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact