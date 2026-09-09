export function TaskList() {
  const tasks = ['Позавтракать', 'Проверить почту', 'Сделать зарядку', 'Выпить стакан воды'];

  return (
    <ul className="w-full max-w-sm rounded-lg border border-zinc-800 bg-zinc-900/80 divide-y divide-zinc-800/80 list-none p-0 m-0 overflow-hidden text-xs">
      {tasks.map((task) => (
        <li key={task} className="flex items-center gap-3 px-3.5 py-2.5 text-zinc-200 hover:bg-zinc-800/50 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
          <span>{task}</span>
        </li>
      ))}
    </ul>
  );
}
