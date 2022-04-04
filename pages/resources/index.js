import { PageHeader } from '../../components/Header'
import ResourceLoader from '../../components/Loader/Resource'
import Resource from '../../components/Resource'
import { getResources } from '../../graphcms/queries'
export default function Resources({ resources }) {
  if (!resources) {
    return (
      <div className="space-y-2 p-3">
        <ResourceLoader />
        <ResourceLoader />
        <ResourceLoader />
        <ResourceLoader />
      </div>
    )
  }

  return (
    <div>
      <PageHeader>Resources and Downloads</PageHeader>
      <ul className="my-20 grid gap-10 sm:mx-auto sm:max-w-md md:max-w-full md:grid-cols-2 md:px-2 lg:grid-cols-3 xl:grid-cols-4 2xl:max-w-7xl 2xl:gap-5">
        {resources?.map(resource => (
          <Resource
            key={resource.id}
            id={resource.id}
            src={resource.resourceImage.url}
            date={resource.publishedDate}
            title={resource.title}
          />
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const resources = await getResources()
  return {
    props: {
      resources
    }
  }
}
