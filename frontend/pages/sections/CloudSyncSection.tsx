import { GetStaticProps } from 'next'
import { ContainerDivLight,  
  SectionHeaderDiv,
  SectionP,
  SectionHeaderH3,
   } from '../../assets/styledComponents'
import { Enum_Mediafiles_Type } from '../../lib/GetProcessSteps.graphql'
import {
  GetMediaFilesDocument,
  useGetMediaFilesQuery,
} from '../../lib/mediaFiles.graphql'
import { getPropsFactory } from '../../utils/nextjs-utils'


function CloudSyncSection() {
  const { data: sync } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.Sync },
  })

  const { data: cloudIcon } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.CloudIcon },
  })

  return (
    <div className="relative">
      <div id="cloudsync" className="absolute top-0 left-0 -mt-20"></div>
      <ContainerDivLight>
        <div className="flex max-w-screen-xl mx-auto px-10 items-center justify-center">
          <div className="w-2/3">
            <SectionHeaderDiv>
              <SectionHeaderH3>Cockpit und App Syncronisation</SectionHeaderH3>
                  <SectionP >
                    Instantly synchronize and upload your data, shipments and your optimized plans to the Drivers App.<br />
                    Track & Trace in real-time all of your trips
                  </SectionP>
          </SectionHeaderDiv>
        </div>

          <div className="sm:flex sm:flex-row max-w-screen-lg mx-auto">
            <div className="sm:flex-col sm:w-full lg:w-22">
                <div className="bg-contain mx-auto bg-no-repeat bg-center h-full pt-10 pb-12 px-12"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_APP_STRAPI_URL}${sync?.mediaFiles?.[0]?.media?.[0]?.url})`,
                  }}
                >
                </div><br />
              </div>
            <div className="bg-contain bg-center bg-no-repeat mx-auto w-full h-32 sm:h-48 md:h-56 lg:h-72 xl:h-96 lg:ml-0 xl:ml-14"
                    style={{
                      backgroundImage: `url('/ipad1.png')`,                     
                    }}
                  ></div>
          </div>
        </div>
        <div className="flex flex-row max-w-screen-xl mx-auto px-10 justify-center items-center">
          <div className="flex-col w-4/12 p-10 pb-24">
            <div className="flex">
              <img
                className="w-60 pr-4"
                src={`${process.env.NEXT_APP_STRAPI_URL}${cloudIcon?.mediaFiles?.[0]?.media?.[0]?.url}`}
                alt={cloudIcon?.mediaFiles?.[0]?.altText ?? ''}
              />
            </div>
          </div>
          <div className="flex-col w-8/12 items-center justify-center">
            <div
              className="bg-contain mx-auto bg-no-repeat bg-center flex-grow h-96"
              style={{
                backgroundImage: `url('/ipad-Full.png')`,
              }}
            ></div>
          </div>
        </div>
      </ContainerDivLight>
    </div>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetMediaFilesDocument
)

export default CloudSyncSection
