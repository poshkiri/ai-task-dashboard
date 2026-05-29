import { motion } from 'framer-motion';
import { ArrowRightLeft, Sparkles, Trash2 } from 'lucide-react';
import { fadeUp } from '../motion';
import type { Priority, Task } from '../types';

const priorityClass: Record<Priority, string> = {
  Low: 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100',
  Medium: 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100',
  High: 'border-violet-300/30 bg-violet-400/15 text-violet-100',
};

export function TaskCard({
  task,
  onDelete,
  onStatusChange,
  onImprove,
}: {
  task: Task;
  onDelete: (id: string) => void;
  onStatusChange: (id: string) => void;
  onImprove: (id: string) => void;
}) {
  return (
    <motion.article variants={fadeUp} layout whileHover={{ y: -6, scale: 1.01 }} className="task-card">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{task.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{task.description}</p>
        </div>
        <button type="button" onClick={() => onDelete(task.id)} className="icon-button" aria-label="Удалить задачу">
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-medium text-slate-200">
          {task.status}
        </span>
        <span className={`rounded-full border px-3 py-2 text-xs font-medium ${priorityClass[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button type="button" onClick={() => onStatusChange(task.id)} className="btn-secondary">
          <ArrowRightLeft className="h-5 w-5" />
          Изменить статус
        </button>
        <button type="button" onClick={() => onImprove(task.id)} className="btn-primary">
          <Sparkles className="h-5 w-5" />
          Improve task
        </button>
      </div>
    </motion.article>
  );
}
