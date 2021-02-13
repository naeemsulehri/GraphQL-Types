import {
  useGetNavigationQuery,
  GetNavigationDocument,
} from '../../lib/navigation.graphql'

import { GetStaticProps } from 'next'
import { MobileActiveNavLink } from '../../utils/ActiveLink'
import { getPropsFactory } from '../../utils/nextjs-utils'

type NavigationProps = {
  setMenuOpen: any
}

export const HeaderLink: React.FC<NavigationProps> = (props) => {
  const { data } = useGetNavigationQuery()
  const navigation = data?.navigations
  return (
    <>
      {navigation?.map((nav) =>
        nav?.link?.map((link) => (
          <MobileActiveNavLink
            key={link!.id}
            href={link!.address}
            activeClassName="mt-1 sm:mt-0 block px-2 py-2 text-sm sm:text-base sm:leading-5 sm:ml-2 font-medium text-white bg-dispoBlack-300 transition duration-150 ease-in-out"
          >
            <a
              onClick={() =>
                props.setMenuOpen((oldState: boolean) => !oldState)
              }
            >
              {link?.displayText}
            </a>
          </MobileActiveNavLink>
        ))
      )}
    </>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetNavigationDocument
)
