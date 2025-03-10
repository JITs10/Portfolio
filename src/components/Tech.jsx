import React from "react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <>
      <div
        id="tech"
        className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-10 md:gap-32"
      >
        <motion.h1
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-white md:text-5xl"
        >
          Technologies
        </motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-10 p-1">
          <h1 className="text-xl">Languages</h1>

          <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
            <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-300 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
          </motion.div>
          <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
            <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
          </motion.div>
          <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
            <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
            </motion.div>
          <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
            <BiLogoJava className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
          </motion.div>
          <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
            <SiMysql className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
          </motion.div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 p-1">
        <h1 className="text-xl">Frameworks</h1>

        <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoReact className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
        </motion.div>
        <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <RiNextjsFill className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
        </motion.div>
        <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
        </motion.div>
        <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
        </motion.div>
        <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}>
          <DiMongodb className="cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:translate-y-5 sm:text-[90px] md:text-[110]" />
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default Tech;
