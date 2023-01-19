import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import getPostgresClient from '../services/postgres';

export async function createTicket(ticket) {
  const client = getPostgresClient();
  await client.connect();
  const response = await client.query({
    name: 'create-ticket',
    text: `
      INSERT INTO tickets(
        id,
        number,
        created,
        modified,
        status,
        name,
        email,
        description
      ) VALUES(
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8
      ) RETURNING *`,
    values: [
      uuidv4(),
      Math.random().toString(16).substring(2, 12).toUpperCase(),
      moment().utc().format(),
      moment().utc().format(),
      'new',
      ticket.name,
      ticket.email,
      ticket.description,
    ],
  });
  await client.end();
  return (response.rows || []).pop()
}

export async function getTickets() {
  const client = getPostgresClient();
  await client.connect();
  const response = await client.query({
    name: 'get-tickets',
    text: `
      SELECT 
        id,
        number,
        created,
        modified,
        status,
        name,
        email,
        description
      FROM tickets ORDER BY created DESC`,
  });
  await client.end();
  return response.rows || [];
}
