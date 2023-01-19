import Head from 'next/head'
import TicketForm from '../components/TicketForm'
import { ThemeProvider, Box, Typography } from '@mui/material'
import theme from '../theme'
import Image from 'next/image'
import Link from 'next/link'

// Roboto Font
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function Home() {

  return (
    <>
      <Head>
        <title>Stealth Help Desk</title>
        <meta name="description" content="Stealth Help Desk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <Box className="
            h-screen w-full flex flex-col
            justify-center items-center py-8 px-4 md:px-0">
            <Box className="
              w-full py-4 bg-[#406278]
              rounded px-4 rojunded shadow-lg md:max-w-lg">
              <Box className="w-full flex justify-center mb-4">
                <Box className="bg-white rounded-full p-4 shadow-lg">
                  <Image
                    src="/stealth.png"
                    alt="logo"
                    width={100}
                    height={100} />
                </Box>
              </Box>
              <Typography variant="h1" className="text-center text-xl my-4">
                Submit a Ticket
              </Typography>
              <TicketForm />
            </Box>
              <Box className="w-full flex justify-center items-center mt-2">
                <Link className="text-xs text-gray-800" href="/dashboard">
                  Admin Login
                </Link>
              </Box>
          </Box>
        </main>
      </ThemeProvider>
    </>
  )
}
