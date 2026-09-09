import { createHashRouter } from 'react-router-dom';
import { MainLayout } from '@/components/layouts/main';
import { HomePage } from '@/pages/home';
import { ComponentsPracticePage } from '@/pages/components-practice';
import { EmojiFinderPage } from '@/pages/emoji-finder';
import { NotFoundPage } from '@/pages/not-found';

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'tasks/components', element: <ComponentsPracticePage /> },
      { path: 'projects/emoji-finder', element: <EmojiFinderPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
