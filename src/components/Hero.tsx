import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeUp, stagger } from '../motion';
import type { TaskStats } from '../types';

export function Hero({ stats }: { stats: TaskStats }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-16 lg:pt-16">
      <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
        <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-glow backdrop-blur">
          <Sparkles className="h-4 w-4 text-cyan-300" />
          Local AI-style task manager
        </motion.div>
        <motion.h1 variants={fadeUp} className="max-w-5xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
          Управляйте задачами в современном AI-style dashboard
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Учебное React-приложение с задачами, фильтрами, поиском, статистикой, сохранением в браузере и локальным улучшением описаний по шаблону.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#dashboard" className="btn-primary">
            Открыть dashboard
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="absolute -inset-8 rounded-[32px] bg-cyan-400/15 blur-3xl animate-pulseGlow" />
        <div className="hero-card animate-float">
          <p className="text-sm text-cyan-200">Dashboard snapshot</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Snapshot label="Total" value={stats.total} />
            <Snapshot label="Done" value={stats.done} />
            <Snapshot label="In work" value={stats.inProgress} />
            <Snapshot label="High" value={stats.highPriority} />
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

function Snapshot({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
}
