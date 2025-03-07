import { http, HttpResponse } from 'msw';
import tasks from './tasks.json';

let id = 3;

const createTask = (title) => ({
  id: `${id++}`,
  title,
  completed: false,
  createdAt: new Date('02-29-2024').toISOString(),
  lastModified: new Date('02-29-2024').toISOString(),
});

export const handlers = [
  http.get('/api/tasks', async () => {
    return HttpResponse.json(tasks);
  }),
  http.post('/api/task', async({ request }) => {
    const { title } = await request.json();
    const newTask = createTask(title);
    tasks.push(newTask);
    return HttpResponse.json(newTask, { status: 201 });
  })
];
