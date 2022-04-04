import Form from '../components/Form'
import { PageHeader } from '../components/Header'
import { contactData } from '../lib/contactData'
import Map from '../components/Map'

export default function ContactUs() {
  return (
    <>
      <PageHeader>Contact Us</PageHeader>
      <div className="mt-20 flex flex-col items-center gap-5 xl:mx-auto xl:max-w-7xl">
        <section className="flex w-full flex-col items-center gap-5 lg:flex-row">
          <section className="relative overflow-hidden bg-[#3E2093] py-16 px-5 text-center md:rounded-lg xl:w-3/4">
            <div className="flex flex-col justify-between">
              <h1 className="mb-16 text-2xl font-medium text-white">
                Contact Information
              </h1>
              <div className="z-50 flex flex-col gap-7">
                {contactData.map(({ Icon, details }, index) => (
                  <section
                    key={index}
                    className="flex flex-col items-center justify-center md:mx-auto md:max-w-md"
                  >
                    <Icon className="text-2xl text-[#FA949D]" />
                    <address className=" text-zinc-200">{details}</address>
                  </section>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-80 -right-48 z-0 opacity-50">
              <svg
                width="485"
                height="490"
                viewBox="0 0 485 490"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="250" cy="255" r="235" fill="#FA949D" />
                <circle cx="80.5" cy="80.5" r="80.5" fill="#8758FA" />
              </svg>
            </div>
          </section>
          <section className="h-full w-full py-10">
            <h2 className="text-center text-2xl font-medium text-zinc-700">
              Give us feedback
            </h2>
            <Form />
          </section>
        </section>
        <section>
          <Map />
        </section>
      </div>
    </>
  )
}
