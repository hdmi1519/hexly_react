import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layouts/main';
import { HomePage } from '@/pages/home';
import { ComponentsPracticePage } from '@/pages/components-practice';
import { EmojiFinderPage } from '@/pages/emoji-finder';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'tasks/components', element: <ComponentsPracticePage /> },
      { path: 'projects/emoji-finder', element: <EmojiFinderPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
