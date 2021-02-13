import {
  SectionHeaderDiv,
  SectionHeaderH3,
  SectionHeaderP,
  StyledInput,
} from '../../assets/styledComponents'

import 'twin.macro'
import Link from 'next/link'
import {
  Enum_Mediafiles_Type,
  GetMediaFilesDocument,
  useGetMediaFilesQuery,
} from '../../lib/mediaFiles.graphql'
import { getPropsFactory } from '../../utils/nextjs-utils'
import { GetStaticProps } from 'next'

const ContactSection: React.FC = () => {
  const { data: phone } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.Phone },
  })
  const { data: pin } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.LogoPin },
  })
  const { data: mapPin } = useGetMediaFilesQuery({
    variables: { type: Enum_Mediafiles_Type.MapPin },
  })
  return (
    <div className="relative bg-dispoBlack-500 py-16 border-t-4 border-dispoBlack-200">
      <div id="contact" className="absolute top-0 left-0 -mt-20"></div>
      <div className="max-w-screen-xl mx-auto px-10">
        <SectionHeaderDiv>
          <SectionHeaderH3>Interesse?</SectionHeaderH3>
          <SectionHeaderP>Kontaktieren Sie uns</SectionHeaderP>
        </SectionHeaderDiv>
        <div className="md:flex pb-12 text-sm md:text-base">
          <div className="w-full pb-5 md:pb-0 items-end">
            <div className="flex items-center justify-end mr-3 md:mr-0">
              <div className="flex justify-center items-center flex-col border-2 border-white py-2 px-4 w-44 md:w-60">
                <div className="text-white uppercase ">Einfach anrufen</div>
                <div className="text-gray-400">
                  <Link href="tel:+4922338054550">+492233 805-455-0</Link>
                </div>
              </div>
              <div className="h-0 w-10 border border-white bg-white"></div>
              <img
                className="h-12 w-12 md:h-28 md:w-28 animate-pulse"
                src={`${process.env.NEXT_APP_STRAPI_URL}${phone?.mediaFiles?.[0]?.media?.[0]?.url}`}
                alt={phone?.mediaFiles?.[0]?.altText ?? ''}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="h-16 w-16 mx-16 hidden md:inline-block animate-bounce" 
              src={`${process.env.NEXT_APP_STRAPI_URL}${pin?.mediaFiles?.[0]?.media?.[0]?.url}`}
              alt={pin?.mediaFiles?.[0]?.altText ?? ''}
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-start ml-3 md:ml-0">
              <img
                className="h-12 w-12 md:h-28 md:w-28 animate-pulse"
                src={`${process.env.NEXT_APP_STRAPI_URL}${mapPin?.mediaFiles?.[0]?.media?.[0]?.url}`}
                alt={mapPin?.mediaFiles?.[0]?.altText ?? ''}
              />
              <div className="h-0 w-10 border border-white bg-white"></div>
              <div className="flex justify-center items-center flex-col border-2 border-white py-2 px-4 w-44 md:w-60">
                <div className="text-white uppercase ">Daimlerstraße 61</div>
                <div className="text-gray-400">50354, Hürth-DE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-0 grid grid-cols-2 gap-5 sm:w-3/4 mx-auto">
          <div className="col-span-2 sm:col-span-1 mb-1">
            <StyledInput id="name" placeholder="Name*" />
          </div>
          <div className="col-span-2 sm:col-span-1 mb-1">
            <StyledInput id="company" placeholder="Company" />
          </div>
          <div className="col-span-2 mb-1">
            <StyledInput id="email" placeholder="E-Mail*" />
          </div>
          <div className="col-span-2 mb-1">
            <StyledInput id="message" placeholder="Message*" />
          </div>
          <div className="col-span-2 mb-1  mx-auto justify-items-center">
            <button
              type="submit"
              tw="justify-center items-center py-4 px-24 font-normal text-xl text-dispoWhite-100 
            bg-dispoBlue-500 transition duration-150 ease-in-out uppercase
            focus:(outline-none) 
            hover:(bg-dispoBlue-900)"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetMediaFilesDocument
)

export default ContactSection
