import { useRouter } from 'next/router'

export default function handleRouteI(link) {
  const router = useRouter()
  return router.push(link)
}
