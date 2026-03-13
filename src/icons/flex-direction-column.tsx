import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FlexDirectionColumn = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h15v8h-15zM1 1v6h13v-6z" fill={color} fillRule="evenodd" />
      <path d="M0 9h15v6h-15zM1 10v4h13v-4z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
FlexDirectionColumn.displayName = "FlexDirectionColumn";
export { FlexDirectionColumn };
