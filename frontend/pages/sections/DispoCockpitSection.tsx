import { GetStaticProps } from 'next'
import { ContainerDiv, ContainerDivLight, SectionP } from '../../assets/styledComponents'

import { Enum_Mediafiles_Type } from '../../lib/GetProcessSteps.graphql'
import {
  GetMediaFilesDocument,
  useGetMediaFilesQuery,
} from '../../lib/mediaFiles.graphql'
import { getPropsFactory } from '../../utils/nextjs-utils'

const DispoCockpitSection: React.FC = () => {
  const { data: imac } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.ImacEmpty },
  })

  const { data: importIcon } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.ImportIcon },
  })

  return (
    <div className="relative">
      <div id="dispocockpit" className="absolute top-0 left-0 -mt-20"></div>
      <ContainerDivLight>
        <ContainerDiv>
          <div className="sm:flex sm:flex-row">
            <div className="sm:w-4/12 lg:w-5/12 sm:flex-col sm:flex lg:justify-center">
              <div
                className="flex justify-center items-center
                  sm:inline-flex lg:justify-start"
              >
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 pr-3 animate-bounce "
                  src={`${process.env.NEXT_APP_STRAPI_URL}${importIcon?.mediaFiles?.[0]?.media?.[0]?.url}`}
                  alt={importIcon?.mediaFiles?.[0]?.altText ?? ''}
                />
                <h4 className="text-xl text-dispoWhite-100 uppercase py-6">
                  Erp datenimport
                </h4>
              </div>
              <div
                className="flex justify-center items-center px-2 w-full
                sm:inline-flex sm:px-0 text-justify
                "
              >
                <SectionP>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </SectionP>
              </div>
              <div className="hidden h-0 w-32 border border-dispoBlue-500 bg-dispoBlue-500 sm:inline-block"></div>
            </div>

            <div className="sm:w-8/12 lg:w-7/12 sm:flex-col">
              <div className="flex justify-center items-center ">
                <div
                  className="bg-contain xs:max-w-sm lg:max-w-xl sm:max-w-md md:max-w-lg mx-auto bg-no-repeat bg-center flex-grow h-full pt-4 pb-20 px-8 sm:pt-2 sm:pb-24 sm:px-11 md:px-11 md:pb-28 lg:px-14 lg:pb-30 lg:pt-4 xl:pb-36 xl:px-13 xl:pt-9"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_APP_STRAPI_URL}${imac?.mediaFiles?.[0]?.media?.[0]?.url})`,
                  }}
                >
                  <div
                    className="bg-contain bg-center bg-no-repeat  mx-auto w-full h-48 sm:h-60 md:h-64 lg:h-72 xl:h-96"
                    style={{
                      // height: '20rem',
                      backgroundImage: `url('/DX_exampleContent_DetailPage_v01.png')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </ContainerDiv>
      </ContainerDivLight>
    </div>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetMediaFilesDocument
)

export default DispoCockpitSection
