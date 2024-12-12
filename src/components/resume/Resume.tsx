import { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";

const Resume = () => {
  const [activeTab, setActiveTab] = useState<
    "education" | "skills" | "experience" | "achievement"
  >("education");

  const handleTabClick = (
    tab: "education" | "skills" | "experience" | "achievement"
  ) => {
    setActiveTab(tab);
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => handleTabClick("education")}
            className={`${
              activeTab === "education"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => handleTabClick("skills")}
            className={`${
              activeTab === "skills"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => handleTabClick("experience")}
            className={`${
              activeTab === "experience"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() => handleTabClick("achievement")}
            className={`${
              activeTab === "achievement"
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {activeTab === "education" && <Education />}
      {activeTab === "skills" && <Skills />}
      {activeTab === "achievement" && <Achievement />}
      {activeTab === "experience" && <Experience />}
    </section>
  );
};

export default Resume;
