import type { ReactNode } from 'react';

export interface TaskItem {
  id: string;
  num: string;
  title: string;
  taskText: string;
  component: ReactNode;
  fileName: string;
  code: string;
  fullWidth?: boolean;
}
