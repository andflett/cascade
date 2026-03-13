import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const AlignContentSpaceAround = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 0h3v15h-3zM2 1v13h1v-13z" fill={color} fillRule="evenodd" />
      <path d="M6 0h3v15h-3zM7 1v13h1v-13z" fill={color} fillRule="evenodd" />
      <path d="M11 0h3v15h-3zM12 1v13h1v-13z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
AlignContentSpaceAround.displayName = "AlignContentSpaceAround";
export { AlignContentSpaceAround };
