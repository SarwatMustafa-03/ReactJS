import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const projects = [
    {
      title: "HealthCare Appointment App",
      description: "Quality care starts with a quick appointment.",
      link: "https://healthcare-appointment-app-01.netlify.app"
    },
    {
      title: "Travelo Website",
      description: "Fully responsive portfolio built with React, Tailwind, and Dark/Light theme.",
      link: "https://travelo-website-02.netlify.app/"
    },
    {
      title: "Nexus Analytics App",
      description: "Socket.io chat app with private chats, typing indicator and real-time sync.",
      link: "https://nexus-analytics-website.netlify.app/"
    },
    {
      title: "E-Commerce UI",
      description: "Modern e-commerce frontend with filtering, product listing and UI components.",
      link: ""
    }
  ];

  return (
    <div
      className={
        `w-full py-16 px-5 flex flex-col items-center gap-10   ` +
        (isDark ? "bg-black text-white" : "bg-white text-black")
      }
     >
      {/* Heading */}
      <h2 className="text-3xl font-bold overflow-hidden  ">Projects</h2>
      <p className="text-center max-w-2xl opacity-80">
        A selection of my recent work showcasing skills in React, UI development and full-stack apps.
      </p>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              p-6 rounded-2xl transition-all shadow-md border cursor-pointer
              hover:scale-[1.03] hover:shadow-xl
              ${isDark ? "bg-zinc-900 border-zinc-700" : "bg-zinc-100 border-zinc-300"}
            `}
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <FaCode className="text-2xl" />
              <h3 className="font-bold text-xl">{project.title}</h3>
            </div>

            {/* Description */}
            <p className="opacity-80 text-sm mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 font-semibold text-blue-500 hover:underline"
            >
              Live Demo <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
