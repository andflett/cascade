import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const DisplayInlineBlock = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M3 3h9v9h-9zM4 4v7h7v-7z" fill={color} fillRule="evenodd" />
      <path d="M13 7h2v1h-2z" fill={color} />
    </svg>
  )
);
DisplayInlineBlock.displayName = "DisplayInlineBlock";
export { DisplayInlineBlock };
