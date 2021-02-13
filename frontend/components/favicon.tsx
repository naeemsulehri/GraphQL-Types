import { getPropsFactory } from '../utils/nextjs-utils'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import {
  useGetMediaFilesQuery,
  Enum_Mediafiles_Type,
  GetMediaFilesDocument,
} from '../lib/mediaFiles.graphql'

const Favicon: React.FC = () => {
  const { data } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.Favicon },
  })
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`${process.env.NEXT_APP_STRAPI_URL}${data?.mediaFiles?.[0]?.media?.[0]?.url}`}
        ></link>
      </Head>
    </>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetMediaFilesDocument
)
export default Favicon
