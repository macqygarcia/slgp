import { gql } from 'graphql-request'
import { graphcmsClient } from '../index'

export const CreateVoteExperienceMutation = async rate => {
  const mutation = gql`
    mutation CreateSubTopicVoteMutation($rate: Int!) {
      createVote(data: { rate: $rate }) {
        id
      }
    }
  `

  const data = await graphcmsClient.request(mutation, {
    rate
  })

  return data
}
