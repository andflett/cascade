import { forwardRef } from "react";
import type { CascadeIconProps } from "../types";

const MarginAll = forwardRef<SVGSVGElement, CascadeIconProps>(
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
      <path d="M6 5h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1zM6 6h3v3h-3z" fill={color} fillRule="evenodd" />
      <circle cx="1.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="1.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="3.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="5.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="7.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="9.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="11.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="13.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="9.5" r="0.5" fill={color} />
      <circle cx="1.5" cy="11.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="3.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="7.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="9.5" r="0.5" fill={color} />
      <circle cx="13.5" cy="11.5" r="0.5" fill={color} />
    </svg>
  )
);
MarginAll.displayName = "MarginAll";
export { MarginAll };
