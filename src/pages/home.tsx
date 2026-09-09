import { Link } from 'react-router-dom';
import { PROJECTS } from '@data/projects';
import type { ProjectCard } from '@shared/types/projects.types';

export function HomePage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Практические задания и проекты
          </h1>
        </div>
      </div>

      <div className="divide-y divide-zinc-800 rounded-lg border border-zinc-800 bg-zinc-900/60 overflow-hidden">
        {PROJECTS.map((project: ProjectCard) => {
          const isExternal = project.path.startsWith('http');

          return (
            <div
              key={project.id}
              className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 hover:bg-zinc-850/50 transition-colors"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <span className="badge badge-sm bg-zinc-800 border-zinc-700 text-zinc-200">
                    {project.tag}
                  </span>
                  <span className="text-zinc-500">{project.meta}</span>
                </div>

                <h2 className="text-sm sm:text-base font-semibold text-white">
                  {project.title}
                </h2>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center pt-1 md:pt-0">
                {project.isActive ? (
                  isExternal ? (
                    <a
                      href={project.path}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] active:scale-[0.98] text-[#c9d1d9] hover:text-white border border-[#30363d] text-xs font-mono font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <Link
                      to={project.path}
                      className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] active:scale-[0.98] text-[#c9d1d9] hover:text-white border border-[#30363d] text-xs font-mono font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
                    >
                      Перейти →
                    </Link>
                  )
                ) : (
                  <span className="w-full sm:w-auto text-center btn btn-sm btn-disabled border border-zinc-800 bg-zinc-900 text-zinc-600 text-xs font-mono">
                    В разработке
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
