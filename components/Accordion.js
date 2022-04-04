import { useState } from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'

export default function Accordion({ list }) {
  const [selected, setIsSelected] = useState(null)
  const [isHidden, setIsHidden] = useState(false)

  const handleClick = selectedQuestion => {
    setIsSelected(selectedQuestion)
    setIsHidden(!isHidden)
  }

  return (
    <div className="">
      <ul className="flex flex-col gap-1 text-left">
        {list.map((item, index) => (
          <li
            key={index}
            className={`relative flex cursor-pointer items-center justify-between border-l-2  bg-[#f2f2f2] p-5
            ${selected === index ? 'border-green-500' : 'border-green-200'}
            `}
            onClick={() => handleClick(index)}
          >
            <div className="space-y-2">
              <span className="font-medium">{item.question}</span>
              <p
                className={`${
                  selected === index ? 'block' : 'hidden'
                } text-zinc-600`}
              >
                {item.answer}
              </p>
            </div>
            <MdOutlineExpandMore
              className={`absolute top-5 right-5 transform text-lg duration-300 ease-in-out md:text-2xl ${
                selected === index ? 'rotate-180' : 'rotate-0'
              }`}
              onClick={() => handleClick(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
