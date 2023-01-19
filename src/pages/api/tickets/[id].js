import {
  updateTicket,
} from '../../../data/tickets';

export default async function handler(req, res) {
  switch(req.method) {
    case 'PUT':
    default: {
      res.status(200).json(await updateTicket(req.query.id, {
        status: req.body.status,
      }));
    }
  }
}
