import React from "react"

export const IconEqual = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
    {...props}
  >
    <path d="M5 9h14v2H5V9zm0 4h14v2H5v-2z" />
  </svg>
)

export const IconGreater = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
    {...props}
  >
    <path d="M6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12l-10.5 7-1-1.5z" />
  </svg>
)

export const IconLess = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
    {...props}
  >
    <path d="M17.5 17.5l-8.25-5.5 8.25-5.5-1-1.5L6 12l10.5 7 1-1.5z" />
  </svg>
)

export const IconGreaterEqual = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
    {...props}
  >
    <path d="M6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10l-10.5 7-1-1.5zM5 18h14v2H5v-2z" />
  </svg>
)

export const IconLessEqual = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
    {...props}
  >
    <path d="M17.5 15.5l-8.25-5.5 8.25-5.5-1-1.5L6 10l10.5 7 1-1.5zM5 18h14v2H5v-2z" />
  </svg>
)
