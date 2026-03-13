import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const TextAlignRight = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 2h13v1h-13zM6 5h8v1h-8zM1 8h13v1h-13zM6 11h8v1h-8z" fill={color} />
    </svg>
  )
);
TextAlignRight.displayName = "TextAlignRight";
export { TextAlignRight };
