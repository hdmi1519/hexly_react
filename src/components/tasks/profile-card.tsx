export function ProfileCard() {
  const skills = ['HTML', 'CSS', 'React'];

  return (
    <div className="w-full max-w-sm rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 text-xs">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono font-bold text-white">
          AI
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white leading-tight">Анна Иванова</h2>
          <h3 className="text-xs text-zinc-400 font-normal">
            Инженер интерфейсов
          </h3>
        </div>
      </div>

      <p className="text-zinc-400 mt-3 leading-relaxed">
        Специализация на компонентной архитектуре, типизации и дизайн-системах.
      </p>

      <ul className="flex flex-wrap gap-1.5 mt-3.5 pt-3 border-t border-zinc-800 list-none p-0">
        {skills.map((skill) => (
          <li
            key={skill}
            className="badge badge-sm bg-zinc-800 border-zinc-700 font-mono text-[11px] text-zinc-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
