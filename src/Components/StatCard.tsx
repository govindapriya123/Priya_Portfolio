function StatCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`p-6 rounded-lg border transition ${
        highlight
          ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30"
          : "bg-slate-900 border-slate-800 hover:border-slate-700"
      }`}
    >
      <p className="text-slate-400 text-sm mb-2">{label}</p>
      <p className={`text-3xl font-bold ${highlight ? "text-cyan-400" : "text-white"}`}>{value}</p>
    </div>
  );
}

export default StatCard;
