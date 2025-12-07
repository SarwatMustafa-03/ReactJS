import { useContext } from "react";
import SecHeading from "../components/SecHeading";
import SecTagLine from "../components/SecTagLine";
import { FaCode, FaRegLightbulb, FaUsers } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { ThemeContext } from "../context/theme-context";
import Cards from "../components/Cards";

const About = () => {
  const { theme } = useContext(ThemeContext);
  
  const aboutCards = [
    {
      icon: <FaCode />,
      num: "3+",
      title: "Years of Experience",
      description: "Building web applications",
    },
    {
      icon: <GiCoffeeCup />,
      num: "50+",
      title: "Projects Completed",
      description: "From concept to deployment",
    },
    {
      icon: <FaRegLightbulb />,
      num: "20+",
      title: "Technologies",
      description: "Modern tech stack",
    },
    {
      icon: <FaUsers />,
      num: "10+",
      title: "Happy Clients",
      description: "Satisfied customers",
    },
  ];

  const isDark = theme === "dark";
  const backGroundAbout = isDark
    ? "min-h-screen w-full !bg-[#020202] flex flex-col justify-center items-center gap-5 py-16 px-4 overflow-hidden"
    : "min-h-screen w-full !bg-[#F9FAFB] flex flex-col justify-center items-center gap-5 py-16 px-4 overflow-hidden";

  return (
    <div className={backGroundAbout}>
      <SecHeading>About Me</SecHeading>
      <SecTagLine>
        Passionate developer with a love for creating innovative solutions
      </SecTagLine>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16 xl:gap-20 w-full max-w-6xl mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-6 lg:mb-0 flex justify-center">
          <img
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 
                       border-4 border-[#a9a9a9] rounded-full 
                       shadow-[0_0_30px_rgba(255,255,255,0.35)] object-cover"
            src="girl.webp"
            alt="Sarwat Mustafa"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-5 text-center lg:text-left w-full max-w-2xl">
          <h2
            className={`${
              isDark ? "text-white" : "text-[#000]"
            } text-xl sm:text-2xl md:text-3xl font-semibold mb-2 overflow-hidden`}
          >
            Hi, I'm Sarwat Mustafa
          </h2>

          <p
            className={`${
              isDark ? "text-[#99A1AF]" : "text-[#737373]"
            } text-base sm:text-lg leading-relaxed`}
          >
            I'm a passionate full-stack developer with over 3 years of
            experience in building modern web applications. I specialize in the
            MERN stack and love creating user-friendly interfaces that solve
            real-world problems.
          </p>

          <p
            className={`${
              isDark ? "text-[#99A1AF]" : "text-[#737373]"
            } text-base sm:text-lg leading-relaxed`}
          >
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge
            through technical writing. I believe in continuous learning and
            staying up-to-date with the latest industry trends.
          </p>

          <p
            className={`${
              isDark ? "text-[#99A1AF]" : "text-[#737373]"
            } text-base sm:text-lg leading-relaxed`}
          >
            My goal is to create digital experiences that not only look great
            but also provide exceptional functionality and performance. Let's
            build something amazing together!
          </p>
        </div>
      </div>

      <Cards cardsData={aboutCards} />
    </div>
  );
};

export default About;
