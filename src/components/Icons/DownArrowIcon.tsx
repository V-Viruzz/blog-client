import { type SVGProps } from 'react'

const DownArrowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m7 10 5 5 5-5"
    />
  </svg>
)
export default DownArrowIcon
