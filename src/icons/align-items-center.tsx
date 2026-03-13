import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignItemsCenter = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 4h3v6h-3zM2 5v4h1v-4z" fill={color} fillRule="evenodd" />
      <path d="M6 2h3v10h-3zM7 3v8h1v-8z" fill={color} fillRule="evenodd" />
      <path d="M11 5h3v5h-3zM12 6v3h1v-3z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
AlignItemsCenter.displayName = "AlignItemsCenter";
export { AlignItemsCenter };
