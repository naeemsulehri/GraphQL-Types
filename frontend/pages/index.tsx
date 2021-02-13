import React from 'react'
import AppSection from './sections/appSection'
import CloudSyncSection from './sections/CloudSyncSection'
import ContactSection from './sections/contactSection'
import DashboardSection from './sections/DashboardSection'
import DispoCockpitSection from './sections/DispoCockpitSection'
import FeaturesSection from './sections/FeaturesSection'
import HeaderVideoSection from './sections/headerVideoSection'
import ProcessStepsSection from './sections/ProcessStepsSection'

const Index : React.FC = (props: any) => {
  return (
    <React.Fragment>
      <HeaderVideoSection />
      <DispoCockpitSection />
      <AppSection />
      <CloudSyncSection />
      <DashboardSection />
      <FeaturesSection />
      <ProcessStepsSection {...props} />
      <ContactSection />
    </React.Fragment>
  )
}

export default Index
