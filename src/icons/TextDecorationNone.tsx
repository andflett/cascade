import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const TextDecorationNone = forwardRef<SVGSVGElement, CascadeIconProps>(
  ({ color = "currentColor", solid, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width="15"
      height="15"
      fill="none"
      {...props}
    >
      <path d="M4 7h7v1h-7z" fill={color} />
    </svg>
  )
);
TextDecorationNone.displayName = "TextDecorationNone";
export { TextDecorationNone };
