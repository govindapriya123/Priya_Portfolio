import { X, Mail, Linkedin, Github } from "lucide-react";
import React, { RefObject } from "react";
import NavLink from "./NavLink";

function Navbar({ navBar, handleToggle }: { navBar: RefObject<HTMLElement>; handleToggle: any }) {
  return (
    <nav
      ref={navBar}
      id="navBar"
      className="fixed left-0 top-0 w-64  h-screen bg-gradient-to-b max-md:w-0 max-md:p-0 overflow-hidden from-slate-900 to-slate-950 border-r border-slate-800  z-40"
    >
      <div className="mb-12 px-6 pt-6 w-64">
        <div className="flex justify-between">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center text-slate-950 font-bold text-lg">
            GK
          </div>
          <X onClick={handleToggle} className="hidden max-md:block" />
        </div>
        <h1 className="text-xl font-bold text-white mb-1">Govindapriya Korni</h1>
        <p className="text-sm text-slate-400">
          Frontend Developer | Mobile Application Developer | Full-Stack Developer
        </p>
      </div>

      <div className="space-y-6 px-6 w-64" onClick={handleToggle}>
        <NavLink href="#intro">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
      </div>

      <div className="absolute bottom-8 left-8 right-8 space-y-3 w-64">
        <a
          href="mailto:kornigovindapriya@gmail.com"
          className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition text-sm"
        >
          <Mail size={16} /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/korni-govindapriya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition text-sm"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          href="https://github.com/govindapriya123"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition text-sm"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
