
import {motion} from "framer-motion";

const projectsData = [
  {
    image: "/Lazarev.png",
    title: "Lazarev Clone",
    link: "https://jits10.github.io/Lazarev-Clone/",
    description:
      "Lazarev is a product-based website that uses AI and ML to market and sell.Used HTML, CSS, JavaScript and GSAP (Green Sock Animation Platform).Also Used Web animations to make it look more User-likable. Used JS and React to add Functionalities.",
      technologies: ["HTML", "CSS", "JS", "React", "Node", "GSAP"],
  },
  {
    image: "/Dribble.png",
    title: "Dribble Ui Clone",
    link:"https://jits10.github.io/Dribble_Ui_Project/",
    description:
      "A clean and responsive Dribbble landing page clone, replicating its sleek design, modern typography, and intuitive layout. Built with React and Tailwind CSS for a pixel-perfect look.",
      technologies: ["HTML", "CSS", "JS", "React"],
  },
  {
    image: "/Obys.png",
    title: "Obys agency Ui Clone",
    link:"https://jits10.github.io/Obys_Clone/",
    description:
      "A visually appealing clone of Obys agency's landing page, replicating its bold design, unique typography, and smooth scrolling effects. Developed with React and GSAP, it delivers a seamless and interactive experience while maintaining high performance and responsiveness.",
      technologies: ["HTML", "CSS", "JS", "React", "Node", "GSAP","Shery.js"],
  },
  {
    image:"/BubbleGame.png",
    title: "Bubble Game",
    description:
      "Bubble Game is a fast-paced puzzle where you shoot and match bubbles to clear the screen.",
      technologies: ["HTML", "CSS", "JS"],
  },
  {
    image: "/CountryFind.png",
    title: "Country Find",
    description:
      "CountryFind is a simple application that allows users to search for and discover information about countries around the world.",
      technologies: ["HTML", "CSS", "JS", "React"],
  },
];

const ScrollReveal = ({children}) =>{
  return(
    <motion.div 
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      {/* Use Next.js Image component for optimization */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></div> 
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <ScrollReveal>
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 p-24 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    </ScrollReveal>
  );
};


export default Projects;
