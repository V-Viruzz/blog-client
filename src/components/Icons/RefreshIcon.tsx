import { type SVGProps } from 'react'

const RefreshIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.4}
      d="M4.062 13A8 8 0 0 1 18.2 6.944M19.938 11A8 8 0 0 1 6 17.292M9 17H6v.292M18.2 4v2.944m0 0V7h-3M6 20v-2.708"
    />
  </svg>
)
export default RefreshIcon


