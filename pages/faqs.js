import Accordion from '../components/Accordion'
import { PageHeader } from '../components/Header'
import { getFAQs } from '../graphcms/queries'

export default function FAQs({ faqs }) {
  return (
    <main className="text-center">
      <PageHeader>Frequently Asked Questions</PageHeader>
      <section className="mx-auto py-20 lg:max-w-4xl">
        <Accordion list={faqs} />
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const faqs = await getFAQs()
  return {
    props: {
      faqs
    }
  }
}
