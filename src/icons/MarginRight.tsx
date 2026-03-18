import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const MarginRight = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2 1h7a1 1 0 0 1 1 1v11a1 1 0 0 1 -1 1h-7a1 1 0 0 1 -1 -1v-11a1 1 0 0 1 1 -1zM2 2h7v11h-7z" fill={color} fillRule="evenodd" />
      <circle cx="13.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="9.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="13.5" r="0.5" fill={color} />
    </svg>
  )
);
MarginRight.displayName = "MarginRight";
export { MarginRight };
