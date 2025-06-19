import profile from "/profile.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16  flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img
            src={profile}
            alt="profile picture"
            className="w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[250px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex max-w-[400px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-60 text-3xl font-semibold md:6xl transition-all duration-300 hover:opacity-300">
            JITESH JANGID
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-60 text-4xl font-light md:6xl transition-all duration-300 hover:opacity-300">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a Web Developer skilled in React.js,Next.js and Tailwind,focused
            on building clean,scalable applications. <br></br>
            From Front-end design to backend,I create efficient solutions for
            dynamic user experiences. <br></br>
            Let's build something Unique together!
          </p>
          <a href="/resume.pdf" download>
            <button className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-Lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600">Download Resume</button>
          </a>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;
