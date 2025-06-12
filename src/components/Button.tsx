import classNames from 'classnames'
import { PropsWithChildren } from 'react'

type ButtonProps = {
  type?: 'primary' | 'secondary'
  onClick?: () => void
}

const Button = ({ children, onClick, type = 'secondary' }: PropsWithChildren<ButtonProps>) => {
  const buttonStyles = {
    primary: 'bg-white  text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50',
    secondary: 'bg-white/10 text-white shadow-xs hover:bg-white/20'
  }

  return (
    <button
      type="button"
      className={classNames(
        'cursor-pointer px-3.5 py-2.5 text-sm font-semibold',
        buttonStyles[type]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// className="hover:bg-grey-100 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
export default Button
