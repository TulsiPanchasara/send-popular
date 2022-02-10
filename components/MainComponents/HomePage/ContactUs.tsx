import React from 'react';

const ContactUs = () => {
    return (
        <div className='my-12' >
            <div className='text-customRed-1 text-center' >CONTACT US</div>
            <div className='text-3xl text-center my-2' >Send Us a message</div>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:max-w-4xl mx-auto gap-5 mt-12 px-10' >
                <input name="name" placeholder='Name' autoComplete='off' className='border border-customGray-3 rounded px-5 py-3 ' />
                <input name="name" placeholder='Email' type='email' autoComplete='off' className='border border-customGray-3 rounded px-5 py-3 ' />
                <input name="name" placeholder='Phone' type='tel' autoComplete='off' className='border border-customGray-3 rounded px-5 py-3 ' />
                <input name="name" placeholder='Budget' autoComplete='off' className='border border-customGray-3 rounded px-5 py-3 ' />
                <textarea name="name" placeholder='Message' autoComplete='off' className='border border-customGray-3 rounded px-5 py-3  lg:col-span-2 '  />
            </div>
            <div className='flex justify-center mt-8' >
                <button className='bg-customRed-1 px-6 py-3 text-customWhite-1 rounded' >
                Send Message
            </button>
            </div>
        </div>
    );
};

export default ContactUs;
