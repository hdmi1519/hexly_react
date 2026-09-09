import { useState } from 'react';
import { COMPONENTS_TASKS } from '@data/components-tasks';

export function ComponentsPracticePage() {
  const [activeTabs, setActiveTabs] = useState<Record<string, 'preview' | 'code'>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getTab = (id: string) => activeTabs[id] || 'preview';

  const setTab = (id: string, tab: 'preview' | 'code') => {
    setActiveTabs((prev) => ({ ...prev, [id]: tab }));
  };

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
            Задачи на создание компонентов в React
          </h1>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {COMPONENTS_TASKS.map((item) => {
          const tab = getTab(item.id);
          const isCopied = copiedId === item.id;

          return (
            <article
              key={item.id}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 overflow-hidden"
            >
              <div className="bg-zinc-900 px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <span className="badge badge-sm bg-zinc-800 border-zinc-700 text-zinc-200 font-mono shrink-0">
                    #{item.num}
                  </span>
                  <h2 className="text-sm font-semibold text-white truncate">
                    {item.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-0">
                  <span className="font-mono text-xs text-zinc-500 hidden md:inline">
                    {item.fileName}
                  </span>
                  <div className="join border border-zinc-800 bg-zinc-950 p-0.5 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setTab(item.id, 'preview')}
                      className={`join-item btn btn-xs border-none font-mono ${
                        tab === 'preview'
                          ? 'bg-zinc-800 text-white font-medium shadow-xs'
                          : 'btn-ghost text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Результат
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab(item.id, 'code')}
                      className={`join-item btn btn-xs border-none font-mono ${
                        tab === 'code'
                          ? 'bg-zinc-800 text-white font-medium shadow-xs'
                          : 'btn-ghost text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Код
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-zinc-900/30 border-b border-zinc-800/80 text-xs text-zinc-400 flex items-start gap-2 sm:gap-2.5">
                <span className="font-mono text-[11px] font-semibold text-zinc-300 uppercase tracking-wider shrink-0 mt-0.5">
                  ТЗ:
                </span>
                <span className="text-zinc-300 leading-relaxed font-sans text-xs">
                  {item.taskText}
                </span>
              </div>

              <div className="p-4 sm:p-6 min-h-24 sm:min-h-30 flex items-center justify-start bg-zinc-950/80 overflow-x-auto">
                {tab === 'preview' ? (
                  <div className="w-full min-w-0">
                    {item.component}
                  </div>
                ) : (
                  <div className="w-full min-w-0 relative">
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.code)}
                      className="btn btn-xs btn-ghost border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 absolute top-2 right-2 font-mono z-10"
                    >
                      {isCopied ? 'Скопировано' : 'Копировать'}
                    </button>
                    <pre className="p-3.5 sm:p-4 rounded-lg bg-zinc-900/90 border border-zinc-800 overflow-x-auto text-xs font-mono text-zinc-200 leading-relaxed pt-9 sm:pt-4">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
