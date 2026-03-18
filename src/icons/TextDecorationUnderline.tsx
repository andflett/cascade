import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const TextDecorationUnderline = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M7.51 11.50L7.51 11.50Q6.58 11.50 5.88 11.14Q5.19 10.77 4.81 10.14Q4.42 9.50 4.42 8.69L4.42 8.69L4.42 3.50L5.43 3.50L5.43 8.61Q5.43 9.18 5.68 9.62Q5.93 10.06 6.40 10.32Q6.86 10.57 7.51 10.57L7.51 10.57Q8.15 10.57 8.61 10.32Q9.07 10.06 9.32 9.62Q9.57 9.18 9.57 8.61L9.57 8.61L9.57 3.50L10.58 3.50L10.58 8.69Q10.58 9.50 10.19 10.14Q9.81 10.77 9.12 11.14Q8.44 11.50 7.51 11.50Z" fill={color} />
      <path d="M2 13h11v1h-11z" fill={color} />
    </svg>
  )
);
TextDecorationUnderline.displayName = "TextDecorationUnderline";
export { TextDecorationUnderline };
