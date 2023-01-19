import {
  getTickets,
  createTicket,
} from '../../../data/tickets';

export default async function handler(req, res) {
  switch(req.method) {
    case 'POST': {
      res.status(200).json(await createTicket({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
      }));
    }
    case 'GET':
    default: {
      res.status(200).json(await getTickets());
    }
  }
}
