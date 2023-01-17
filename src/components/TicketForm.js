import { Button, TextField } from '@mui/material'

export default function TicketForm() {
  return (
    <form className="w-full">
      <TextField
        className="w-full my-1"
        size="small"
        color="primary"
        label="Name"
        variant="filled" />
      <TextField
        className="w-full my-1"
        type="email"
        size="small"
        color="primary"
        label="Email"
        variant="filled" />
      <TextField
        label="Description"
        className="w-full my-1"
        multiline
        rows={4} />
      <Button
        className="w-full my-1"
        variant="outlined"
        type="submit">
          Submit Ticket
      </Button>
    </form>
  )
}
