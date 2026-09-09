import type { TaskItem } from '@shared/types';
import { ActionButton } from '@/components/tasks/action-button';
import { Greeting } from '@/components/tasks/greeting';
import { ImageGallery } from '@/components/tasks/image-gallery';
import { ProfileCard } from '@/components/tasks/profile-card';
import { TaskList } from '@/components/tasks/task-list';

export const COMPONENTS_TASKS: TaskItem[] = [
  {
    id: 'greeting',
    num: '01',
    title: 'Компонент «Приветствие»',
    taskText:
      'Создай компонент Greeting, который рендерит заголовок <h1> с текстом «Привет, мир!» и абзац <p> с текстом «Это мой первый React-компонент».',
    component: <Greeting />,
    fileName: 'greeting.tsx',
    code: `export function Greeting() {
  return (
    <div className="space-y-1">
      <h1 className="text-xl font-bold tracking-tight text-white">
        Привет, мир!
      </h1>
      <p className="text-xs sm:text-sm text-[#8b949e]">
        Это мой первый React-компонент
      </p>
    </div>
  );
}`,
  },
  {
    id: 'task-list',
    num: '02',
    title: 'Компонент со списком задач',
    taskText:
      'Напиши компонент TaskList, который отображает неупорядоченный список (<ul>) из 4 пунктов (<li>) с названиями простых дел.',
    component: <TaskList />,
    fileName: 'task-list.tsx',
    code: `export function TaskList() {
  const tasks = ['Позавтракать', 'Проверить почту', 'Сделать зарядку', 'Выпить стакан воды'];

  return (
    <ul className="w-full max-w-sm rounded-lg border border-[#30363d] bg-[#161b22] divide-y divide-[#21262d] list-none p-0 m-0 overflow-hidden text-xs">
      {tasks.map((task) => (
        <li key={task} className="flex items-center gap-3 px-3.5 py-2.5 text-[#c9d1d9] hover:bg-[#1f242c] transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] shrink-0" />
          <span>{task}</span>
        </li>
      ))}
    </ul>
  );
}`,
  },
  {
    id: 'action-button',
    num: '03',
    title: 'Кнопка и статическое сообщение',
    taskText:
      'Создай компонент ActionButton с кнопкой <button> «Нажми меня» и параграфом <p> «Кнопка пока не нажата». Состояние не используется.',
    component: <ActionButton />,
    fileName: 'action-button.tsx',
    code: `export function ActionButton() {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <button
        type="button"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] active:scale-[0.98] text-[#c9d1d9] hover:text-white border border-[#30363d] text-xs font-mono font-medium transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] cursor-pointer"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        Нажми меня
      </button>
      <p className="font-mono text-xs text-[#8b949e]">
        Кнопка пока не нажата
      </p>
    </div>
  );
}`,
  },
  {
    id: 'profile-card',
    num: '04',
    title: 'Карточка профиля',
    taskText:
      'Напиши компонент ProfileCard: заголовок <h2> «Анна Иванова», подзаголовок <h3> «Веб-разработчик», био и список <ul> из 3 навыков.',
    component: <ProfileCard />,
    fileName: 'profile-card.tsx',
    code: `export function ProfileCard() {
  const skills = ['HTML', 'CSS', 'React'];

  return (
    <div className="w-full max-w-sm rounded-lg border border-[#30363d] bg-[#161b22] p-4 text-xs shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-[#21262d] border border-[#30363d] flex items-center justify-center font-mono font-bold text-[#58a6ff]">
          AI
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white leading-tight">Анна Иванова</h2>
          <h3 className="text-xs text-[#8b949e] font-normal">
            Инженер интерфейсов
          </h3>
        </div>
      </div>

      <p className="text-[#8b949e] mt-3 leading-relaxed">
        Специализация на компонентной архитектуре, типизации и дизайн-системах.
      </p>

      <ul className="flex flex-wrap gap-1.5 mt-3.5 pt-3 border-t border-[#21262d] list-none p-0">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded bg-[#0d1117] px-2 py-0.5 font-mono text-[11px] text-[#58a6ff] border border-[#30363d]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
  },
  {
    id: 'image-gallery',
    num: '05',
    title: 'Галерея картинок',
    taskText:
      'Создай компонент ImageGallery, который выводит 3 изображения подряд в теге <img> с атрибутом alt в один ряд.',
    component: <ImageGallery />,
    fileName: 'image-gallery.tsx',
    code: `export function ImageGallery() {
  const images = [
    { id: 1, src: 'https://picsum.photos/seed/arch1/400/400', alt: 'Архитектурный узел 1' },
    { id: 2, src: 'https://picsum.photos/seed/arch2/400/400', alt: 'Архитектурный узел 2' },
    { id: 3, src: 'https://picsum.photos/seed/arch3/400/400', alt: 'Архитектурный узел 3' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-md">
      {images.map((img) => (
        <div key={img.id} className="aspect-square rounded-lg overflow-hidden border border-[#30363d] bg-[#161b22]">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}`,
  },
];
