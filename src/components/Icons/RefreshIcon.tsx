import { type SVGProps } from 'react'

const RefreshIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      d="M19.938 13A8 8 0 0 0 5.8 6.944M4.062 11A8 8 0 0 0 18 17.292M15 17h3v.292M5.8 4v2.944m0 0V7h3M18 20v-2.708"
    />
  </svg>
)
export default RefreshIcon
