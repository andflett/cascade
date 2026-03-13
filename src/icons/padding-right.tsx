import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const PaddingRight = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 1h13v13h-13zM2 2v11h11v-11z" fill={color} fillRule="evenodd" />
      <circle cx="10.5" cy="4.5" r="0.5" fill={color} />
      <circle cx="10.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="10.5" cy="10.5" r="0.5" fill={color} />
    </svg>
  )
);
PaddingRight.displayName = "PaddingRight";
export { PaddingRight };
