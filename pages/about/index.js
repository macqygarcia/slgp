import { LinkBtn } from '../../components/Buttons'
import { PageHeader, SectionHeader } from '../../components/Header'
import { WidthSection } from '../../components/Layouts/Section'
import { Slider } from '../../components/Slider'
import Typhography from '../../components/Typhography'

import { aboutlinks } from '../../lib/navigation'
import { outcomes, pillars } from '../../lib/staticData'

export default function About() {
  return (
    <div className="w-full space-y-5 text-center">
      <PageHeader>About Us</PageHeader>
      <div className="py-10">
        <WidthSection>
          <div className="space-y-7 p-3">
            <Typhography>
              In the past five years, the DILG through its Support for the Local
              Governance Program initiated interventions on improving local
              governance in these areas: functionality of Local Development
              Councils, quality of local development plans, full service
              delivery systems, alignment of local plans, and local aseet
              management and resource mobilization.
            </Typhography>
            <Typhography>
              The Support for the Local Governance Program (SLGP) serves as a
              facility within the Department to broaden its work on improving
              local governance, particularly on contributing to achieving{' '}
              <strong>EMPOWERED</strong> <strong>RESPONSIBLE</strong>, and{' '}
              <strong>RESPONSIVE</strong> local goverments.
            </Typhography>
            <Typhography>
              In doing so, the SLGP has emerged as the facility within the
              Department that ensures coherence in program and project
              implementation both in internal and external organization.
            </Typhography>
          </div>
        </WidthSection>
      </div>
      <div className="flex h-full flex-col items-center justify-center bg-[#fafafa] py-10">
        <SectionHeader>Outcome Areas</SectionHeader>
        <div className="flex h-[30rem] w-full items-end justify-end xl:h-[35rem]">
          <Slider list={outcomes} />
        </div>
      </div>
      <div className="mx-auto w-full py-5 sm:max-w-md md:max-w-2xl lg:max-w-6xl lg:py-16">
        <SectionHeader>Pillars</SectionHeader>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:place-items-center lg:gap-7">
          {pillars.map((pillar, index) => (
            <div
              className="group flex cursor-pointer flex-col items-center justify-center rounded"
              key={index}
            >
              <div className="flex h-[30rem] w-full animate-pulse items-center justify-center bg-zinc-200 p-3">
                <span className="inline-block py-5 font-medium lg:text-lg">
                  {pillar.pillar}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="flex w-full justify-center">
        <ul className="flex h-screen flex-col gap-4 py-20 px-10 lg:flex-row lg:justify-evenly">
          {aboutlinks.map((link, index) => (
            <li key={index}>
              <LinkBtn link={link.link} href={link.href} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
