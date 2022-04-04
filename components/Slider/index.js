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
    <div className="space-y-5">
      <ul className="space-y-2">
        {list.map((item, index) => {
          return (
            <li className="" key={index}>
              {index === current && <span>{item}</span>}
            </li>
          )
        })}
      </ul>
      <div className="mx-auto flex max-w-[8rem] items-center justify-center">
        {list.map((_, index) => (
          <span
            key={index}
            className={`mx-auto inline-block h-2 w-2 rotate-45 cursor-pointer rounded-full ${
              index === current ? 'bg-[#86868b]' : 'bg-[#c9c9c9]'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  )
}
