import { HeaderLink } from './HeaderLinks'
import { useState } from 'react'
import Logo from '../Logo'
import 'twin.macro'

const Header = (props: any) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-dispoBlack-500">
      <div className="mx-auto">
        <div className="border-b border-gray-700">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex-row">
                <Logo {...props} />
              </div>
            </div>
            <div className="hidden xl:ml-6 xl:mr-4 xl:block">
              <div className="flex items-center">
                <HeaderLink {...props} setMenuOpen={setMenuOpen} />
              </div>
            </div>
            <div className="mr-2 flex xl:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                tw="inline-flex items-center border-0 justify-center p-2 text-gray-400 transition duration-150 ease-in-out
                focus:(outline-none bg-dispoBlack-300 text-white)"
                aria-label="Main menu"
                aria-expanded="false"
              >
                {/* <!-- Icon when menu is closed. -->
            Heroicon name: menu
            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setMenuOpen((oldState) => !oldState)}
                >
                  {!menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!--
    Mobile menu, toggle classNamees based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
      <div className={`xl:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3">
          <HeaderLink {...props} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </nav>
  )
}

export default Header
