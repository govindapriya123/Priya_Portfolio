function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="block text-slate-400 hover:text-cyan-400 transition font-medium text-sm">
      {children}
    </a>
  );
}

export default NavLink;
