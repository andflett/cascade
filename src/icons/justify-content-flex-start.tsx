import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const JustifyContentFlexStart = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h3v15h-3zM1 1v13h1v-13z" fill={color} fillRule="evenodd" />
      <path d="M4 0h3v15h-3zM5 1v13h1v-13z" fill={color} fillRule="evenodd" />
      <path d="M8 0h3v15h-3zM9 1v13h1v-13z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
JustifyContentFlexStart.displayName = "JustifyContentFlexStart";
export { JustifyContentFlexStart };
