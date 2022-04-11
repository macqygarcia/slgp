// import { useState } from 'react'
import Image from 'next/image'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function HomeSlides({ list }) {
  // const [current, setCurrent] = useState(0)
  // const length = list.length

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1)
  // }

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1)
  // }

  if (!Array.isArray(list) || list.length <= 0) {
    return null
  }

  console.log(list[0].image.url)
  return (
    <div className="absolute top-0 left-0">
      <div className="relative h-[22rem] sm:h-[21rem] md:h-[30rem] xl:h-[34rem]">
        <div className="absolute top-0 left-0 -z-10 h-[22rem] w-screen sm:h-[21rem] md:h-[30rem] xl:h-[34rem]">
          <Image
            src={list[0].image.url}
            alt={list[0].title}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </div>
      </div>
      <section className="absolute z-10 flex h-full w-full items-center justify-between">
        <div className="cursor-pointer rounded-full bg-zinc-200/5 p-1">
          <MdChevronLeft className="text-zinc-100/50 lg:text-4xl " />
        </div>
        <div className="cursor-pointer rounded-full bg-zinc-200/5 p-1">
          <MdChevronRight className="text-zinc-100/50 lg:text-4xl" />
        </div>
      </section>
    </div>
  )
}
