interface CatalogFiltersProps {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function CatalogFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: CatalogFiltersProps) {
  return (
    <div className="mb-6 grid gap-4 rounded-3xl bg-white p-4 shadow sm:grid-cols-2">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by character name"
        className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
      />

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
      >
        <option value="all">All statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
