import { useState } from 'react'

export const Slider = ({ list }) => {
  const [current, setCurrent] = useState(0)
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

  return (
    <div className="justfiy-between flex h-full w-full flex-col  ">
      <ul className="flex h-full items-end justify-center space-y-2">
        {list.map((item, index) => {
          return (
            <li className="" key={index}>
              {index === current && (
                <span className="text-lg lg:text-2xl">{item}</span>
              )}
            </li>
          )
        })}
      </ul>

      {/* Bullets */}
      <div className="mx-auto flex h-full w-full max-w-[10rem] items-end justify-center gap-4 lg:mx-auto lg:pb-10">
        {list.map((_, index) => (
          <span
            key={index}
            className={`mx-auto inline-block h-3 w-3 rotate-45 cursor-pointer rounded-full ${
              index === current ? 'bg-[#86868b]' : 'bg-[#c9c9c9]'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}
