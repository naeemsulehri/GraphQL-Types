import {
  ContainerDivDark,
  SectionHeaderDiv,
  SectionHeaderH3,
} from '../../assets/styledComponents'

const DashboardSection: React.FC = () => {
  return (
    <div className="relative">
      <div id="dashboard" className="absolute top-0 left-0 -mt-20"></div>
      <ContainerDivDark>
        <div className="max-w-screen-xl mx-auto px-10">
          <SectionHeaderDiv>
            <SectionHeaderH3>Dashboard</SectionHeaderH3>
          </SectionHeaderDiv>
        </div>
      </ContainerDivDark>
    </div>
  )
}

export default DashboardSection
