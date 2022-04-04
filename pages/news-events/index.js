import Image from 'next/image'
import { MdOutlineLocalFireDepartment } from 'react-icons/md'
import { PageHeader } from '../../components/Header'

export default function NewsEvents() {
  return (
    <div>
      <PageHeader>Latest News and Events</PageHeader>
      <ul className="mt-20 grid gap-10 sm:mx-auto sm:max-w-md md:max-w-full md:grid-cols-2 md:px-2 lg:grid-cols-3 xl:grid-cols-4 2xl:max-w-7xl 2xl:gap-5">
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
        <NewsEvent />
      </ul>
    </div>
  )
}

const NewsEvent = () => (
  <li className="flex cursor-pointer flex-col items-start gap-2 ">
    <Image src="/duterte.jpg" height={533} width={800} alt="" />
    <div className="space-y-2 p-2">
      <div className="flex items-center justify-between">
        <span className="text-slate-400">November 17, 2021</span>
        <MdOutlineLocalFireDepartment className="text-xl text-zinc-600 hover:text-blue-600" />
      </div>
      <h2 className="font-medium">
        DILG warns business establishments violating MPHS may be closed; safety
        seals revoked
      </h2>
    </div>
  </li>
)
