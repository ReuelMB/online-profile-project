import { useState } from "react";
import { portfolioProjects } from "../Constants";
import { SectionHead, ProjectCard } from "../Components";

export default function Portfolio() {
  const [currentPlatform, setCurrentPlatform] = useState("ALL");
  const filteredProjects = portfolioProjects.PROJECTS.filter((item) => {
    if (currentPlatform !== "ALL") {
      return item.platform === currentPlatform;
    }
    return true;
  });
  return (
    <div className="flex flex-col justify-center">
      <SectionHead
        title="Personal Projects"
        text="This section contains the personal projects I have worked on."
      />
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap justify-center items-center">
          {portfolioProjects.PLATFORMS.map((platform) => (
            <div
              className={`border border-black-300 p-2 font-semibold cursor-pointer ${
                currentPlatform === platform
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
              key={platform}
              onClick={() => setCurrentPlatform(platform)}
            >
              {platform}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center">
          {filteredProjects.map((item) => (
            <ProjectCard {...item} currentPlatform={currentPlatform} />
          ))}
        </div>
      </div>
    </div>
  );
}
