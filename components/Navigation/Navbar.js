import Link from 'next/link'
import { useRouter } from 'next/router'
import { navdata } from '../../lib/navigation'

export default function Navbar() {
  const router = useRouter()
  return (
    <header className="z-50 hidden w-full bg-slate-50 text-zinc-800 lg:block">
      <div className="flex items-center justify-center p-3">
        <nav className="flex items-center justify-center lg:gap-12">
          <ul className="flex items-center  justify-center gap-12">
            <li className="3s cursor-pointer font-bold text-zinc-600 transition-all ease-out hover:text-zinc-700">
              <a href="https://www.gov.ph/">gov.ph</a>
            </li>
            {navdata.map((link, index) => (
              <Link key={index} href={link.href} passHref>
                <li className="3s group relative cursor-pointer text-zinc-600 transition-all ease-out">
                  {link.link}
                  <span
                    className={`
                    ${router.pathname === link.href ? 'w-full' : 'w-0'} 
                    absolute -bottom-3 block h-[2px] rounded-full bg-zinc-600 transition-width duration-200 ease-in-out group-hover:w-full`}
                  />
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
