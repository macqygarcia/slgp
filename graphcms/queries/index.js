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
