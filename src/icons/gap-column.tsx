import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const GapColumn = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h5v15h-5zM1 1v13h3v-13zM10 0h5v15h-5zM11 1v13h3v-13z" fill={color} fillRule="evenodd" />
      <circle cx="7.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="9.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="11.5" r="0.5" fill={color} />
    </svg>
  )
);
GapColumn.displayName = "GapColumn";
export { GapColumn };
