import { useRouter } from 'next/router'
import React from 'react'

export default function Resource() {
  const router = useRouter()
  const { id } = router.query
  return <div>{id}</div>
}
