import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiDownArrowAlt } from "react-icons/bi";
import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  let btnStyling = isDark
    ? "flex items-center gap-1 px-3 py-1 text-nowrap md:gap-2 md:px-6 md:py-2 lg:gap-2 lg:px-6 lg:py-2 rounded-lg border border-white/20 bg-white/5 text-white font-semibold shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-md transition cursor-pointer hover:bg-white/10 text-sm md:text-lg lg:text-lg"
    : "flex items-center gap-1 px-3 py-1 text-nowrap md:gap-2 md:px-6 md:py-2 lg:gap-2 lg:px-6 lg:py-2 rounded-lg border border-black/20 bg-black/5 text-black font-semibold shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition cursor-pointer hover:bg-black/10 text-sm md:text-lg lg:text-lg";
  let iconStyling = isDark
    ? "text-3xl flex items-center gap-2 px-2 py-2  text-white font-semibold  hover:scale-[1.1] transition cursor-pointer hover:text-gray-400"
    : "text-3xl flex items-center gap-2 px-2 py-2  text-black font-semibold  hover:scale-[1.1] transition cursor-pointer hover:text-gray-600";



    
  return (
    <div className={isDark ? "h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-8 bg-gradient-to-b from-gray-900 via-gray to-black text-center pt-10 lg:pt-5 md:pt-5" : "h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-8 bg-gradient-to-b from-gray-100 via-gray-200 to-white text-center pt-10 lg:pt-5 md:pt-5"}>
      <h1 className={isDark ? "text-4xl lg:text-7xl md:text-5xl font-bold bg-gradient-to-r from-[#535353] to-[#d3d3d3] text-transparent bg-clip-text cursor-pointer overflow-y-hidden" : "text-4xl lg:text-7xl md:text-5xl font-bold text-black cursor-pointer overflow-y-hidden"}>
        Full-Stack Developer
      </h1>
      <h2 className={isDark ? "text-gray-400 bg-clip-text cursor-pointer overflow-y-hidden w-[75vw] md:w-[50vw] lg:w-[50vw] text-center  text-sm md:text-2xl lg:text-2xl" : "text-[#737373] bg-clip-text cursor-pointer overflow-y-hidden w-[75vw] md:w-[50vw] lg:w-[50vw] text-center  text-sm md:text-2xl lg:text-2xl"}>
        Crafting modern web experiences with the MERN stack. Passionate about
        clean code, innovative solutions, and bringing ideas to life.
      </h2>
      <div className="flex gap-5">
        <button className={btnStyling}>View Projects</button>
        <button className={btnStyling}>Download CV</button>
        <button className={btnStyling}>Contact Me</button>
      </div>
      <div className="flex gap-2  overflow-hidden">
        <a href="" className={`${iconStyling}`}>
          <FaGithub />
        </a>
        <a href="" className={`${iconStyling}`}>
          <FaLinkedin />
        </a>
        <a href="" className={`${iconStyling}`}>
          <FaFileAlt />
        </a>
        <a href="" className={`${iconStyling}`}>
          <MdEmail />
        </a>
      </div>
      <BiDownArrowAlt className={`${iconStyling} text-5xl text-gray-500`} />
    </div>
  );
};

export default Hero;
