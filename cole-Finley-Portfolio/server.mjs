// server.mjs
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static(new URL('public', import.meta.url).pathname));

app.get('/', (req, res) => {
  res.sendFile(new URL('public/index.html', import.meta.url).pathname);
});

// Add more routes or middleware as needed

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});