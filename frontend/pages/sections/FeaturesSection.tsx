import {
  ContainerDiv,
  ContainerDivLight,
  SectionHeaderDiv,
  SectionHeaderH3,
  SectionHeaderH4,
  SectionP,
} from '../../assets/styledComponents'
import { Enum_Mediafiles_Type } from '../../lib/GetProcessSteps.graphql'
import { GetStaticProps } from 'next'
import {
  GetMediaFilesDocument,
  useGetMediaFilesQuery,
} from '../../lib/mediaFiles.graphql'
import { getPropsFactory } from '../../utils/nextjs-utils'

const FeaturesSection: React.FC = () => {
  const { data: kameraIcon } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.KameraIcon },
  })

  return (
    <div className="relative">
      <div id="features" className="absolute top-0 left-0 -mt-20"></div>
      <ContainerDivLight>
        <div className="flex justify-center  max-w-screen-xl mx-auto px-8">
          
          <SectionHeaderDiv>
          
            <SectionHeaderH3>Features & Services</SectionHeaderH3>
            <SectionP >
                   Works Anywhere, any time, in real-time
                  </SectionP>
          </SectionHeaderDiv>
          
        </div>
      
        <div className="text-sm" >
              <div className="w-full items-center">
                <div className="flex items-center justify-center">
                  <img
                     className="flex bg-contain mx-auto bg-no-repeat bg-center pt-4 pb-12 px-14 sm:pt-2 sm:pb-24 sm:px-11 md:px-11 md:pb-28 lg:px-14 lg:pb-30 lg:pt-4 xl:pb-36 xl:px-20 xl:pt-9"
                     style={{
                       backgroundImage: `url(${process.env.NEXT_APP_STRAPI_URL}${kameraIcon?.mediaFiles?.[0]?.media?.[0]?.url})`,
                     }}
                   />
                  
             
              </div>
              <div className="w-full items-center justify-center">
                <div className="flex items-center justify-center">
                  <SectionHeaderH4>FILE & PHOTO UPLOAD </SectionHeaderH4>
                </div>
              </div>
              <div className="w-full items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="h-0 w-32 border border-dispoBlue-500 bg-dispoBlue-500"></div>
                </div>
              </div>
              <div className="w-full items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="sm:w-1/3 text-center">
                    <SectionP> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. </SectionP>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </ContainerDivLight>
            </div>
  )
}
export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetMediaFilesDocument
)

export default FeaturesSection
