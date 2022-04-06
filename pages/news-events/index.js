import Image from 'next/image'
import { format } from 'date-fns'
import Link from 'next/link'
import { MdOutlineLocalFireDepartment } from 'react-icons/md'
import { PageHeader } from '../../components/Header'
import { getNewsEvents } from '../../graphcms/queries'

export default function NewsEvents({ newsEvents }) {
  if (!newsEvents) {
    return null
  }

  return (
    <div className="mb-20">
      <PageHeader>Latest News and Events</PageHeader>
      <ul className="mt-20 grid gap-10 sm:mx-auto sm:max-w-md md:max-w-full md:grid-cols-2 md:px-2 lg:grid-cols-3 xl:grid-cols-4 2xl:max-w-7xl 2xl:gap-5">
        {newsEvents.map(newsEvent => (
          <NewsEvent
            id={newsEvent.id}
            key={newsEvent.id}
            views={newsEvent.views}
            image={newsEvent.newsEventImage.url}
            date={newsEvent.publishedDate}
            title={newsEvent.title}
          />
        ))}
      </ul>
    </div>
  )
}

export const NewsEvent = ({ id, views, image, date, title }) => (
  <Link href={`/resources/${id}`} passHref>
    <li className="flex cursor-pointer flex-col items-start gap-2 bg-[#efeff0] p-2 ">
      <Image src={image} height={533} width={800} alt="" />
      <div className="space-y-2 p-2">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            {format(Date.parse(date), 'MMMM dd, yyyy')}
          </span>
          {views > 10 && (
            <MdOutlineLocalFireDepartment className="text-xl text-zinc-600 hover:text-blue-600" />
          )}
        </div>
        <h2 className="font-medium">{title}</h2>
      </div>
    </li>
  </Link>
)

export async function getServerSideProps() {
  const newsEvents = await getNewsEvents()
  return {
    props: {
      newsEvents
    }
  }
}
