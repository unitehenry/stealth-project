import axios from 'axios'
import moment from 'moment'
import { useState, useEffect } from 'react'
import {
  Dialog,
  Box,
  Paper,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Drawer,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material'

export default function TicketsTable() {

  const [ tickets, setTickets ] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/tickets',
    }).then(res => setTickets(res.data))
  }, []);

  const [ currentTicket, setCurrentTicket ] = useState(null);

  return (
    <>
      <TableContainer
        as={Paper}
        className="bg-[#406278] shadow-lg">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticket</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Submitted</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { tickets.map(tr => {
              return (
                <TableRow
                  onClick={() => setCurrentTicket(tr)}
                  className="cursor-pointer hover:bg-[#2F4858]"
                  key={tr.id}>
                    <TableCell>
                      { tr.number }
                    </TableCell>
                    <TableCell>
                      { tr.name }
                    </TableCell>
                    <TableCell>
                      { moment.utc(tr.created).format('MM/DD/yyyy') }
                    </TableCell>
                    <TableCell>
                      { tr.status.toUpperCase() }
                    </TableCell>
                </TableRow>
              )
            }) }
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer anchor="right" open={currentTicket || false}>
        <Box className="h-full bg-[#2F4858] w-full md:w-[35vw] p-4">
          <Typography variant="h1" className="text-xl">
            Case #{currentTicket?.number}
          </Typography>
          <br />
          <Box>
            <TextField
              label="Name"
              className="w-full mb-4"
              value={currentTicket?.name} />
            <TextField
              label="Email"
              className="w-full mb-4"
              value={currentTicket?.email} />
            <FormControl className="w-full">
              <InputLabel id="status-label">
                Status
              </InputLabel>
              <Select
                className="w-full mb-4"
                label="Status"
                labelId="status-label"
                onChange={evt => {
                  setCurrentTicket({
                    ...currentTicket,
                    status: evt.target.value,
                  })
                }}
                value={currentTicket?.status}>
                <MenuItem
                  className="text-gray-800"
                  value="new">
                    New
                </MenuItem>
                <MenuItem
                  className="text-gray-800"
                  value="in progress">
                  In Progress
                </MenuItem>
                <MenuItem
                  className="text-gray-800"
                  value="closed">
                  Closed
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Description"
              className="w-full mb-4 text-white"
              multiline
              rows={4}
              value="some description"
              required />
            <Box className="flex flex-col">
              <Button
                onClick={() => setCurrentTicket({
                  ...currentTicket,
                  openResponse: true,
                })}
                variant="contained"
                className="w-full bg-white mb-2">
                Respond to Ticket
              </Button>
              <Button variant="contained" className="w-full bg-white mb-2">
                Update Status
              </Button>
              <Button 
                onClick={() => setCurrentTicket(null)}
                className="w-full mb-2">
                  Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
      <Dialog open={currentTicket?.openResponse || false}>
        <Box as="form" className="bg-[#406278] md:w-[600px] p-4">
          <Typography variant="h2" className="text-white text-xl mb-2">
            Respond to Ticket
          </Typography>
          <TextField
            label="Message"
            className="w-full mb-2"
            multiline
            rows={4}
            required />
          <Button variant="contained" className="w-full bg-white mb-2">
            Send Message
          </Button>
          <Button
            onClick={() => setCurrentTicket({
              ...currentTicket,
              openResponse: false,
            })}
            className="w-full mb-2">
              Close
          </Button>
        </Box>
      </Dialog>
    </>
  )
}
