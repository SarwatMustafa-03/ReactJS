import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import SecTagLine from "../components/SecTagLine";
import SecHeading from "../components/SecHeading";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const projects = [
    {
      title: "Random Quotes Generator",
      description: "Discover inspiring quotes with our Random Quotes Generator!",
      link: "https://meek-pasca-4f2f86.netlify.app/quotes"
    },
    {
      title: "FlashCard Quiz App",
      description: "Learn fast, remember better with our interactive flashcard quiz!",
      link: "https://code-alpha-flashcard-quiz-app01.netlify.app/"
    },

    {
      title: "HealthCare Appointment App",
      description: "Quality care starts with a quick appointment.",
      link: "https://healthcare-appointment-app-01.netlify.app"
    },
    {
      title: "Travelo Website",
      description: "“Travelo — your smart travel buddy for discovering destinations, planning trips, and booking experiences in one seamless place.",
      link: "https://travelo-website-02.netlify.app/"
    },
    {
      title: "Nexus Analytics App",
      description: "A unified, real-time view of your data for faster insights and smarter decisions.",
      link: "https://nexus-analytics-website.netlify.app/"
    },
    {
      title: "Conquest Air Cargo",
      description: "Conquest Air Cargo — reliable, fast, and secure air freight solutions connecting global destinations with precision.",
      link: "https://conquest-air-cargo.netlify.app/"
    }
  ];

  return (
    <div
      id="projects"  // ← Add this line

      className={
        `w-full py-26 px-5 flex flex-col items-center gap-10   ` +
        (isDark ? "bg-black text-white" : "bg-white text-black")
      }
     >
      {/* Heading */}
      <SecHeading>Projects</SecHeading>
      <SecTagLine>A selection of my recent work showcasing skills in React, UI development and full-stack apps.
</SecTagLine>
    

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
