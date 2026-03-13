import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const PositionAbsolute = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h15v15h-15zM1 1v13h13v-13z" fill={color} fillRule="evenodd" />
      <path d="M2 2h6v6h-6zM3 3v4h4v-4z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
PositionAbsolute.displayName = "PositionAbsolute";
export { PositionAbsolute };
