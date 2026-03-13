import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayInlineFlex = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 7h2v1h-2z" fill={color} />
      <path d="M3 3h4v9h-4zM4 4v7h2v-7z" fill={color} fillRule="evenodd" />
      <path d="M8 3h4v9h-4zM9 4v7h2v-7z" fill={color} fillRule="evenodd" />
      <path d="M13 7h2v1h-2z" fill={color} />
    </svg>
  )
);
DisplayInlineFlex.displayName = "DisplayInlineFlex";
export { DisplayInlineFlex };
