import { GetStaticProps } from 'next'
import {
  ContainerDivLight,
  SectionHeaderDiv,
  SectionHeaderH3,
  SectionHeaderH4,
  SectionP,
} from '../../assets/styledComponents'
import Loading from '../../components/Loadinggif'
import {
  GetProcessStepsDocument,
  useGetProcessStepsQuery,
} from '../../lib/GetProcessSteps.graphql'
import { getPropsFactory } from '../../utils/nextjs-utils'

const ProcessStepsSection: React.FC = () => {
  const { data, loading } = useGetProcessStepsQuery()

  return loading ? (
    <Loading />
  ) : (
    <div className="relative">
      <div id="service" className="absolute top-0 left-0 -mt-20"></div>
      <ContainerDivLight>
        <div className="max-w-screen-xl mx-auto px-10">
          <SectionHeaderDiv>
            <SectionHeaderH3>Vorgehensweise</SectionHeaderH3>
          </SectionHeaderDiv>
          {data?.processSteps?.map((step) => (
            <div className="text-sm" key={step?.id}>
              <div className="w-full items-center">
                <div className="flex items-center justify-center">
                  <img
                    className="h-64 w-64"
                    src={`${process.env.NEXT_APP_STRAPI_URL}${step?.image?.url}`}
                    alt={step?.altText ?? ''}
                  />
                </div>
              </div>
              <div className="w-full items-center justify-center">
                <div className="flex items-center justify-center">
                  <SectionHeaderH4>{step?.title}</SectionHeaderH4>
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
                    <SectionP>{step?.description}</SectionP>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContainerDivLight>
    </div>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetProcessStepsDocument
)

export default ProcessStepsSection
