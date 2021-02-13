import { NormalizedCacheObject } from '@apollo/client'
import { DocumentNode } from 'graphql'
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next'
import { getApollo } from '../lib/apollo'

export const hydrateApolloCache = async (
  ...args: Array<DocumentNode | [DocumentNode, any]>
): Promise<NormalizedCacheObject> => {
  const apolloClient = getApollo()
  const queryCalls = args.map((param) =>
    Array.isArray(param)
      ? () => apolloClient.query({ query: param[0], variables: param[1] })
      : () => apolloClient.query({ query: param })
  )
  await Promise.all(queryCalls)
  return apolloClient.cache.extract()
}

export const getPropsFactory: <TProps extends
  | GetServerSideProps
  | GetStaticProps>(
  ...args: Array<DocumentNode | [DocumentNode, any]>
) => TProps = (...args) =>
  (async ({ params }: any) => {
    const initialApolloState = await hydrateApolloCache(...args)
    return {
      props: {
        initialApolloState,
        ...params,
      },
    }
  }) as any

export const getPathsFactory: (
  params: DocumentNode | [DocumentNode, any],
  querySelector: string,
  slugSelector: string,
  queryFieldSelector?: string
) => GetStaticPaths = (
  params,
  queryResultSelector,
  slugSelector,
  queryFieldSelector = slugSelector
) => async () => {
  const apolloClient = getApollo()

  const { data } = Array.isArray(params)
    ? await apolloClient.query<any>({
        query: params[0] as DocumentNode,
        variables: params[1],
      })
    : await apolloClient.query<any>({
        query: params as DocumentNode,
      })
  const results = data[queryResultSelector]
  const paths = results!.map((elem: any) => ({
    params: { [slugSelector]: elem[queryFieldSelector] },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}
