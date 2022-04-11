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
          <section className="relative overflow-hidden bg-blue-800 py-16 px-5 text-center md:rounded-lg xl:w-3/4">
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
                    <Icon className="text-2xl text-[#FCD116]" />
                    <address className=" text-zinc-200">{details}</address>
                  </section>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-80 -right-48 z-0 opacity-20">
              <svg
                width="485"
                height="490"
                viewBox="0 0 485 490"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M250 490C379.787 490 485 384.787 485 255C485 125.213 379.787 20 250 20C120.213 20 15 125.213 15 255C15 384.787 120.213 490 250 490Z"
                  fill="#E41B00"
                />
                <path
                  d="M80.5 161C124.959 161 161 124.959 161 80.5C161 36.0411 124.959 0 80.5 0C36.0411 0 0 36.0411 0 80.5C0 124.959 36.0411 161 80.5 161Z"
                  fill="#1B16FC"
                />
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
