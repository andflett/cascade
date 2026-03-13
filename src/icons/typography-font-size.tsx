import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const TypographyFontSize = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2.07 11.50L0.99 11.50L3.89 3.50L5.07 3.50L8.01 11.50L6.94 11.50L5.24 6.75Q5.09 6.31 4.88 5.66Q4.67 5.00 4.38 3.98L4.38 3.98L4.57 3.98Q4.28 5.01 4.07 5.68Q3.86 6.35 3.72 6.75L3.72 6.75L2.07 11.50ZM6.55 9.27L2.45 9.27L2.45 8.38L6.55 8.38L6.55 9.27Z" fill={color} />
      <path d="M9.68 11.50L8.86 11.50L11.04 5.50L11.93 5.50L14.14 11.50L13.33 11.50L12.06 7.94Q11.94 7.61 11.79 7.12Q11.63 6.62 11.41 5.86L11.41 5.86L11.55 5.86Q11.34 6.63 11.18 7.13Q11.02 7.63 10.91 7.94L10.91 7.94L9.68 11.50ZM13.04 9.82L9.96 9.82L9.96 9.16L13.04 9.16L13.04 9.82Z" fill={color} />
    </svg>
  )
);
TypographyFontSize.displayName = "TypographyFontSize";
export { TypographyFontSize };
