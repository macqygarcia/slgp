import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '../components/Header'
import Resource from '../components/Resource'
import HomeSlides from '../components/Slider/main'
import { getHeroImages, getNewsEvents, getResources } from '../graphcms/queries'
import { NewsEvent } from './news-events'

export default function Home({ heroImages, newsEvents, resources }) {
  if (!newsEvents) {
    return null
  }

  const firstFourNews = newsEvents.slice(0, 4)
  const firstFourResources = resources.slice(0, 4)

  return (
    <main>
      <section className="relative">
        <section className="h-[22rem] sm:h-[21rem] md:h-[30rem] xl:h-[34rem]">
          <HomeSlides list={heroImages} />
        </section>

        {/* Masthead */}
        <section className="flex w-full transform flex-col items-center justify-center gap-4 rounded border border-gray-200 bg-opacity-60 bg-clip-padding p-5 shadow backdrop-blur-3xl backdrop-filter sm:flex-row sm:justify-between sm:px-5 md:absolute md:left-1/2 md:top-1/2 md:mx-auto md:max-w-2xl md:-translate-y-1/2 md:-translate-x-1/2 lg:max-w-4xl lg:px-7">
          <div className="flex items-center gap-4 md:gap-7">
            <Image
              src="/dilg-logo.webp"
              alt="DILG Logo"
              height="100"
              width="100"
            />
            <Image
              src="/slgp-logo.webp"
              alt="DILG Logo"
              height="80"
              width="195"
            />
          </div>
          <Link href="/transparency" passHref>
            <div className="flex cursor-pointer flex-col items-center justify-center gap-4">
              <Image
                src="/transparency-seal.webp"
                alt="DILG Logo"
                height="100"
                width="100"
              />
              <span className="inline-block font-medium sm:hidden">
                Browse Archives
              </span>
            </div>
          </Link>
          {/* Masthead */}
        </section>
      </section>
      <div className="md:mt-20">
        <PageHeader>Read our latest news and events</PageHeader>
        <ul className="mt-20 grid gap-10 sm:mx-auto sm:max-w-md md:max-w-full md:grid-cols-2 md:px-2 lg:grid-cols-3 xl:grid-cols-4 2xl:max-w-7xl 2xl:gap-5">
          {firstFourNews.map(newsEvent => (
            <NewsEvent
              id={newsEvent.id}
              key={newsEvent.id}
              views={newsEvent.views}
              image={newsEvent.newsEventImage.url}
              date={newsEvent.publishedDate}
              title={newsEvent.title}
            />
          ))}
        </ul>
        <div className="my-10 w-full text-center">
          <Link href="/news-events" passHref>
            <span className="inline-block cursor-pointer bg-red-400 py-4 px-6 font-semibold text-white hover:bg-red-500 active:ring-4 active:ring-red-700">
              Load More News
            </span>
          </Link>
        </div>
      </div>
      <>
        <PageHeader>Download studies and other resources</PageHeader>
        <ul className="mt-20 grid gap-10 sm:mx-auto sm:max-w-md md:max-w-full md:grid-cols-2 md:px-2 lg:grid-cols-3 xl:grid-cols-4 2xl:max-w-7xl 2xl:gap-5">
          {firstFourResources.map(resource => (
            <Resource
              key={resource.id}
              id={resource.id}
              src={resource.resourceImage.url}
              date={resource.publishedDate}
              title={resource.title}
            />
          ))}
        </ul>
        <div className="my-10 w-full text-center">
          <Link href="/resources" passHref>
            <span className="inline-block cursor-pointer bg-red-400 py-4 px-6 font-semibold text-white hover:bg-red-500 active:ring-4 active:ring-red-700">
              Load More Resources
            </span>
          </Link>
        </div>
      </>
    </main>
  )
}

export async function getServerSideProps() {
  const heroImages = await getHeroImages()
  const newsEvents = await getNewsEvents()
  const resources = await getResources()
  return {
    props: {
      heroImages,
      newsEvents,
      resources
    }
  }
}
