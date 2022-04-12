// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import { VscChevronRight } from 'react-icons/vsc'
import { PageHeader } from '../../components/Header'
import { WidthSection } from '../../components/Layouts/Section'
import Typhography from '../../components/Typhography'
import { getPrograms } from '../../graphcms/queries'

export default function Programs({ facades }) {
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
        {facades.map(facade => (
          <Link href="/" passHref key={facade.id}>
            <li className="group w-full cursor-pointer">
              <section className="w-full bg-[#fafafa]">
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="relative flex h-[32rem] w-full flex-col items-center justify-center gap-5 lg:p-5 xl:h-[39.2rem]">
                    <div className="absolute top-0 left-0 z-10 h-full w-full opacity-10 transition-all duration-300 ease-in-out group-hover:opacity-25">
                      <Image
                        src={facade.image.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                        alt={facade.name}
                      />
                    </div>
                    <p className="z-20 text-lg text-zinc-200 lg:text-2xl xl:mx-auto xl:max-w-xl">
                      {facade.name}
                    </p>
                    <div className="absolute z-0 h-full w-full bg-black transition-all duration-300 ease-in-out group-hover:bg-black/95" />

                    <button className="group z-20 flex items-center font-light text-blue-500">
                      <span className="font-medium group-hover:underline">
                        Learn More
                      </span>
                      <VscChevronRight className="-translate-y-[0.025px]" />
                    </button>
                  </div>
                </div>
              </section>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const facades = await getPrograms()
  return {
    props: {
      facades
    }
  }
}
