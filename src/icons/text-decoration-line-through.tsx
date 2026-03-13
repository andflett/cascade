import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const TextDecorationLineThrough = forwardRef<SVGSVGElement, CascadeIconProps>(
  ({ color = "currentColor", ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width="15"
      height="15"
      fill="none"
      {...props}
    >
      <path d="M7.50 11.50L7.50 11.50Q6.66 11.50 6.04 11.23Q5.43 10.96 5.08 10.47Q4.73 9.98 4.68 9.33L4.68 9.33L5.70 9.33Q5.74 9.77 5.99 10.05Q6.25 10.34 6.65 10.48Q7.05 10.61 7.50 10.61L7.50 10.61Q8.03 10.61 8.45 10.44Q8.86 10.27 9.11 9.96Q9.35 9.65 9.35 9.23L9.35 9.23Q9.35 8.86 9.14 8.63Q8.93 8.39 8.58 8.24Q8.23 8.09 7.82 7.97L7.82 7.97L6.88 7.71Q5.94 7.44 5.42 6.95Q4.90 6.45 4.90 5.68L4.90 5.68Q4.90 5.03 5.26 4.53Q5.61 4.04 6.21 3.77Q6.82 3.50 7.57 3.50L7.57 3.50Q8.33 3.50 8.92 3.77Q9.51 4.04 9.85 4.51Q10.19 4.97 10.21 5.56L10.21 5.56L9.24 5.56Q9.18 4.99 8.70 4.68Q8.23 4.37 7.54 4.37L7.54 4.37Q7.04 4.37 6.66 4.54Q6.28 4.70 6.07 4.99Q5.86 5.27 5.86 5.64L5.86 5.64Q5.86 6.04 6.12 6.29Q6.37 6.54 6.72 6.67Q7.06 6.81 7.34 6.89L7.34 6.89L8.12 7.10Q8.43 7.19 8.81 7.33Q9.19 7.48 9.53 7.72Q9.88 7.96 10.10 8.34Q10.32 8.71 10.32 9.25L10.32 9.25Q10.32 9.89 9.99 10.40Q9.66 10.91 9.03 11.20Q8.40 11.50 7.50 11.50Z" fill={color} />
      <path d="M2 7h11v1h-11z" fill={color} />
    </svg>
  )
);
TextDecorationLineThrough.displayName = "TextDecorationLineThrough";
export { TextDecorationLineThrough };
