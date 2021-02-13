import { GetStaticProps } from 'next'
import { getPropsFactory } from '../../utils/nextjs-utils'
import {
  GetFooterNavigationDocument,
  useGetFooterNavigationQuery,
} from '../../lib/footerNavigation.graphql'
import Link from 'next/link'

export const FooterNavigation: React.FC = () => {
  const { data } = useGetFooterNavigationQuery()
  const footerNavigations = data?.footerNavigations ?? []

  return (
    <nav className="flex flex-wrap justify-center items-center flex-col sm:flex-row">
      {footerNavigations.map((nav) =>
        nav?.link?.map((link, i) => (
          <div className="contents" key={link!.id}>
            <div className="px-2 py-2">
              <Link href={link!.address}>
                <a
                  className="text-sm leading-6 hover:text-dispoBlue-900 cursor-pointer text-blue-300"
                  {...(link!.targetBlank ? { target: '_blank' } : {})}
                >
                  {link!.displayText}
                </a>
              </Link>
            </div>
            {i !== nav.link!.length - 1 && (
              <div className="rounded-full h-1 w-1 bg-dispoBlue-500 hidden sm:block"></div>
            )}
          </div>
        ))
      )}
    </nav>
  )
}

export const getStaticProps = getPropsFactory<GetStaticProps>(
  GetFooterNavigationDocument
)
