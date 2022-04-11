import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

import {
  MdArrowCircleDown,
  MdFavoriteBorder,
  MdOutlineVisibility
} from 'react-icons/md'

export default function Resource({ id, src, date, title }) {
  return (
    <Link href={`/resources/${id}`} passHref>
      <li className="flex w-full cursor-pointer flex-col items-center justify-center gap-2">
        <Image src={src} height={375} width={375} alt={title} />
        <div className="space-y-2 p-2">
          <span className="text-zinc-400">
            {format(Date.parse(date), 'MMMM yyyy')}
          </span>
          <h2 className="font-medium line-clamp-3">{title}</h2>
        </div>
        <div className="flex w-full items-center justify-around py-10">
          <div className="flex items-center justify-center gap-1">
            <MdOutlineVisibility className="text-xl text-zinc-600 hover:text-blue-600" />
            <span className="text-xs font-medium text-zinc-500">200</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdFavoriteBorder className="text-xl text-zinc-600 hover:text-blue-600" />
            <span className="text-xs font-medium text-zinc-500">100</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdArrowCircleDown className="text-xl text-zinc-600 hover:text-blue-600" />
            <span className="text-xs font-medium text-zinc-500">400</span>
          </div>
        </div>
      </li>
    </Link>
  )
}
