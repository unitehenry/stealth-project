import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@mui/material'

export default function Navbar() {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stealth Help Desk
        </Typography>
        <Button as={Link} href="/logout" color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}
