import { send } from '@emailjs/browser';
import React, { useState } from 'react';
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID } from '../../../config/constants';


const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        reply_to: '',
        phone: '',
        budget: '',
        message: '',
        to_name: 'Send & Popular'
    })
    const [error, setError] = useState(false);

    const onSubmit = () => {
        setError(false);

        if (!formData.name || !formData.reply_to || !formData.phone) {
            setError(true);
        } else {
            console.log('DATA ', formData);

            send(
                EMAIL_SERVICE_ID || '',
                EMAIL_TEMPLATE_ID || '', formData, EMAIL_USER_ID)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setFormData({
                        name: '',
                        reply_to: '',
                        phone: '',
                        budget: '',
                        message: '',
                        to_name: 'Send & Popular'
                    })
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });

        }
    }

    return (
        <div id="contact-us" className='my-12' >
            <div className='text-customRed-1 text-center' >CONTACT US</div>
            <div className='text-3xl text-center my-2' >Send Us a message</div>
            <form onSubmit={onSubmit} className='grid lg:grid-cols-2 grid-cols-1 lg:max-w-4xl mx-auto gap-5 mt-12 px-10' >
                <input name="name" placeholder='Name*' onChange={(e) => { setError(false); setFormData({ ...formData, name: e.target.value }) }} autoComplete='off' className='border border-customGray-3 rounded px-5 py-3 ' />
                <input name="email" placeholder='Email*' onChange={(e) => { setError(false); setFormData({ ...formData, reply_to: e.target.value }) }} type='email' autoComplete='off' className='border border-customGray-3 rounded px-5 py-3 ' />
                <input name="phone" placeholder='Phone*' onChange={(e) => { setError(false); setFormData({ ...formData, phone: e.target.value }) }} type='tel' autoComplete='off' className='border border-customGray-3 rounded px-5 py-3 ' />
                <input name="budget" placeholder='Budget' onChange={(e) => { setError(false); setFormData({ ...formData, budget: e.target.value }) }} autoComplete='off' className='border border-customGray-3 rounded px-5 py-3 ' />
                <textarea name="message" placeholder='Message' onChange={(e) => { setError(false); setFormData({ ...formData, message: e.target.value }) }} autoComplete='off' className='border border-customGray-3 rounded px-5 py-3  lg:col-span-2 ' />
            </form>
            {error && <div className='lg:max-w-4xl mx-auto px-10 my-3 text-customRed-1' >Please fill all the required fields (Name, Email and Phone is required)</div>}
            <div className='flex justify-center mt-8' >
                <button onClick={() => onSubmit()} className='bg-customRed-1 hover:bg-customRed-2 px-6 py-3 text-customWhite-1 rounded' >
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default ContactUs;
