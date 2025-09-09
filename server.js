import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Import and use the newsletter subscribe handler
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    // Import the handler function
    const { default: handler } = await import('./api/newsletter/subscribe.js');
    
    // Create a mock Vercel-like request/response object
    const mockReq = {
      method: 'POST',
      body: req.body,
      headers: req.headers
    };
    
    const mockRes = {
      status: (code) => ({
        json: (data) => res.status(code).json(data)
      }),
      json: (data) => res.json(data)
    };
    
    await handler(mockReq, mockRes);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});