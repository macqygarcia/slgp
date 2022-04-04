import { LinkBtn } from '../../components/Buttons'
import { PageHeader, SectionHeader } from '../../components/Header'
import { Section, WidthSection } from '../../components/Layouts/Section'
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
          <div className="space-y-7">
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
      <Section>
        <SectionHeader>Outcome Areas</SectionHeader>
        <div className="h-[30rem] w-full xl:h-[35rem]">
          <Slider list={outcomes} />
        </div>
      </Section>
      <div className="mx-auto py-5 sm:max-w-md md:max-w-2xl lg:max-w-6xl">
        <SectionHeader>Pillars</SectionHeader>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:place-items-center lg:gap-7">
          {pillars.map((pillar, index) => (
            <div
              className="group flex cursor-pointer flex-col items-center justify-center rounded p-5"
              key={index}
            >
              <div className="h-96 w-96 animate-pulse bg-zinc-200" />
              <span className="inline-block py-5 font-medium lg:text-lg">
                {pillar.pillar}
              </span>
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
