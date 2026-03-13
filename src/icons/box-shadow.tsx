import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const BoxShadow = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <circle cx="11.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="9.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="9.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="13.5" r="0.5" fill={color} />
      <path d="M0 0h10v10h-10zM1 1v8h8v-8z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
BoxShadow.displayName = "BoxShadow";
export { BoxShadow };
