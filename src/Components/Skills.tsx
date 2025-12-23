function SkillCategory({ category, skills }: { category: string; skills: string[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
        {category}
      </h4>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <span className="text-slate-300">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
