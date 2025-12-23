import React from "react";
import StatCard from "./StatCard";

function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed">
            I'm a passionate Frontend Developer focused on creating elegant, performant solutions to complex problems.
            With expertise in React and React Native, I've built applications used by thousands of users.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Currently at HEXAGON, I lead frontend initiatives that improve application performance and user experience.
            I'm committed to writing clean, maintainable code and staying current with industry best practices.
          </p>
        </div>

        <div className="space-y-4">
          <StatCard label="Years of Experience" value="2+" />
          <StatCard label="Projects Delivered" value="5+" />
          <StatCard label="Performance Improvement" value="30%" highlight />
        </div>
      </div>
    </section>
  );
}

export default About;
