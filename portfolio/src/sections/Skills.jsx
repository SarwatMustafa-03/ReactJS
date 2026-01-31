import React, { useContext, useState } from "react";
import SecHeading from "../components/SecHeading";
import SecTagLine from "../components/SecTagLine";
import ButtonsSkill from "../components/ButtonsSkill";
import SkillsCards from "../components/SkillsCards";
import { ThemeContext } from "../context/theme-context";
import { FaRegLightbulb, FaCode, FaRocket, FaHeart } from "react-icons/fa";
import Cards from "../components/Cards";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

const skillCardData = [
  {
    icon: <FaRegLightbulb />,
    num: "12+",
    title: "Technologies",
    description: "Explored and mastered modern tools",
  },
  {
    icon: <FaCode />,
    num: "3+",
    title: "Years Experience",
    description: "Hands-on expertise in web development",
  },
  {
    icon: <FaRocket />,
    num: "50+",
    title: "Projects Built",
    description: "From idea to deployment with quality",
  },
  {
    icon: <FaHeart />,
    num: "100%",
    title: "Passion Driven",
    description: "Fueled by dedication and love for coding",
  },
];

  const [activeBtn, setActiveBtn] = useState("All");

  return (
    <div 
      id="skills"  // ← Add this line

    className={`flex justify-center items-center flex-col gap-5 ${isDark ? "bg-black" : "bg-white"}`}>
      <SecHeading>Skills & Technologies</SecHeading>
      <SecTagLine>
        A comprehensive toolkit for building modern web applications
      </SecTagLine>


      <ButtonsSkill activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      <SkillsCards activeBtn={activeBtn} />
    <Cards cardsData={skillCardData} />

    </div>
  );
};

export default Skills;
