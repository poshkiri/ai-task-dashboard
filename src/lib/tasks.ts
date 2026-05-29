import type { FilterType, Task, TaskDraft, TaskStats, TaskStatus } from '../types';

export const STORAGE_KEY = 'ai-task-dashboard/tasks';

export const initialDraft: TaskDraft = {
  title: '',
  description: '',
  priority: 'Medium',
  status: 'Todo',
};

export const seedTasks: Task[] = [
  {
    id: 'seed-1',
    title: 'Собрать hero section',
    description: 'Подготовить первый экран с сильным заголовком, CTA и адаптивной сеткой.',
    priority: 'High',
    status: 'In Progress',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-2',
    title: 'Проверить мобильную версию',
    description: 'Пройти основные экраны на телефоне и убедиться, что карточки не ломают layout.',
    priority: 'Medium',
    status: 'Todo',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'seed-3',
    title: 'Описать README',
    description: 'Добавить стек, функции, команды запуска и идеи для развития проекта.',
    priority: 'Low',
    status: 'Done',
    createdAt: new Date().toISOString(),
  },
];

export function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedTasks;
    const parsed = JSON.parse(raw) as Task[];
    return Array.isArray(parsed) ? parsed : seedTasks;
  } catch {
    return seedTasks;
  }
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function createTask(draft: TaskDraft): Task {
  return {
    id: crypto.randomUUID(),
    title: draft.title.trim(),
    description: draft.description.trim(),
    priority: draft.priority,
    status: draft.status,
    createdAt: new Date().toISOString(),
  };
}

export function getNextStatus(status: TaskStatus): TaskStatus {
  if (status === 'Todo') return 'In Progress';
  if (status === 'In Progress') return 'Done';
  return 'Todo';
}

export function getStats(tasks: Task[]): TaskStats {
  return {
    total: tasks.length,
    done: tasks.filter((task) => task.status === 'Done').length,
    inProgress: tasks.filter((task) => task.status === 'In Progress').length,
    highPriority: tasks.filter((task) => task.priority === 'High').length,
  };
}

export function filterTasks(tasks: Task[], filter: FilterType, search: string) {
  const normalizedSearch = search.trim().toLowerCase();

  return tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(normalizedSearch);
    const matchesFilter =
      filter === 'All' ||
      task.status === filter ||
      (filter === 'High priority' && task.priority === 'High');

    return matchesSearch && matchesFilter;
  });
}

export function improveTaskDescription(task: Task): Task {
  const source = task.description.trim() || 'уточнить задачу, критерии готовности и следующий шаг';
  const improved = `Цель: ${source}. План действий: уточнить ожидаемый результат, разбить работу на понятные шаги и проверить итог перед закрытием задачи. Критерий готовности: задача выполнена, результат можно показать и использовать дальше.`;

  return {
    ...task,
    description: improved,
  };
}
