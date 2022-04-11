import Image from 'next/image'
import Link from 'next/link'
import { govLinks, govphLinks, navdata } from '../lib/navigation'

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F7] p-10 pt-20 lg:py-40">
      <div className="flex flex-col items-start gap-10 md:flex-row lg:mx-auto lg:justify-center lg:gap-20">
        <Image src="/rep-logo.webp" alt="DILG Logo" height="188" width="170" />

        <section>
          <span className="inline-block font-medium">Site Map</span>

          {navdata.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              <li className="relative cursor-pointer list-none text-zinc-600 hover:underline ">
                {link.link}
              </li>
            </Link>
          ))}
        </section>
        <section>
          <span className="inline-block font-medium">About GOVPH</span>
          {govphLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <li className=" cursor-pointer list-none text-zinc-600 hover:underline">
                {link.link}
              </li>
            </a>
          ))}
        </section>
        <section>
          <span className="inline-block font-medium">Government Links</span>
          {govLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <li className="cursor-pointer list-none  text-zinc-600 hover:underline">
                {link.link}
              </li>
            </a>
          ))}
        </section>
      </div>
    </footer>
  )
}
