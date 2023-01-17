import Head from 'next/head'
import {
  AppBar,
  ThemeProvider,
  Typography,
  Button,
  Toolbar
} from '@mui/material'
import theme from '../theme'

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
        <AppBar color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}
