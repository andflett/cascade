import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const JustifyContentSpaceBetween = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M0 0h3v15h-3zM1 1v13h1v-13z" fill={color} fillRule="evenodd" />
      <path d="M6 0h3v15h-3zM7 1v13h1v-13z" fill={color} fillRule="evenodd" />
      <path d="M12 0h3v15h-3zM13 1v13h1v-13z" fill={color} fillRule="evenodd" />
    </svg>
  )
);
JustifyContentSpaceBetween.displayName = "JustifyContentSpaceBetween";
export { JustifyContentSpaceBetween };
