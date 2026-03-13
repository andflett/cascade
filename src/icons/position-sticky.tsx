import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const PositionSticky = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M3 3h9v6h-9zM4 4v4h7v-4z" fill={color} fillRule="evenodd" />
      <circle cx="5.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="1.5" r="0.5" fill={color} />
    </svg>
  )
);
PositionSticky.displayName = "PositionSticky";
export { PositionSticky };
