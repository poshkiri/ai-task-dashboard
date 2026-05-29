import { Search } from 'lucide-react';
import type { FilterType } from '../types';

const filters: FilterType[] = ['All', 'Todo', 'In Progress', 'Done', 'High priority'];

export function Filters({
  activeFilter,
  search,
  onFilterChange,
  onSearchChange,
}: {
  activeFilter: FilterType;
  search: string;
  onFilterChange: (filter: FilterType) => void;
  onSearchChange: (search: string) => void;
}) {
  return (
    <div className="glass-panel">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            className="field-input pl-12"
            placeholder="Поиск по названию задачи"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={activeFilter === filter ? 'filter-pill-active' : 'filter-pill'}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
