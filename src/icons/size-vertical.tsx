import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const SizeVertical = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M6.06 7.90L6.06 7.90L6.06 11.50L5.10 11.50L5.10 3.50L6.06 3.50L6.06 6.95L5.90 6.95Q6.17 6.12 6.68 5.77Q7.19 5.42 7.87 5.42L7.87 5.42Q8.47 5.42 8.93 5.67Q9.39 5.92 9.65 6.42Q9.90 6.93 9.90 7.69L9.90 7.69L9.90 11.50L8.93 11.50L8.93 7.77Q8.93 7.08 8.57 6.68Q8.21 6.29 7.58 6.29L7.58 6.29Q7.15 6.29 6.80 6.48Q6.46 6.67 6.26 7.03Q6.06 7.39 6.06 7.90Z" fill={color} />
    </svg>
  )
);
SizeVertical.displayName = "SizeVertical";
export { SizeVertical };
