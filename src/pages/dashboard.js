import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Typography,
  Button,
  Toolbar
} from '@mui/material'
import { useUser } from '@auth0/nextjs-auth0/client';

import Page from '../components/Page'
import Navbar from '../components/Navbar'
import TicketsTable from '../components/TicketsTable'

export default function Dashboard() {

  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [ isLoading ]);

  return (
    <>
      <Head>
        <title>Stealth Help Desk</title>
        <meta name="description" content="Stealth Help Desk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Navbar />
        <Box className="p-4 m-auto max-w-6xl">
          <Box className="mt-8">
            <Typography variant="h1" className="text-2xl mb-2">
              Tickets
            </Typography>
            <TicketsTable />
          </Box>
        </Box>
      </Page>
    </>
  );
}
