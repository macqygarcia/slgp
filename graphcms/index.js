import { GraphQLClient } from 'graphql-request'

export const graphcmsClient = new GraphQLClient(
  process.env.GRAPHCMS_ENVIRONMENT_ENDPOINT,
  {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  }
)
