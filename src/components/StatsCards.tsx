import { motion } from 'framer-motion';
import { CheckCircle2, Flame, ListTodo, Loader2 } from 'lucide-react';
import { fadeUp, stagger } from '../motion';
import type { TaskStats } from '../types';

export function StatsCards({ stats }: { stats: TaskStats }) {
  const items = [
    { label: 'Всего задач', value: stats.total, icon: ListTodo },
    { label: 'Выполнено', value: stats.done, icon: CheckCircle2 },
    { label: 'В работе', value: stats.inProgress, icon: Loader2 },
    { label: 'High priority', value: stats.highPriority, icon: Flame },
  ];

  return (
    <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.article key={item.label} variants={fadeUp} className="stat-card">
            <div>
              <p className="text-sm text-zinc-400">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold">{item.value}</p>
            </div>
            <div className="rounded-2xl border border-lime-300/20 bg-lime-300/10 p-3 text-lime-100">
              <Icon className="h-6 w-6" />
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
