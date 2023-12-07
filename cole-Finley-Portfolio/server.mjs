import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(new URL('public', import.meta.url).pathname));

const projects = [
  {
    name: 'Senior Project: Hanover College EAP app',
    description: 'Developed a web app for Emergency Action Plans at Hanover College.',
    technologies: ['NextJS', 'React', 'Bootstrap', 'VS Code'],
  },
  {
    name: 'Web Development: Personal Portfolio',
    description: 'Built a personal portfolio website to showcase skills and projects.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/', (req, res) => {
  res.sendFile(new URL('public/index.html', import.meta.url).pathname);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});