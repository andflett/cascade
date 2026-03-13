import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FlexDirectionRow = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h8v15h-8zM1 1v13h6v-13z" fill={color} fillRule="evenodd" />
      <path d="M9 0h6v15h-6zM10 1v13h4v-13z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
FlexDirectionRow.displayName = "FlexDirectionRow";
export { FlexDirectionRow };
