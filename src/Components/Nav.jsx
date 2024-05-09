import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav({ setMenustatus, menustatus, refs }) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav
      ref={refs.goUpRef}
      className=" w-[100svw] h-[45px] flex items-center justify-between px-8 bg-jaggyblue relative"
    >
      <div className="flex items-center flex-col p-2">
        <h1 className="font-bold text-2xl text-jaggyellow leading-[-1] heading">
          HiiGym
        </h1>
        <span className="text-[8px] text-white">
          Where Fitness Meets Inspiration
        </span>
      </div>
      <ul
        className={`flex gap-4 text-white ${
          menustatus
            ? "absolute bottom-[-40px] bg-jaggyblue left-0 h-[40px] w-full"
            : "hidden sm:flex"
        } sm:static items-center justify-evenly sm:w-auto text-center z-50`}
      >
        <li
          className="cursor-pointer hover:text-jaggyellow"
          onClick={() => scrollToSection(refs.homeRef)}
        >
          Home
        </li>
        <li className="cursor-pointer hover:text-jaggyellow">About Us</li>
        <li
          className="cursor-pointer hover:text-jaggyellow"
          onClick={() => scrollToSection(refs.trainersRef)}
        >
          Services
        </li>
        <li
          className="cursor-pointer hover:text-jaggyellow"
          onClick={() => scrollToSection(refs.galleryRef)}
        >
          Gallary
        </li>
        <li
          className="cursor-pointer hover:text-jaggyellow"
          onClick={() => scrollToSection(refs.contactRef)}
        >
          Contact
        </li>
      </ul>
      <div className="flex gap-4 ">
        <button className="bg-jaggyellow rounded-md p-[2px_5px] font-bold">
          Log In
        </button>
        <button
          onClick={() => setMenustatus(!menustatus)}
          className="bg-jaggyellow rounded-md p-[2px_5px] block sm:hidden"
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
