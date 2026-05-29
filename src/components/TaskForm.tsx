import { motion } from 'framer-motion';
import { Plus, TextCursorInput } from 'lucide-react';
import { fadeUp } from '../motion';
import type { Priority, TaskDraft, TaskStatus } from '../types';

const priorities: Priority[] = ['Low', 'Medium', 'High'];
const statuses: TaskStatus[] = ['Todo', 'In Progress', 'Done'];

export function TaskForm({
  draft,
  onChange,
  onSubmit,
}: {
  draft: TaskDraft;
  onChange: (draft: TaskDraft) => void;
  onSubmit: () => void;
}) {
  return (
    <motion.form
      variants={fadeUp}
      className="glass-panel"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <div className="mb-6">
        <p className="text-sm font-medium text-lime-200">Create task</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Добавить задачу</h2>
      </div>

      <label className="field-group">
        <span className="field-label">
          <TextCursorInput className="h-4 w-4 text-lime-200" />
          Название задачи
        </span>
        <input
          value={draft.title}
          onChange={(event) => onChange({ ...draft, title: event.target.value })}
          className="field-input"
          placeholder="Например: сверстать карточку проекта"
        />
      </label>

      <label className="field-group mt-4">
        <span className="field-label">Описание</span>
        <textarea
          value={draft.description}
          onChange={(event) => onChange({ ...draft, description: event.target.value })}
          className="field-input min-h-28 resize-none"
          placeholder="Что нужно сделать и какой результат ожидается?"
        />
      </label>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="field-group">
          <span className="field-label">Приоритет</span>
          <select
            value={draft.priority}
            onChange={(event) => onChange({ ...draft, priority: event.target.value as Priority })}
            className="field-input"
          >
            {priorities.map((priority) => (
              <option key={priority}>{priority}</option>
            ))}
          </select>
        </label>

        <label className="field-group">
          <span className="field-label">Статус</span>
          <select
            value={draft.status}
            onChange={(event) => onChange({ ...draft, status: event.target.value as TaskStatus })}
            className="field-input"
          >
            {statuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit" className="btn-primary mt-5 w-full">
        <Plus className="h-5 w-5" />
        Добавить задачу
      </button>
    </motion.form>
  );
}
