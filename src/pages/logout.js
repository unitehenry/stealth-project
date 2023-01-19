import React from 'react'
import { useRouter } from 'next/router';

export default function Logout() {

  const router = useRouter();
  router.push('/api/auth/logout')

  return <React.Fragment />
}
