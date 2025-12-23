import React from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Professional Journey</h2>

      <div className="space-y-12">
        <ExperienceCard
          title="Senior Software Developer"
          company="HEXAGON Public Safety and Infrastructure"
          date="July 2023 - Present"
          achievements={[
            "Built responsive UIs for OnCall Dispatch and Mobile applications",
            "Improved app performance by 30% through component optimization",
            "Implemented Runtime Customization feature using JSON configuration",
            "Migrated legacy codebase to functional components with React hooks",
          ]}
        />

        <ExperienceCard
          title="Intern"
          company="Medtronic Engineering and Innovation Center"
          date="Jan 2023 - May 2023"
          achievements={[
            "Mastered full-stack technologies: SQL, HTML, CSS, Java, JavaScript",
            "Collaborated with senior engineers on enterprise best practices",
            "Contributed to Git-based workflow and code maintainability",
          ]}
        />
      </div>
    </section>
  );
}

export default Experience;
