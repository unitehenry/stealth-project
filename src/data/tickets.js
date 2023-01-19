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
        $7
      ) RETURNING *`,
    values: [
      uuidv4(),
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
