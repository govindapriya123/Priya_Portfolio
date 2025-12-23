import { Mail, Phone, Linkedin, Github, Briefcase, Award, GraduationCap, Code, Wrench, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Govindapriya Korni</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 transition">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition">Projects</a>
              <a href="#education" className="text-slate-600 hover:text-slate-900 transition">Education</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="about" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                  Govindapriya Korni
                </h1>
                <p className="text-xl text-slate-600 mb-6">Senior Software Developer</p>
              </div>
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                GK
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:+919441873930" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition">
                <Phone size={18} />
                <span>+91-9441873930</span>
              </a>
              <a href="mailto:kornigovindapriya@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition">
                <Mail size={18} />
                <span>kornigovindapriya@gmail.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition">
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Briefcase size={24} className="text-blue-600" />
                Professional Summary
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                Front-End Developer with 2 years' experience in JavaScript, react-native, react. Skilled in
                building scalable apps. Familiar with Azure DevOps, quick to learn and a proactive team player
                focused on delivering high-quality software and achieving project success.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <Code size={28} className="text-blue-600" />
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Java', 'TypeScript'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm text-slate-700 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React-Native', 'React.js', 'Redux'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm text-slate-700 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl">
                <h3 className="font-bold text-slate-800 mb-3 text-lg">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Spring-boot', 'SQL', 'REST APIs', 'Firebase'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm text-slate-700 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <Wrench size={28} className="text-blue-600" />
              Experience
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Senior Software Developer</h3>
                    <p className="text-lg text-blue-600 font-semibold">HEXAGON Public Safety and Infrastructure</p>
                  </div>
                  <span className="text-slate-600 font-medium">July 2023 - Present</span>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Built responsive UIs for OnCall Dispatch (React.js) and OnCall Mobile (React Native) Android | iOS. Converted class to functional components which reduced the code maintenance and sonar issues.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Improved application speed by 30% through component memoization, reducing redundant re-renders. Implemented debouncing, cutting unnecessary API calls and enhancing responsiveness. Integrated TanStack query for efficient API calls and caching.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Migrated legacy codebase to functional components with React hooks. Designed and implemented Runtime Customization feature allowing customers to dynamically modify UI via JSON configuration.</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-teal-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Intern</h3>
                    <p className="text-lg text-teal-600 font-semibold">Medtronic Engineering and Innovation Center</p>
                  </div>
                  <span className="text-slate-600 font-medium">Jan 2023 - May 2023</span>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Acquired practical skills in SQL, HTML, CSS, JAVA, JavaScript and its asynchronous nature through comprehensive training.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Collaborated with senior engineers to adopt enterprise best practices along with code maintainability on Git.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <Code size={28} className="text-blue-600" />
              Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border-2 border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">CAFESTO</h3>
                  <ExternalLink size={20} className="text-blue-600" />
                </div>
                <p className="text-slate-600 mb-4">Food Ordering App</p>
                <p className="text-slate-700 mb-4">
                  Responsive food ordering web app with Google & Facebook sign-in (Firebase).
                  Integrated Stripe payments and real-time order tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Spring-Boot', 'Firebase', 'Stripe', 'SQL', 'JWT'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 border-2 border-slate-200 rounded-xl hover:border-teal-400 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">BLOGAPP</h3>
                  <ExternalLink size={20} className="text-teal-600" />
                </div>
                <p className="text-slate-600 mb-4">Blogging Platform</p>
                <p className="text-slate-700 mb-4">
                  Built a mobile blogging app with features create, edit and manage blogs.
                  Implemented secure APIs with Spring Boot and SQL for authentication and data Storage driving User Engagement.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React-Native', 'Spring-boot', 'SQL', 'JWT'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <GraduationCap size={28} className="text-blue-600" />
              Education
            </h2>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Bachelor of Engineering in Computer Science</h3>
                  <p className="text-lg text-blue-600 font-semibold">Vasavi College of Engineering</p>
                  <p className="text-slate-600">Hyderabad, TS</p>
                </div>
                <span className="text-slate-600 font-medium">Aug 2019 - May 2023</span>
              </div>
              <p className="text-slate-700 mb-3">
                Relevant coursework in DBMS, Object Oriented Programming and JAVA
              </p>
              <p className="text-slate-800 font-semibold">CGPA: 8.32</p>
            </div>
          </div>
        </section>

        <section id="achievements" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <Award size={28} className="text-blue-600" />
              Achievements & Certifications
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
                <Award className="text-yellow-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-800">POB Award, Hexagon</h3>
                  <p className="text-slate-700">For resolving critical bugs and enhancing OnCall Mobile</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <Award className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-800">Team Award, Hexagon</h3>
                  <p className="text-slate-700">For contributing to new feature development</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg">
                <Award className="text-teal-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-800">NPTEL - Programming in Java</h3>
                  <p className="text-slate-700">Elite + Gold Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg mb-4">Get in touch</p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="mailto:kornigovindapriya@gmail.com" className="hover:text-blue-400 transition">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Github size={24} />
            </a>
          </div>
          <p className="text-slate-400">© 2024 Govindapriya Korni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
