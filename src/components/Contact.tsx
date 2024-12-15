import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
            If you have any questions or would like to connect, dont hesitate
            to reach out. You can contact me via email, phone, or by submitting
            the form below. I look forward to hearing from you!
          </p>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> wasay0074@gmail.om
          </div>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} /> (021) 321-33554
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-accent"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="h-[40px] bg-transparent border border-accent"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea
              className="bg-transparent border border-accent"
              id="msg"
              rows={8}
            ></textarea>
          </div>
          <button
            className="bg-yellow-500 border-r-5 p-2 px-6"
            data-aos="zoom-in-up"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
