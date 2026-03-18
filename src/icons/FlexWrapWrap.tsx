import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const FlexWrapWrap = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0.5 2h4a0.5 0.5 0 0 1 0.5 0.5v4a0.5 0.5 0 0 1 -0.5 0.5h-4a0.5 0.5 0 0 1 -0.5 -0.5v-4a0.5 0.5 0 0 1 0.5 -0.5zM1 3h3v3h-3z" fill={color} fillRule="evenodd" />
      <path d="M6.5 2h4a0.5 0.5 0 0 1 0.5 0.5v4a0.5 0.5 0 0 1 -0.5 0.5h-4a0.5 0.5 0 0 1 -0.5 -0.5v-4a0.5 0.5 0 0 1 0.5 -0.5zM7 3h3v3h-3z" fill={color} fillRule="evenodd" />
      <path d="M0.5 8h4a0.5 0.5 0 0 1 0.5 0.5v4a0.5 0.5 0 0 1 -0.5 0.5h-4a0.5 0.5 0 0 1 -0.5 -0.5v-4a0.5 0.5 0 0 1 0.5 -0.5zM1 9h3v3h-3z" fill={color} fillRule="evenodd" />
      <path d="M12.5 4.5C12.5 4.5 14.5 4.5 14.5 7.5C14.5 10.5 12.5 10.5 8.5 10.5" fill="none" stroke={color} strokeWidth="1" />
      <path d="M10.5 8.5L8.5 10.5L10.5 12.5" fill="none" stroke={color} strokeWidth="1" />
    </svg>
  )
);
FlexWrapWrap.displayName = "FlexWrapWrap";
export { FlexWrapWrap };
