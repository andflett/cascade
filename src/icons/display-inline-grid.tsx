import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayInlineGrid = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M3 3h4v4h-4zM4 4v2h2v-2z" fill={color} fillRule="evenodd" />
      <path d="M8 3h4v4h-4zM9 4v2h2v-2z" fill={color} fillRule="evenodd" />
      <path d="M3 8h4v4h-4zM4 9v2h2v-2z" fill={color} fillRule="evenodd" />
      <path d="M8 8h4v4h-4zM9 9v2h2v-2z" fill={color} fillRule="evenodd" />
      <path d="M13 7h2v1h-2z" fill={color} />
    </svg>
  )
);
DisplayInlineGrid.displayName = "DisplayInlineGrid";
export { DisplayInlineGrid };
