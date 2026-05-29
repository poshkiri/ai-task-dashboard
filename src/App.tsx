import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Filters } from './components/Filters';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsCards } from './components/StatsCards';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import {
  createTask,
  filterTasks,
  getNextStatus,
  getStats,
  improveTaskDescription,
  initialDraft,
  loadTasks,
  saveTasks,
} from './lib/tasks';
import { stagger } from './motion';
import type { FilterType, Task, TaskDraft } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());
  const [draft, setDraft] = useState<TaskDraft>(initialDraft);
  const [filter, setFilter] = useState<FilterType>('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const stats = useMemo(() => getStats(tasks), [tasks]);
  const visibleTasks = useMemo(() => filterTasks(tasks, filter, search), [tasks, filter, search]);

  const addTask = () => {
    if (!draft.title.trim()) return;
    setTasks((current) => [createTask(draft), ...current]);
    setDraft(initialDraft);
  };

  const deleteTask = (id: string) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const changeStatus = (id: string) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, status: getNextStatus(task.status) } : task)),
    );
  };

  const improveTask = (id: string) => {
    setTasks((current) => current.map((task) => (task.id === id ? improveTaskDescription(task) : task)));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#070806] text-white">
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div className="fixed inset-0 -z-10 bg-glow" />

      <Header />
      <Hero stats={stats} />

      <section id="dashboard" className="px-5 py-12 sm:px-8 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[0.72fr_1.28fr]"
        >
          <TaskForm draft={draft} onChange={setDraft} onSubmit={addTask} />

          <div className="grid gap-6">
            <StatsCards stats={stats} />
            <Filters activeFilter={filter} search={search} onFilterChange={setFilter} onSearchChange={setSearch} />
            <TaskList tasks={visibleTasks} onDelete={deleteTask} onStatusChange={changeStatus} onImprove={improveTask} />
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
