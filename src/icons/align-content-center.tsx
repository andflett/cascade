import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignContentCenter = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2 0h3v15h-3zM3 1v13h1v-13z" fill={color} fillRule="evenodd" />
      <path d="M6 0h3v15h-3zM7 1v13h1v-13z" fill={color} fillRule="evenodd" />
      <path d="M10 0h3v15h-3zM11 1v13h1v-13z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
AlignContentCenter.displayName = "AlignContentCenter";
export { AlignContentCenter };
