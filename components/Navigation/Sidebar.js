import { useState } from 'react'
import Link from 'next/link'

import { navdata } from '../../lib/navigation'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const [isOPen, setIsOPen] = useState(false)

  const router = useRouter()
  const handleClick = link => {
    setIsOPen(false)
    router.push(link)
  }

  return (
    <div
      className={`w-full overflow-hidden bg-slate-50  text-zinc-800 transition-all duration-300 ease-out lg:hidden ${
        isOPen ? 'z-300 fixed h-screen' : 'h-14'
      } `}
    >
      {/* LOGO DAGYAW DIALOGUES */}
      <div className=" group flex w-screen cursor-pointer items-center justify-center py-4">
        <Link href="/" passHref>
          <span className="3s inline-block pt-[1px] text-center text-2xl uppercase tracking-wider text-red-600 transition-all ease-out group-hover:text-red-900">
            SLGP
          </span>
        </Link>
      </div>

      {/* = Nav */}
      <div
        className="absolute top-5 left-5 flex cursor-pointer flex-col gap-2 p-2"
        onClick={() => setIsOPen(!isOPen)}
      >
        <span
          className={`inline-block h-[1px] w-5 origin-center transform bg-zinc-600 transition-all duration-100 ease-in-out ${
            isOPen ? 'translate-y-[5px] rotate-45' : 'translate-y-0 rotate-0'
          }`}
        />
        <span
          className={`inline-block h-[1px] w-5 origin-center transform bg-zinc-600 transition-all duration-100 ease-in-out ${
            isOPen
              ? '-translate-[1px] -translate-y-[4px] -rotate-45'
              : '-translate-y-0 -rotate-0'
          }`}
        />
      </div>

      {/* <span
        className={`inline-block h-[1px] w-screen bg-red-600 
      
      `}
      /> */}
      <nav className="h-screen w-screen">
        <ul className="flex h-screen flex-col gap-4 py-20 px-10">
          {navdata.map((link, index) => (
            <li
              key={index}
              onClick={() => handleClick(link.href)}
              className="3s relative cursor-pointer self-start pt-3 text-lg font-bold text-[#1d1d1f] transition-all ease-out"
            >
              {link.link}
              <span
                className={` ${
                  router.pathname === link.href ? 'w-full' : 'w-0'
                } 
                    absolute -bottom-3 block h-[1px] rounded-full bg-zinc-600 transition-width duration-200 ease-in-out group-hover:w-full`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
