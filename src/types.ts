import type { SVGAttributes } from "react";

export interface CascadeIconProps extends SVGAttributes<SVGSVGElement> {
  /** Icon colour. Defaults to \`currentColor\` (inherits from parent text colour). */
  color?: string;
  /** Render at full opacity (strips duotone fading). No effect on non-duotone icons. */
  solid?: boolean;
  /** Icons do not accept children. */
  children?: never;
}

/** Metadata entry mapping a CSS property/value to an icon. */
export interface IconEntry {
  /** CSS property name, e.g. "align-items" */
  property: string;
  /** CSS value, e.g. "flex-start". Null for property-level icons. */
  value: string | null;
  /** PascalCase icon name matching the SVG file and React component. */
  icon: string;
}
