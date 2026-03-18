import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FontWeight = forwardRef<SVGSVGElement, CascadeIconProps>(
  ({ color = "currentColor", solid, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width="15"
      height="15"
      fill="none"
      {...props}
    >
      <path d="M7.75 11.50L4.52 11.50L4.52 3.50L7.58 3.50Q8.45 3.50 9.02 3.77Q9.59 4.04 9.88 4.51Q10.17 4.98 10.17 5.58L10.17 5.58Q10.17 6.31 9.76 6.73Q9.36 7.15 8.77 7.28L8.77 7.28L8.77 7.36Q9.19 7.38 9.59 7.62Q9.98 7.85 10.23 8.28Q10.48 8.71 10.48 9.32L10.48 9.32Q10.48 9.94 10.18 10.44Q9.88 10.93 9.27 11.22Q8.67 11.50 7.75 11.50L7.75 11.50ZM5.96 7.95L5.96 10.30L7.52 10.30Q8.32 10.30 8.67 10.00Q9.02 9.69 9.02 9.21L9.02 9.21Q9.02 8.68 8.63 8.31Q8.24 7.95 7.57 7.95L7.57 7.95L5.96 7.95ZM5.96 4.69L5.96 6.91L7.40 6.91Q7.97 6.91 8.35 6.60Q8.73 6.29 8.73 5.76L8.73 5.76Q8.73 5.29 8.40 4.99Q8.08 4.69 7.43 4.69L7.43 4.69L5.96 4.69Z" fill={color} />
    </svg>
  )
);
FontWeight.displayName = "FontWeight";
export { FontWeight };
