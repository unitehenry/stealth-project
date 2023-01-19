import React from 'react'
import { useRouter } from 'next/router';

export default function Logout() {

  const router = useRouter();
  router.push('/')

  return <React.Fragment />
}
