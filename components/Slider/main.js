import Image from 'next/image'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function HomeSlides() {
  return (
    <section className="relative flex h-[50rem] w-screen items-center justify-center bg-zinc-100">
      <Image
        src="/slide-gradient.jpg"
        width="100%"
        height="100%"
        alt="slide show image"
        layout="responsive"
        objectFit="contain"
      />
      <section className="absolute flex h-full w-full items-center justify-between">
        <div className="cursor-pointer rounded-full bg-zinc-200/5 p-1">
          <MdChevronLeft className="text-zinc-100/50 lg:text-4xl " />
        </div>
        <div className="cursor-pointer rounded-full bg-zinc-200/5 p-1">
          <MdChevronRight className="text-zinc-100/50 lg:text-4xl" />
        </div>
      </section>
    </section>
  )
}
