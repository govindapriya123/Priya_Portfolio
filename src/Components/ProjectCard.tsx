function ProjectCard({
  title,
  description,
  details,
  techs,
}: {
  title: string;
  description: string;
  details: string;
  techs: string[];
}) {
  return (
    <div className="group bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-lg p-8 hover:border-cyan-500/50 transition overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition opacity-0 group-hover:opacity-100"></div>

      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-cyan-400 font-medium mb-4">{description}</p>
        <p className="text-slate-300 mb-6">{details}</p>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
