import * as React from 'react'
import { type SVGProps } from 'react'

const MenuLuxIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    transform="rotate(90)"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor">
      <path d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </g>
  </svg>
)
export default MenuLuxIcon
