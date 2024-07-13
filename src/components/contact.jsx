// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full py-8 px-4 bg-black text-white flex justify-center" id="contact">
      <div className="max-w-lg w-full bg-black text-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form method="POST" action="https://getform.io/f/byvpvoya">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 text-black rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-2 text-black rounded"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 text-black rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-lg font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
