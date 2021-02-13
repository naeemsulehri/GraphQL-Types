import { useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import 'cross-fetch/polyfill'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const createIsomorphLink = () => {
  const { HttpLink } = require('@apollo/client')
  return new HttpLink({
    uri: `${process.env.NEXT_APP_STRAPI_URL}/graphql`, // Server URL (must be absolute)
  })
}

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  })
}

export const getApollo = (initialState: any = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const useApollo = (initialState: any) => {
  const store = useMemo(() => getApollo(initialState), [initialState])
  return store
}
