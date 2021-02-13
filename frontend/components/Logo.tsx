import { GetStaticProps } from 'next'
import { getPropsFactory } from '../utils/nextjs-utils'
import React from 'react'
import Link from 'next/link'
import {
  Enum_Mediafiles_Type,
  GetMediaFilesDocument,
  useGetMediaFilesQuery,
} from '../lib/mediaFiles.graphql'

const Logo: React.FC = () => {
  const { data: pin } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.LogoPin },
  })
  const { data: text } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.LogoText },
  })
  return (
    <div>
      <Link href="/">
        <img
          className="h-12 cursor-pointer ml-3 inline"
          src={`${process.env.NEXT_APP_STRAPI_URL}${pin?.mediaFiles?.[0]?.media?.[0]?.url}`}
          alt={pin?.mediaFiles?.[0]?.altText ?? ''}
        />
      </Link>
      <Link href="/">
        <img
          className="inline h-12 cursor-pointer"
          src={`${process.env.NEXT_APP_STRAPI_URL}${text?.mediaFiles?.[0]?.media?.[0]?.url}`}
          alt={text?.mediaFiles?.[0]?.altText ?? ''}
        />
      </Link>
    </div>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetMediaFilesDocument
)

export default Logo
