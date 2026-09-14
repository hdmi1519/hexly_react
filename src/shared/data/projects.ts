import type { ProjectCard } from '@shared/types/projects.types';

export const PROJECTS: ProjectCard[] = [
  {
    id: 'js_practice',
    tag: 'Практическая работа №0',
    title: 'Задачи на повторение JavaScript',
    description:
      'Работа с string, array, loop',
    path: 'https://github.com/hdmi1519/hexly_js_practice_tasks',
    isActive: true,
    meta: 'Uploaded on GitHub',
  },
  {
    id: 'components',
    tag: 'Практическая работа №1',
    title: 'Задачи на создание компонентов в React',
    description:
      'Базовая вёрстка пяти компонентов: Greeting, TaskList, ActionButton, ProfileCard и ImageGallery.',
    path: '/tasks/components',
    isActive: true,
    meta: '5/5 задач',
  },
  {
    id: 'emoji-finder',
    tag: 'Проект №1',
    title: 'Emoji Finder',
    description:
      'Вёрстка макета из Figma с поиском и фильтрацией смайликов. Использование Flexbox, Grid.',
    path: '/projects/emoji-finder',
    isActive: true,
    meta: 'Figma • Flex/Grid',
  },
  {
    id: 'emoji-finder/api',
    tag: 'Проект №1.2',
    title: 'Emoji Finder API',
    description:
      'API для поиска и фильтрации смайликов.',
    path: '/projects/emoji-finder/api',
    isActive: true,
    meta: 'Figma • Flex/Grid',
  },
  {
      id: 'harry-potter',
      tag: 'Проект №2',
      title: 'Harry Potter',
      description:
        'Вёрстка макета из Figma с поиском и фильтрацией смайликов. Использование Flexbox, Grid.',
      path: '/projects/harry-potter',
      isActive: true,
      meta: 'Figma • Flex/Grid',
    },
];
