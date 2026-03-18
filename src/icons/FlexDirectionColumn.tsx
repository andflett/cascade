import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FlexDirectionColumn = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 0h6a1 1 0 0 1 1 1v13a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-13a1 1 0 0 1 1 -1zM1 1h6v13h-6z" fill={color} fillRule="evenodd" />
      <path d="M1 8h6v1h-6z" fill={color} />
      <path d="M12 0h1v14.5h-1z" fill={color} />
      <path d="M10 12L12.5 14.5L15 12" fill="none" stroke={color} strokeWidth="1" />
    </svg>
  )
);
FlexDirectionColumn.displayName = "FlexDirectionColumn";
export { FlexDirectionColumn };
