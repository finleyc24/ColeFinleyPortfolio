// server.js or server.mjs
import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/', (_req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Handle process termination gracefully
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server terminated');
    process.exit(0);
  });
});
