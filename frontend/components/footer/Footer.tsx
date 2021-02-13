import Logo from '../Logo'
import { FooterNavigation } from './FooterNavigation'

import FacebookIcon from '../../assets/images/social-icons/social-fb.svg'
import XingIcon from '../../assets/images/social-icons/social-xi.svg'
import LinkedInIcon from '../../assets/images/social-icons/social-in.svg'

const Footer = (props: any) => {
  return (
    <footer className="py-12 text-center border-t-4 border-dispoBlue-500 bg-dispoBlack-400">
      <div className="pb-4">
        <Logo {...props} />
      </div>
      <div className="mt-4 flex justify-center">
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Facebook</span>
          <img src={FacebookIcon} alt="Facebook" className="h-6 w-6 mx-1" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Xing</span>
          <img src={XingIcon} alt="Facebook" className="h-6 w-6 mx-1" />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">LinkedIn</span>
          <img src={LinkedInIcon} alt="Facebook" className="h-6 w-6 mx-1" />
        </a>
      </div>
      <p className="mb-3 mt-6 text-xs leading-4 text-gray-400">
        Copyright &copy; 2020 - All rights reserved by SODEFA GmbH & Co. KG
      </p>

      <FooterNavigation {...props} />
    </footer>
  )
}

export default Footer
