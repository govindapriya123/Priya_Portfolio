import { Mail, Phone, Linkedin, Github, ArrowRight, Zap, Code2, Target, Star } from "lucide-react";
import AchievementItem from "./Components/Achievements";
import ExperienceCard from "./Components/ExperienceCard";
import NavLink from "./Components/NavLink";
import ProjectCard from "./Components/ProjectCard";
import SkillCategory from "./Components/Skills";
import StatCard from "./Components/StatCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-950 border-r border-slate-800 p-8 z-40 max-md:hidden">
        <div className="mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center text-slate-950 font-bold text-lg">
            GK
          </div>
          <h1 className="text-xl font-bold text-white mb-1">Govindapriya Korni</h1>
          <p className="text-sm text-slate-400">
            Frontend Developer | Mobile Application Developer | Full-Stack Developer
          </p>
        </div>

        <div className="space-y-6">
          <NavLink href="#intro">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
        </div>

        <div className="absolute bottom-8 left-8 right-8 space-y-3">
          <a
            href="mailto:kornigovindapriya@gmail.com"
            className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition text-sm"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition text-sm"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition text-sm"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </nav>

      <main className="md:ml-64">
        <section
          id="intro"
          className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          </div>

          <div className="relative max-w-2xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-slate-800 border border-slate-700 rounded-full">
              <span className="text-sm text-cyan-400 font-medium flex items-center gap-2">
                <Zap size={14} /> Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
              Senior Software Developer with 2+ years of experience building scalable, responsive applications using
              React, React Native, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a
                href="#about"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center gap-2"
              >
                Explore My Work <ArrowRight size={18} />
              </a>
              <a
                href="tel:+919441873930"
                className="px-6 py-3 border border-slate-700 rounded-lg hover:bg-slate-800 transition"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-8 justify-center text-slate-400 text-sm">
              <div>2+ years experience</div>
              <div>5+ projects completed</div>
              <div>React specialist</div>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                I'm a passionate Frontend Developer focused on creating elegant, performant solutions to complex
                problems. With expertise in React and React Native, I've built applications used by thousands of users.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Currently at HEXAGON, I lead frontend initiatives that improve application performance and user
                experience. I'm committed to writing clean, maintainable code and staying current with industry best
                practices.
              </p>
            </div>

            <div className="space-y-4">
              <StatCard label="Years of Experience" value="2+" />
              <StatCard label="Projects Delivered" value="5+" />
              <StatCard label="Performance Improvement" value="30%" highlight />
            </div>
          </div>
        </section>

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

        <section id="projects" className="px-6 py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="CAFESTO"
              description="Food Ordering Web App"
              details="Responsive platform with Google & Facebook authentication, Stripe payments, and real-time order tracking."
              techs={["React", "Spring-Boot", "Firebase", "Stripe", "SQL", "JWT"]}
            />

            <ProjectCard
              title="BLOGAPP"
              description="Mobile Blogging Platform"
              details="Feature-rich blogging app with secure authentication, blog management, and Spring Boot backend integration."
              techs={["React-Native", "Spring-boot", "SQL", "JWT"]}
            />
          </div>
        </section>

        <section id="skills" className="px-6 py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Technical Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory category="Languages" skills={["HTML", "CSS", "JavaScript", "Java", "TypeScript"]} />
            <SkillCategory category="Frontend" skills={["React.js", "React-Native", "Redux"]} />
            <SkillCategory category="Backend & Tools" skills={["Spring-boot", "SQL", "REST APIs", "Firebase"]} />
          </div>
        </section>

        <section className="px-6 py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Achievements</h2>

          <div className="space-y-4">
            <AchievementItem
              icon={<Star size={20} />}
              title="POB Award"
              subtitle="HEXAGON"
              description="Recognized for resolving critical bugs and enhancing OnCall Mobile application"
            />
            <AchievementItem
              icon={<Target size={20} />}
              title="Team Award"
              subtitle="HEXAGON"
              description="Contributed to successful new feature development and delivery"
            />
            <AchievementItem
              icon={<Code2 size={20} />}
              title="NPTEL Certification"
              subtitle="Programming in Java"
              description="Elite + Gold Certificate for advanced Java programming"
            />
          </div>
        </section>

        <section className="px-6 py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Education</h2>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Engineering in Computer Science</h3>
            <p className="text-cyan-400 font-medium mb-4">Vasavi College of Engineering, Hyderabad</p>
            <p className="text-slate-400 mb-4">Aug 2019 - May 2023</p>
            <div className="space-y-2 text-slate-300">
              <p>Relevant coursework: DBMS, Object Oriented Programming, JAVA</p>
              <p className="font-semibold text-white">CGPA: 8.32</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 px-6 py-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-slate-500">© 2024 Govindapriya Korni</p>
            <div className="flex gap-6">
              <a href="tel:+919441873930" className="text-slate-400 hover:text-cyan-400 transition">
                <Phone size={20} />
              </a>
              <a href="mailto:kornigovindapriya@gmail.com" className="text-slate-400 hover:text-cyan-400 transition">
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
