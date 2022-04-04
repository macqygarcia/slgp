import { useRouter } from 'next/router'

export default function Resource({ resource }) {
  const router = useRouter()
  if (!resource) {
    return null
  }
  const { id } = router.query
  return <div>{id}</div>
}

// export async function getStaticPaths() {
//   // Get all the list of pokemon
//   const resp = await fetch(
//     'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json'
//   )

//   const pokemon = await resp.json()

//   return {
//     // paths: [{ params: { id: "1" }}]
//     paths: pokemon.map(pokemon => ({
//       params: { id: pokemon.id.toString() }
//     })),
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const resp = await fetch(
//     `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
//   )
//   return {
//     props: {
//       resource: await resp.json()
//     }
//     // revalidate: 30,
//     // example use case reviews, comments (Dont want to update every single request)
//   }
// }
