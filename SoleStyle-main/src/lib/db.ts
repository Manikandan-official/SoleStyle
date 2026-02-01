import { Pool } from 'pg';

const pool = new Pool({
  user: 'robin', // <-- replace with your PostgreSQL username
  host: 'localhost',
  database: 'robin', // <-- replace with your PostgreSQL database name
  password: 'robin', // <-- replace with your PostgreSQL password
  port: 5432,
});

export default pool;