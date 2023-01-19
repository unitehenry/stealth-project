import { Client } from 'pg';
export default () => new Client({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});
