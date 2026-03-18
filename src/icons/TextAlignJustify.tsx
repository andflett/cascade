import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const TextAlignJustify = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M1 2h13v1h-13zM1 5h13v1h-13zM1 8h13v1h-13zM1 11h13v1h-13z" fill={color} />
    </svg>
  )
);
TextAlignJustify.displayName = "TextAlignJustify";
export { TextAlignJustify };
