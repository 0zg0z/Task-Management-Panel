
export const TASK_STATUS = {
  TODO: 'yapılacak',
  IN_PROGRESS: 'yapılıyor',
  TEST: 'test',
  DONE: 'bitti'
} as const;

export const TASK_PRIORITY = {
  LOW: 'düşük',
  MEDIUM: 'orta',
  HIGH: 'yüksek'
} as const;

interface Task {
    id: number;
    name: string;
    desc: string;
    priority: typeof TASK_PRIORITY[keyof typeof TASK_PRIORITY];
    status: typeof TASK_STATUS[keyof typeof TASK_STATUS];
    projectId: number;
    UserId: number;
    addedDate: Date;
    deadline: Date;
}

export type { Task };
