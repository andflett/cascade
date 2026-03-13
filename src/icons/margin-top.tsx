import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const MarginTop = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 5h13v9h-13zM2 6v7h11v-7z" fill={color} fillRule="evenodd" />
      <circle cx="1.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="3.5" r="0.5" fill={color} />
    </svg>
  )
);
MarginTop.displayName = "MarginTop";
export { MarginTop };
