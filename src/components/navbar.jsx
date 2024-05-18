import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="sticky top-0  ml-20 mr-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-cente">
        <img className="mx-2 w-10" src={logo} alt="logo" />
        <div className="ml-20 flex flex-row gap-20">
          <h1>About</h1>
          <h1>What I Do</h1>
          <h1>Projects</h1>
        </div>
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl text-white">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
}
