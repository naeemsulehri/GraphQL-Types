import { useGetPagesQuery, GetPagesDocument } from '../lib/pages.graphql'

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { GetNavigationDocument } from '../lib/navigation.graphql'
import { GetPathsDocument } from '../lib/paths.graphql'
import { getPathsFactory, getPropsFactory } from '../utils/nextjs-utils'
import React from 'react'
import Interweave from 'interweave'
import { GetFooterNavigationDocument } from '../lib/footerNavigation.graphql'

type SlugProps = {
  id: any
  slug: string
}

const Slug: React.FC<SlugProps> = (props) => {
  const { query } = useRouter()
  const slug = props.slug || query.slug
  const { data, loading, error } = useGetPagesQuery()
  const pages = data?.pages
  const thisPage = pages?.find((page) => page!.slug === slug)

  return loading ? (
    <div>Loading...</div>
  ) : thisPage ? (
    <Interweave content={thisPage.description} />
  ) : (
    <div>{error}</div>
  )
}

export const getStaticPaths = getPathsFactory(GetPathsDocument, 'pages', 'slug')
export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetPagesDocument,
  GetNavigationDocument,
  GetFooterNavigationDocument
)
export default Slug
