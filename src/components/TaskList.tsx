import { AnimatePresence, motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';
import { stagger } from '../motion';
import type { Task } from '../types';
import { TaskCard } from './TaskCard';

export function TaskList({
  tasks,
  onDelete,
  onStatusChange,
  onImprove,
}: {
  tasks: Task[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string) => void;
  onImprove: (id: string) => void;
}) {
  if (tasks.length === 0) {
    return (
      <div className="glass-panel py-12 text-center">
        <ClipboardList className="mx-auto h-12 w-12 text-cyan-200" />
        <h3 className="mt-5 text-2xl font-semibold">Задачи не найдены</h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-300">
          Попробуйте изменить фильтр, очистить поиск или добавить новую задачу.
        </p>
      </div>
    );
  }

  return (
    <motion.div variants={stagger} className="grid gap-5 xl:grid-cols-2">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
            onImprove={onImprove}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
