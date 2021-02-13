import { GetStaticProps } from 'next'
import { getPropsFactory } from '../../utils/nextjs-utils'
import React from 'react'
import Loading from '../../components/Loadinggif'
import {
  Enum_Mediafiles_Type,
  GetMediaFilesDocument,
  useGetMediaFilesQuery,
} from '../../lib/mediaFiles.graphql'

const HeaderVideoSection: React.FC = () => {
  const { data, loading } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.ProductVideo },
  })

  return loading ? (
    <Loading />
  ) : (
    <div>
      <video
        className="w-full"
        loop
        autoPlay
        src={`${process.env.NEXT_APP_STRAPI_URL}${data?.mediaFiles?.[0]?.media?.[0]?.url}`}
      />
    </div>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetMediaFilesDocument
)

export default HeaderVideoSection
