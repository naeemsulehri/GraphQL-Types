import Header from './header/Header'
import Footer from './footer/Footer'

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full flex flex-col fixed z-10">
        <div className="flex flex-col">
          <Header />
        </div>
      </div>

      <div className="flex-grow z-0 mt-20"></div>
      <Footer />
    </div>
  )
}

export default Layout
