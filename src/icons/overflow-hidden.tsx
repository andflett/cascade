import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const OverflowHidden = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M9 0h1v15h-1zM7 0h3v1h-3zM7 14h3v1h-3z" fill={color} />
      <path d="M1 4h7v1h-7zM1 7h5v1h-5zM1 10h7v1h-7z" fill={color} />
    </svg>
  )
);
OverflowHidden.displayName = "OverflowHidden";
export { OverflowHidden };
