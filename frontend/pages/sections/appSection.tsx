import { GetStaticProps } from 'next'
import { ContainerDiv, ContainerDivDark, SectionP } from '../../assets/styledComponents'
import { Enum_Mediafiles_Type } from '../../lib/GetProcessSteps.graphql'
import {
  GetMediaFilesDocument,
  useGetMediaFilesQuery,
} from '../../lib/mediaFiles.graphql'
import { getPropsFactory } from '../../utils/nextjs-utils'

const AppSection: React.FC = () => {
  const { data: ipad } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.IpadEmpty },
  })

  const { data: mapPin } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.MapPin },
  })

  return (
    <div className="relative">
      <div id="app" className="absolute top-0 left-0 -mt-20"></div>
      <ContainerDivDark>
        <ContainerDiv>
          <div className="sm:flex sm:flex-row">
            <div className="sm:w-4/12 lg:w-5/12 sm:flex-col sm:flex lg:justify-center">
              <div
                className="flex justify-center items-center
                  sm:inline-flex lg:justify-start"
              >
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 pr-3 animate-bounce"
                  src={`${process.env.NEXT_APP_STRAPI_URL}${mapPin?.mediaFiles?.[0]?.media?.[0]?.url}`}
                  alt={mapPin?.mediaFiles?.[0]?.altText ?? ''}
                />
                <h4 className="text-xl text-dispoWhite-100 uppercase py-6">
                  Trips & Touren
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
                  aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </SectionP>
              </div>
              <div className="hidden h-0 w-32 border border-dispoBlue-500 bg-dispoBlue-500 sm:inline-block"></div>
            </div>

            <div className="sm:w-8/12 lg:w-7/12 sm:flex-col sm:pt-24">
              <div className="flex justify-center items-center sm:justify-end ">
                <div
                  className="bg-contain lg:max-w-xl sm:max-w-md md:max-w-lg mx-auto bg-no-repeat bg-center flex-grow h-full pt-2 pb-3 px-4 sm:pb-3 sm:pt-4 md:px-15 md:pb-4 lg:px-0 lg:pt-4 lg:pb-4 xl:pb-5 xl:px-14 xl:pt-6"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_APP_STRAPI_URL}${ipad?.mediaFiles?.[0]?.media?.[0]?.url})`,
                  }}
                >
                  <div
                    className="bg-contain bg-center bg-no-repeat mx-auto w-full h-60 sm:h-96 md:h-96 lg:h-96 xl:h-150"
                    style={{
                      //height: '600px',
                      backgroundImage: `url('/Screenshot_20200817-165647_DispoX_0004_Screenshot_20200817-165750_DispoX.png')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </ContainerDiv>
      </ContainerDivDark>
    </div>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetMediaFilesDocument
)

export default AppSection
