import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledInput = styled.input`
  ${tw`block w-full px-5 py-6 
  sm:(text-lg leading-5) rounded-none bg-dispoBlack-400 text-gray-400 
  border-0 border-b-2 border-gray-500 
  focus:(border-b-2 border-dispoBlue-100 shadow-none text-dispoBlue-100 outline-none)`}
`

export const SectionHeaderDiv: React.FC = (props) => {
  return (
    <div className="pb-10 uppercase text-center font-normal">
      {props.children}
    </div>
  )
}

export const SectionHeaderH3: React.FC = (props) => {
  return <h3 className="text-3xl text-dispoWhite-100">{props.children}</h3>
}

export const SectionHeaderH4: React.FC = (props) => {
  return (
    <h4 className="text-xl text-dispoWhite-100 uppercase py-4">
      {props.children}
    </h4>
  )
}

export const SectionHeaderP: React.FC = (props) => {
  return (
    <p className="text-xl leading-6 text-dispoBlue-500 tracking-wide">
      {props.children}
    </p>
  )
}

export const SectionP: React.FC = (props) => {
  return (
    <p className="text-sm sm:text-base leading-6 text-gray-400 tracking-wide py-4">
      {props.children}
    </p>
  )
}

export const ContainerDivDark: React.FC = (props) => {
  return (
    <div className="bg-dispoBlack-500 py-16 border-t-4 border-b-2 border-dispoBlack-200">
      {props.children}
    </div>
  )
}

export const ContainerDivLight: React.FC = (props) => {
  return (
    <div className="bg-dispoBlack-300 py-8 xl:py-16 border-t-4 border-b-2 border-dispoBlack-200">
      {props.children}
    </div>
  )
}

export const ContainerDiv: React.FC = (props) => {
  return (
    <div className="flex flex-row w-full pb-4 max-w-screen-xl mx-auto px-2 justify-center items-center sm:flex-col sm:px-4 sm:justify-start">
      {props.children}
    </div>
  )
}
