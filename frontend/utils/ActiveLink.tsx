import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type NavLinkProps = {
  href: string
  children: any
  activeClassName: any
}

export const MobileActiveNavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  activeClassName,
}) => {
  const { query } = useRouter()

  const child = React.Children.only(children)

  let className = child.props.className || ''
  if ('/' + query.slug === href && activeClassName) {
    className = `${activeClassName}`.trim()
  } else {
    className =
      'mt-1 sm:mt-0 sm:ml-2 sm:leading-5 block px-2 py-2 text-sm sm:text-base font-medium text-gray-300 hover:text-white hover:bg-dispoBlack-700 transition duration-150 ease-in-out '
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>
}
