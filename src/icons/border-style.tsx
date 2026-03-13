import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const BorderStyle = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 3h13v1h-13z" fill={color} fillRule="evenodd" />
      <path d="M1 7h3v1h-3zM6 7h3v1h-3zM11 7h3v1h-3z" fill={color} fillRule="evenodd" />
      <circle cx="1.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="11.5" r="0.5" fill={color} />
    </svg>
  )
);
BorderStyle.displayName = "BorderStyle";
export { BorderStyle };
