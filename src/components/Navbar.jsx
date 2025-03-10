import { useState,useEffect } from "react";
import { BiLogoGmail, BiMenu, BiX } from "react-icons/bi";
import { BsGithub,  BsLinkedin, BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the menu on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        JITESH
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
         <a href="https://www.linkedin.com/in/jitesh-jangid-1393a2243/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3B6V9vQzYMSvyfIbPFpoNkkw%3D%3D"target="_blank" > <BsLinkedin /> </a>
        </li>
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-gray-500 hover:opacity-100">
         <a href="https://github.com/JITs10" target="_blank"><BsGithub /></a> 
        </li>
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-white-500 hover:opacity-100">
          <a href="https://x.com/jitesh_jangid10" target="_blank"><BsTwitterX /></a>
        </li>
        <li className="cursor-pointer opacity-70 transition-colors duration-300 text-white hover:text-yellow-400 hover:opacity-100">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jiteshjangid1008@gmail.com" 
  target="_blank" ><BiLogoGmail/></a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block  text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12
             ${ isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-10">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <a href="https://www.linkedin.com/in/jitesh-jangid-1393a2243/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3B6V9vQzYMSvyfIbPFpoNkkw%3D%3D"target="_blank" > <BsLinkedin /> </a>
            </li>
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-gray-500 hover:opacity-100">
            <a href="https://github.com/JITs10" target="_blank"><BsGithub /></a> 
            </li>
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-white-500 hover:opacity-100">
            <a href="https://x.com/jitesh_jangid10" target="_blank"><BsTwitterX /></a>
            </li>
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:fill-red-500 hover:opacity-100">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jiteshjangid1008@gmail.com" 
  target="_blank" ><BiLogoGmail/></a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
