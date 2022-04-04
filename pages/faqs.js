import Accordion from '../components/Accordion'
import { PageHeader } from '../components/Header'
import { faqs } from '../lib/faqsData'

export default function FAQs() {
  return (
    <main className="text-center">
      <PageHeader>Frequently Asked Questions</PageHeader>
      <section className="mx-auto py-20 lg:max-w-4xl">
        <Accordion list={faqs} />
      </section>
    </main>
  )
}
