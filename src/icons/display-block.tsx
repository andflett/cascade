import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayBlock = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M2 2h11v11h-11zM3 3v9h9v-9z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
DisplayBlock.displayName = "DisplayBlock";
export { DisplayBlock };
