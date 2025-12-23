function AchievementItem({
  icon,
  title,
  subtitle,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition flex gap-4">
      <div className="text-cyan-400 flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-sm text-slate-400 mb-2">{subtitle}</p>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default AchievementItem;
