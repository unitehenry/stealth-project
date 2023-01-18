import { useState, useEffect } from 'react';
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

  const [ tickets, setTickets ] = useState([
    {
      id: 'abc',
      name: 'Wonder Burger',
      email: 'henry@getzealthy.com',
      status: 'new'
    }
  ]);

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
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { tickets.map(tr => {
              return (
                <TableRow
                  className="cursor-pointer hover:bg-[#2F4858]"
                  key={tr.id}>
                    <TableCell>
                      { tr.name }
                    </TableCell>
                    <TableCell>
                      { tr.email }
                    </TableCell>
                    <TableCell>
                      { tr.status }
                    </TableCell>
                </TableRow>
              )
            }) }
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer anchor="right" open={true}>
        <Box className="h-full bg-[#2F4858] w-full md:w-[35vw] p-4">
          <Typography variant="h1" className="text-xl">
            Case #10429238
          </Typography>
          <br />
          <Box>
            <TextField
              label="Name"
              className="w-full mb-4"
              value="Wonder Burger" />
            <TextField
              label="Email"
              className="w-full mb-4"
              value="henry@getzeathy.com" />
            <FormControl className="w-full">
              <InputLabel id="status-label">
                Status
              </InputLabel>
              <Select
                className="w-full mb-4"
                label="Status"
                labelId="status-label">
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
              <Button variant="contained" className="w-full bg-white mb-2">
                Respond to Ticket
              </Button>
              <Button variant="contained" className="w-full bg-white mb-2">
                Save
              </Button>
              <Button className="w-full mb-2">
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
      <Dialog open={true}>
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
            Save
          </Button>
          <Button className="w-full mb-2">
            Close
          </Button>
        </Box>
      </Dialog>
    </>
  )
}
