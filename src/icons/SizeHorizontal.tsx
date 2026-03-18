import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const SizeHorizontal = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M5.93 11L4.81 11L2.69 4L3.89 4L4.74 7.06Q4.91 7.68 5.11 8.47Q5.31 9.27 5.51 10.27L5.51 10.27L5.31 10.27Q5.50 9.31 5.70 8.51Q5.89 7.72 6.07 7.06L6.07 7.06L6.91 4L8.11 4L8.94 7.06Q9.12 7.70 9.31 8.49Q9.50 9.28 9.69 10.27L9.69 10.27L9.48 10.27Q9.69 9.30 9.88 8.50Q10.08 7.71 10.26 7.06L10.26 7.06L11.11 4L12.31 4L10.19 11L9.07 11L8.16 7.83Q8.02 7.35 7.89 6.85Q7.76 6.35 7.63 5.82Q7.51 5.30 7.37 4.75L7.37 4.75L7.63 4.75Q7.50 5.29 7.37 5.82Q7.24 6.35 7.11 6.86Q6.98 7.36 6.84 7.83L6.84 7.83L5.93 11Z" fill={color} />
    </svg>
  )
);
SizeHorizontal.displayName = "SizeHorizontal";
export { SizeHorizontal };
