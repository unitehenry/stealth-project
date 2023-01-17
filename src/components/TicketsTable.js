import { useState, useEffect } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
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
  )
}
