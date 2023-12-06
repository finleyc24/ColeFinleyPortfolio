import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Use the correct path for serving static files
app.use(express.static(join(__dirname, 'public')));

app.get('/', (_req, res) => {
    // Use the correct path for serving the HTML file
    res.sendFile(join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});