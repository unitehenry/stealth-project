import Head from 'next/head'
import TicketForm from '../components/TicketForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stealth Help Desk</title>
        <meta name="description" content="Stealth Help Desk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TicketForm />
        <div className="w-full flex justify-center items-center">
          <a href="#">
            Admin Login
          </a>
        </div>
      </main>
    </>
  )
}
