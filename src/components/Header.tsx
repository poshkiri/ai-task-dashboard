import { Github, LayoutDashboard } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050711]/78 backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#" className="brand-logo">
          <span className="brand-mark" aria-hidden="true">
            <LayoutDashboard className="h-5 w-5" />
          </span>
          <span className="truncate">AI Task Dashboard</span>
        </a>

        <a href="https://github.com/poshkiri" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-cyan-300/10 sm:inline-flex">
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </nav>
    </header>
  );
}
