import type { ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';
import pool from '../lib/db';

// This handler can be used with Vite's dev server middleware or as a standalone Node handler
export async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end('Method Not Allowed');
    return;
  }
  try {
    const result = await pool.query('SELECT * FROM users');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result.rows));
  } catch (err) {
    console.error('Database error:', err);
    res.statusCode = 500;
    res.end('Database error');
  }
}

// For Vite dev server (if using Vite middleware API)
export default function vitePluginCustomersApi(server: ViteDevServer) {
  server.middlewares.use('/api/customers', (req, res, next) => {
    if (req.method === 'GET') {
      handler(req, res);
    } else {
      next();
    }
  });
} 