import { useRouter } from 'next/router'
import React from 'react'

import { MdOutlineChevronRight } from 'react-icons/md'

export const LinkBtn = ({ link, href }) => {
  const router = useRouter()

  return (
    <div
      className="flex cursor-pointer items-center text-blue-700 hover:underline"
      onClick={() => router.push(href)}
    >
      <span>{link}</span>
      <MdOutlineChevronRight className="translate-y-[1.1px] transform text-lg" />
    </div>
  )
}
