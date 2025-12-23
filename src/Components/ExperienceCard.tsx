
function ExperienceCard({
  title,
  company,
  date,
  achievements,
}: {
  title: string;
  company: string;
  date: string;
  achievements: string[];
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 hover:border-slate-700 transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-cyan-400">{company}</p>
        </div>
        <span className="text-slate-500 text-sm">{date}</span>
      </div>
      <ul className="space-y-3">
        {achievements.map((achievement, i) => (
          <li key={i} className="flex gap-3 text-slate-300">
            <span className="text-cyan-400 flex-shrink-0 mt-1">→</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard