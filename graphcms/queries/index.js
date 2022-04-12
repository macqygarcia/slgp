import { gql } from 'graphql-request'
import { graphcmsClient } from '../index'

export async function getHeroImages() {
  const query = gql`
    query {
      medias {
        id
        title
        intro
        image {
          url
        }
      }
    }
  `

  const { medias } = await graphcmsClient.request(query)
  return medias
}

export async function getResources() {
  const query = gql`
    query {
      resources(orderBy: createdAt_DESC) {
        id
        title
        publishedDate
        views
        likes
        downloads
        resourceImage {
          url
        }
      }
    }
  `

  const { resources } = await graphcmsClient.request(query)
  return resources
}

export async function getNewsEvents() {
  const query = gql`
    query {
      newsEvents {
        id
        views
        title
        publishedDate
        detail {
          markdown
        }
        newsEventImage {
          url
        }
      }
    }
  `

  const { newsEvents } = await graphcmsClient.request(query)
  return newsEvents
}

export async function getFAQs() {
  const query = gql`
    query {
      faqs {
        id
        question
        answer
      }
    }
  `

  const { faqs } = await graphcmsClient.request(query)
  return faqs
}

export async function getTransparecyFiles() {
  const query = gql`
    query {
      transparencies {
        id
        title
        archives {
          id
          title
          fileName
          fileUrl {
            url
          }
        }
      }
    }
  `

  const { transparencies } = await graphcmsClient.request(query)
  return transparencies
}

export async function getPrograms() {
  const query = gql`
    query {
      facades(where: { type: "program" }) {
        id
        name
        image {
          url
        }
      }
    }
  `

  const { facades } = await graphcmsClient.request(query)
  return facades
}
