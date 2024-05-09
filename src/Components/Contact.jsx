import React from "react";

function Contact({ contactRef }) {
  return (
    <section
      ref={contactRef}
      className="h-[70svh] w-full bg-[#0e0c22] flex items-center justify-evenly flex-col"
    >
      <h1 className="text-6xl text-jaggyellow font-bold heading text-center ">
        Contact Us
      </h1>
      <div className="h-[60%] w-[80%] glassmorp p-4 relative z-10 grid grid-cols-3 grid-rows-4 gap-4 items-center text-white">
        <label htmlFor="Email" className="text-center">
          Email
        </label>
        <input
          id="Email"
          type="text"
          className="bg-transparent border-2 rounded-md border-[#3243cd] col-span-2"
        />

        <label htmlFor="Name" className="text-center">
          Name
        </label>

        <input
          id="Name"
          type="text"
          className="bg-transparent border-2 rounded-md border-[#3243cd] col-span-2"
        />
        <label htmlFor="Phone" className="row-start-3 text-center">
          Phone
        </label>

        <input
          id="Phone"
          type="number"
          className="bg-transparent border-2 rounded-md border-[#3243cd] row-start-3 col-span-2"
        />
        <button className="border-2 row-start-4 col-span-3 rounded-md bg-jaggyblue hover:bg-jaggyellow">
          Submit
        </button>
      </div>
    </section>
  );
}

export default Contact;
