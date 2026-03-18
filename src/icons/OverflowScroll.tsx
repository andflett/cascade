import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const OverflowScroll = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 5h7v1h-7z" fill={color} />
      <path d="M1 9h5v1h-5z" fill={color} />
      <path d="M11 1h2v13h-2z" fill={color} opacity={solid ? 1 : 0.15} />
      <path d="M11 1h2v4h-2z" fill={color} />
    </svg>
  )
);
OverflowScroll.displayName = "OverflowScroll";
export { OverflowScroll };
