import axios from 'axios'
import { useState } from 'react'
import {
  Snackbar,
  Button,
  TextField
} from '@mui/material'

export default function TicketForm() {

  const defaultTicket = {
    name: '',
    email: '',
    description: '',
    submitted: false,
  }

  const [ ticket, setTicket ] = useState(defaultTicket);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    const res = await axios({
      method: 'POST',
      url: '/api/tickets',
      data: ticket,
    });
    setTicket({ ...defaultTicket, submitted: true });
    setTimeout(() =>
      setTicket({ ...defaultTicket, submitted: false }),
      6000
    );
  }

  return (
    <>
      <form onSubmit={onSubmit} className="w-full">
        <TextField
          className="w-full my-1"
          size="small"
          color="primary"
          label="Name"
          variant="filled"
          value={ticket.name}
          onChange={evt => setTicket({
            ...ticket,
            name: evt.target.value
          })}
          required />
        <TextField
          className="w-full my-1"
          type="email"
          size="small"
          color="primary"
          label="Email"
          variant="filled"
          value={ticket.email}
          onChange={evt => setTicket({
            ...ticket,
            email: evt.target.value
          })}
          required />
        <TextField
          label="Description"
          className="w-full my-1"
          multiline
          rows={4}
          value={ticket.description}
          onChange={evt => setTicket({
            ...ticket,
            description: evt.target.value
          })}
          required />
        <Button
          className="w-full my-1"
          variant="outlined"
          type="submit">
            Submit Ticket
        </Button>
      </form>
      <Snackbar
        open={ticket.submitted}
        autoHideDuration={10000}
        onClose={() => setTicket({ ...ticket, submitted: false })}
        message="Ticket created!"
      />
    </>
  )
}
