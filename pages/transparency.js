import { PageHeader } from '../components/Header'
import { getTransparecyFiles } from '../graphcms/queries'

export default function Transparency({ transparencies }) {
  console.log(transparencies)
  return (
    <div>
      <PageHeader>Browse Archives</PageHeader>
      {transparencies.map(transparency => (
        <div key={transparency.id}>
          <h2 className="mt-20 text-2xl font-semibold">
            {transparencies.title}
          </h2>

          <div className="mx-auto w-full py-5">
            <h3 className="py-2 text-lg text-zinc-700">Financial Plan</h3>
            <ul className="space-y-1">
              <li className="cursor-pointer text-sm text-blue-800">
                Financial Plan FY 2021
              </li>
              <li className="cursor-pointer text-sm text-blue-800">
                Financial Plan FY 2020
              </li>
              <li className="cursor-pointer text-sm text-blue-800">
                Financial Plan FY 2019
              </li>
              <li className="cursor-pointer text-sm text-blue-800">
                Financial Plan FY 2018
              </li>
              <li className="cursor-pointer text-sm text-blue-800">
                Financial Plan FY 2017
              </li>
            </ul>
          </div>
        </div>
      ))}
      <section></section>
    </div>
  )
}

export async function getServerSideProps() {
  const transparencies = await getTransparecyFiles()
  return {
    props: {
      transparencies
    }
  }
}
