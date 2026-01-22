import SecHeading from "../components/SecHeading"
import SecTagLine from "../components/SecTagLine"
import EducationCards from "../components/EducationCards"
import Cards from "../components/Cards";
import { FaBriefcase, FaCertificate, FaGraduationCap, FaProjectDiagram } from "react-icons/fa";

import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";

const Experience = () => {

  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const educationData = [
    {
      icon: <FaGraduationCap />,
      num: "4+",
      title: "Years of Study",
      description: "Dedicated learning and education"
    },
    {
      icon: <FaBriefcase />,
      num: "2+",
      title: "Work Experience",
      description: "Professional industry experience"
    },
    {
      icon: <FaCertificate />,
      num: "10+",
      title: "Certifications",
      description: "Professional qualifications earned"
    },
    {
      icon: <FaProjectDiagram />,
      num: "15+",
      title: "Projects Completed",
      description: "Successful project deliveries"
    }
  ];

  return (
    <div
      className={
        `flex flex-col gap-5 items-center  justify-center h-auto w-full pt-10 ` +
        (isDark ? "bg-black text-white" : "bg-white text-black")
      }
    >
      <SecHeading>Education & Experience</SecHeading>
      <SecTagLine>
        My academic journey and professional experience in software development
      </SecTagLine>

      <EducationCards />
      <Cards cardsData={educationData} />
    </div>
  );
};

export default Experience;
