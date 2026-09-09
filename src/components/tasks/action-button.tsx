export function ActionButton() {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <button
        type="button"
        className="btn btn-sm bg-white hover:bg-zinc-200 text-zinc-950 border-none font-mono text-xs font-semibold"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        Нажми меня
      </button>
      <p className="font-mono text-xs text-zinc-400">
        Кнопка пока не нажата
      </p>
    </div>
  );
}
