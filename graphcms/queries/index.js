import { gql } from 'graphql-request'
import { graphcmsClient } from '../index'

export const useRegions = () => {
  return useQuery('regions', async () => {
    const { regions } = await graphcmsClient.request(
      gql`
        query {
          regions(where: { short_not: "National" }) {
            id
            short
          }
        }
      `
    )
    return regions
  })
}
