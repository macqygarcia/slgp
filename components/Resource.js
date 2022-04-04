import Image from 'next/image'
import Link from 'next/link'
import {
  MdArrowCircleDown,
  MdFavoriteBorder,
  MdOutlineVisibility
} from 'react-icons/md'

export default function Resource() {
  return (
    <Link href="/resources/1" passHref>
      <li className="flex cursor-pointer flex-col items-start gap-2 ">
        <Image src="/Gradient.jpg" height={533} width={800} alt="" />
        <div className="space-y-2 p-2">
          <span className="text-zinc-400">November 2012</span>
          <h2 className="font-medium">
            Assessment of Bottom-up Processes in Planning and Budgeting
          </h2>
          <p className="text-zinc-700">
            Identify what particular processes in the BUB need ample time and
            those that needs more flexibility and resources so that relevant...
          </p>
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
