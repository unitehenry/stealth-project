import Head from 'next/head'
import TicketForm from '../components/TicketForm'
import { createTheme, ThemeProvider } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';

// Roboto Font
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function Home() {

  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#f3f8f2',
      },
      secondary: {
        main: '#F50057',
      },
      background: {
        default: '#2F4858',
      },
      text: {
        primary: '#f3f8f2',
        secondary: '#f3f8f2',
      },
    },
  });

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
          <div className="
            h-screen w-full flex flex-col
            justify-center items-center py-8 px-4 md:px-0">
            <div className="w-full py-4 bg-[#406278] rounded px-4 rojunded shadow-lg md:max-w-lg">
              <div className="w-full flex justify-center mb-4">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Image src="/stealth.png" width={100} height={100} />
                </div>
              </div>
              <h1 className="text-center text-xl my-4">
                Submit a Ticket
              </h1>
              <TicketForm />
            </div>
              <div className="w-full flex justify-center items-center mt-2">
                <Link className="text-xs text-gray-800" href="/dashboard">
                  Admin Login
                </Link>
              </div>
          </div>
        </main>
      </ThemeProvider>
    </>
  )
}
