import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FontFamily = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M8.54 3.86L10.22 3.86L10.06 4.81L8.38 4.81L7.22 11.85Q7.04 12.91 6.42 13.45Q5.79 14 4.80 14L4.80 14Q4.37 14 4.05 13.89L4.05 13.89L4.34 12.85Q4.43 12.88 4.65 12.90Q4.87 12.93 4.95 12.93L4.95 12.93Q5.42 12.93 5.69 12.67Q5.96 12.41 6.05 11.86L6.05 11.86L7.21 4.81L5.74 4.81L5.90 3.86L7.37 3.86L7.45 3.36Q7.64 2.22 8.30 1.61Q8.97 1 10.02 1L10.02 1Q10.27 1 10.49 1.04Q10.72 1.08 10.95 1.13L10.95 1.13L10.63 2.13Q10.52 2.10 10.28 2.09Q10.04 2.07 9.85 2.07L9.85 2.07Q8.83 2.07 8.62 3.34L8.62 3.34L8.54 3.86Z" fill={color} />
    </svg>
  )
);
FontFamily.displayName = "FontFamily";
export { FontFamily };
