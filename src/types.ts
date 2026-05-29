export type Priority = 'Low' | 'Medium' | 'High';

export type TaskStatus = 'Todo' | 'In Progress' | 'Done';

export type FilterType = 'All' | TaskStatus | 'High priority';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  createdAt: string;
}

export interface TaskDraft {
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
}

export interface TaskStats {
  total: number;
  done: number;
  inProgress: number;
  highPriority: number;
}
