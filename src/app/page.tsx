"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">ANJANA SIVADAS</h1>
        <ul className="flex gap-8 text-gray-300">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1LHwzTcMGEU-UuInjayOyREt-X8Ve_C40?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Certificates
            </a>
          </li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </main>
  );
}
