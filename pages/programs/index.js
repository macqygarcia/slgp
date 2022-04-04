import Image from 'next/image'
import Link from 'next/link'
import { VscChevronRight } from 'react-icons/vsc'
import { PageHeader } from '../../components/Header'
import { WidthSection } from '../../components/Layouts/Section'
import Typhography from '../../components/Typhography'
import { programs } from '../../lib/staticData'

export default function Programs() {
  return (
    <div className="space-y-5 text-center">
      <PageHeader>Programs</PageHeader>
      <div className="lg:py-16">
        <WidthSection>
          <Typhography>
            As the SLGP gears up for its next five years, it reformualtes its
            strategic roadmap to more decisively contribute to the vision of
            providing excellent local service delivery through improved local
            development plans and institutionalized participatory governance
            mechanisms.
          </Typhography>
        </WidthSection>
      </div>

      <ul className="flex w-full flex-col items-center justify-center gap-1 md:grid md:grid-cols-2 md:gap-0 lg:px-3">
        {programs.map(({ program, img }, index) => (
          <li className="w-full" key={index}>
            <section className="w-full bg-[#fafafa]">
              <div className="flex w-full flex-col items-center justify-center">
                <div
                  className={`flex h-[30rem] w-full flex-col items-center justify-center gap-5 lg:p-5 xl:h-[35rem] ${
                    index == 0 && 'bg-black text-white'
                  } ${index == 3 && 'bg-red-400 text-white'}`}
                >
                  {/* <Image
                    src={img}
                    width={500}
                    height={548}
                    alt={program}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  /> */}
                  <p className="text-lg lg:text-2xl xl:mx-auto xl:max-w-xl">
                    {program}
                  </p>
                  <Link href="/" passHref>
                    <button className="group flex items-center font-light text-blue-700">
                      <span className="font-medium group-hover:underline">
                        Learn More
                      </span>
                      <VscChevronRight className="-translate-y-[0.025px]" />
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
  )
}
