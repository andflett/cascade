import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignItemsFlexEnd = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 9h3v6h-3zM2 10v4h1v-4z" fill={color} fillRule="evenodd" />
      <path d="M6 5h3v10h-3zM7 6v8h1v-8z" fill={color} fillRule="evenodd" />
      <path d="M11 10h3v5h-3zM12 11v3h1v-3z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
AlignItemsFlexEnd.displayName = "AlignItemsFlexEnd";
export { AlignItemsFlexEnd };
