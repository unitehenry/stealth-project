import Head from 'next/head'
import {
  Box,
  AppBar,
  ThemeProvider,
  Typography,
  Button,
  Toolbar
} from '@mui/material'
import theme from '../theme'
import TicketsTable from '../components/TicketsTable'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Stealth Help Desk</title>
        <meta name="description" content="Stealth Help Desk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppBar color="secondary" position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Button color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Box className="p-4 m-auto max-w-6xl">
          <Box className="mt-8">
            <Typography variant="h1" className="text-2xl mb-2">
              Tickets
            </Typography>
            <TicketsTable />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
