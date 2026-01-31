import React, { useState, useContext } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { ThemeContext } from "../context/theme-context";

const experiences = [
  {
    type: "education",
    title: "Bachelor of Economics",
    organization: "University of Karachi",
    location: "Karachi, Pakistan",
    period: "2024-2027",
    description:
      "Applied economic principles with modern technology to analyze data, optimize systems, and build scalable digital solutions for informed, impact-driven decision-making."
,
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "Led final-year project on AI-powered web applications",
      "Active member of Computer Science Society",
    ],
    skills: [
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Database Design",
    ],
    side: "left",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Tech Solutions Inc.",
    location: "Current",
    period: "01 Jan 2023 - Present",
    description:
      "Developing and maintaining web applications using modern technologies. Working with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 10+ production-ready web applications",
      "Improved application performance by 40%",
      "Mentored 3 junior developers",
    ],
    skills: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    side: "right",
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "Digital Agency",
    location: "Karachi, Pakistan",
    period: "Summer 2022",
    description:
      "Worked on client projects focusing on responsive web design and user experience. Collaborated with designers and backend developers.",
    achievements: [
      "Delivered 3 client projects on time",
      "Implemented responsive designs for mobile-first approach",
      "Received excellent feedback from clients",
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
    side: "left",
  },
  {
    type: "education",
    title: "Web Development Bootcamp",
    organization: "Code Academy",
    location: "Online",
    period: "01 2021",
    description:
      "Intensive 6-month program covering full-stack web development with hands-on projects and real-world applications.",
    achievements: [
      "Completed 20+ projects",
      "Top 5% of students",
      "Received certification in MERN stack",
    ],
    skills: ["MERN Stack", "Rest Full API", "Git", "Agile Methodology"],
    side: "right",
  },
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⭐ ADD THEME SUPPORT
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const cardHeight = e.target.scrollHeight / experiences.length;
    const newIndex = Math.round(scrollTop / cardHeight);
    if (
      newIndex !== currentIndex &&
      newIndex >= 0 &&
      newIndex < experiences.length
    ) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-black text-white"
          : "min-h-screen bg-white text-black"
      }
    >
      {/* Mobile/Tablet View */}
      <div className="lg:hidden h-screen overflow-hidden">
        <div
          className="h-full overflow-y-scroll snap-y snap-mandatory"
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="h-screen snap-start flex items-center justify-center relative px-4"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>

              <div
                className={`absolute left-5 w-7 h-7 rounded-full border-4 ${
                  isDark ? "border-black" : "border-white"
                } flex items-center justify-center z-10 ${
                  exp.type === "education" ? "bg-blue-500" : "bg-green-500"
                }`}
              >
                {exp.type === "education" ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              <div className="ml-16 w-full max-w-md">
                <div
                  className={
                    isDark
                      ? "bg-zinc-900 rounded-lg p-6 border border-zinc-800"
                      : "bg-zinc-100 rounded-lg p-6 border border-zinc-300"
                  }
                >
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-xl font-bold flex-1">
                        {exp.title}
                      </h2>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          exp.type === "education"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {exp.type === "education" ? "Education" : "Current"}
                      </span>
                    </div>

                    <p
                      className={
                        isDark ? "text-gray-400" : "text-gray-700"
                      }
                    >
                      {exp.organization}
                    </p>

                    <div
                      className={
                        isDark
                          ? "flex flex-col gap-2 text-gray-500 text-sm"
                          : "flex flex-col gap-2 text-gray-600 text-sm"
                      }
                    >
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p
                    className={
                      isDark
                        ? "text-gray-300 text-sm mb-4"
                        : "text-gray-700 text-sm mb-4"
                    }
                  >
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h3
                      className={
                        isDark
                          ? "text-gray-400 text-xs"
                          : "text-gray-600 text-xs"
                      }
                    >
                      Key Achievements
                    </h3>
                    <ul className="space-y-1">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start text-xs">
                          <span className="text-green-500 mr-2">•</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={
                          isDark
                            ? "px-2 py-1 bg-zinc-800 rounded-full text-gray-300 text-xs border border-zinc-700"
                            : "px-2 py-1 bg-gray-200 rounded-full text-gray-700 text-xs border border-gray-300"
                        }
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                document.querySelector(".overflow-y-scroll").scrollTo({
                  top: index * window.innerHeight,
                  behavior: "smooth",
                })
              }
              className={`w-2 h-2 rounded-full ${
                currentIndex === index
                  ? isDark
                    ? "bg-white scale-150"
                    : "bg-black scale-150"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block py-20 px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2"></div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 ${
                    isDark ? "border-black" : "border-white"
                  } flex items-center justify-center z-10 ${
                    exp.type === "education" ? "bg-blue-500" : "bg-green-500"
                  }`}
                >
                  {exp.type === "education" ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : (
                    <Briefcase className="w-5 h-5" />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {exp.side === "left" ? (
                    <>
                      <div className="flex justify-end">
                        <div
                          className={
                            isDark
                              ? "bg-zinc-900 border border-zinc-800 rounded-lg p-6"
                              : "bg-zinc-100 border border-zinc-300 rounded-lg p-6"
                          }
                        >
                          <h2 className="text-xl font-bold">{exp.title}</h2>
                          <p
                            className={
                              isDark ? "text-gray-400" : "text-gray-700"
                            }
                          >
                            {exp.organization}
                          </p>
                          <p className="text-sm mt-2">{exp.description}</p>
                        </div>
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div className="flex justify-start">
                        <div
                          className={
                            isDark
                              ? "bg-zinc-900 border border-zinc-800 rounded-lg p-6"
                              : "bg-zinc-100 border border-zinc-300 rounded-lg p-6"
                          }
                        >
                          <h2 className="text-xl font-bold">{exp.title}</h2>
                          <p
                            className={
                              isDark ? "text-gray-400" : "text-gray-700"
                            }
                          >
                            {exp.organization}
                          </p>
                          <p className="text-sm mt-2">{exp.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
