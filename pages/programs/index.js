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
      <WidthSection>
        <Typhography>
          As the SLGP gears up for its next five years, it reformualtes its
          strategic roadmap to more decisively contribute to the vision of
          providing excellent local service delivery through improved local
          development plans and institutionalized participatory governance
          mechanisms.
        </Typhography>
      </WidthSection>

      <ul className="flex w-full flex-col items-center justify-center gap-5 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        {programs.map(({ program, img }, index) => (
          <li className="w-full" key={index}>
            <section className="w-full bg-[#fafafa]">
              <WidthSection>
                <div className="flex w-full flex-col items-center justify-center gap-5 py-20">
                  <Image src={img} width={800} height={500} alt={program} />
                  <p>{program}</p>
                  <Link href="/" passHref>
                    <button className="group flex items-center font-light text-blue-700">
                      <span className="group-hover:underline">Learn More</span>
                      <VscChevronRight className="-translate-y-[0.025px]" />
                    </button>
                  </Link>
                </div>
              </WidthSection>
            </section>
          </li>
        ))}
      </ul>
    </div>
  )
}
