import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="py-16 sm:py-24 text-center space-y-4">
      <div className="font-mono text-4xl sm:text-6xl font-bold text-zinc-700">
        404
      </div>
      <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
        Страница не найдена
      </h1>
      <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
        Запрошенный адрес не существует или был перемещён.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 active:scale-[0.98] text-white text-xs font-mono transition-all border border-zinc-700"
        >
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
