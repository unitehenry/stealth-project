import { 
  ThemeProvider
} from '@mui/material'
import theme from '../theme'

export default function Page({ children }) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}
