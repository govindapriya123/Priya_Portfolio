import { Mail, Phone, Linkedin, Github, ArrowRight, Zap, Code2, Target, Star, Menu } from "lucide-react";
import AchievementItem from "./Components/Achievements";
import ProjectCard from "./Components/ProjectCard";
import SkillCategory from "./Components/Skills";
import { useCallback, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Experience from "./Components/Experience";

function App() {
  const navBar = useRef<HTMLElement>(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleEvent);
    return () => document.removeEventListener("mousedown", handleEvent);
  }, []);
  /**
   *
   */
  const handleEvent = useCallback((e: Event) => {
    const navbar = document.getElementById("navBar");
    const list = navbar?.classList;
    if (!navBar.current?.contains(e.target as Node) && list?.contains("toggleSideBarOpen") && window.innerWidth < 768) {
      list?.add("toggleSideBarClose");
      list?.remove("toggleSideBarOpen");
    }
  }, []);
  /**
   *
   */
  const handleToggle = (e: { stopPropagation: () => void }) => {
    const navbar = document.getElementById("navBar");
    const list = navbar?.classList;
    if (window.innerWidth< 768) {
      if (list?.contains("toggleSideBarOpen")) {
        list.replace("toggleSideBarOpen", "toggleSideBarClose");
      } else {
        list?.add("toggleSideBarOpen");
        list?.remove("toggleSideBarClose");
      }
    }
  }
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar navBar={navBar} handleToggle={handleToggle} />
      <div className="hidden p-0 max-md:block max-md:p-4 sticky top-0 z-20 bg-slate-950 ">
        <Menu onClick={handleToggle} className="max-md:inline hidden" height={30} width={30} />
      </div>

      <main className="md:ml-64">
        <section
          id="intro"
          className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b  overflow-hidden"
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

        <About />

        <Experience />

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
                href="https://www.linkedin.com/in/korni-govindapriya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/govindapriya123"
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
