import type { SVGAttributes } from "react";

export interface CascadeIconProps extends SVGAttributes<SVGSVGElement> {
  /** Icon colour. Defaults to `currentColor` (inherits from parent text colour). */
  color?: string;
  /** Icons do not accept children. */
  children?: never;
}

/** A single SVG shape element within an icon. */
export interface SvgPathData {
  id: string;
  type: "path" | "circle" | "rect" | "line" | "polyline";
  d?: string;
  x?: number;
  y?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  cx?: number;
  cy?: number;
  r?: number;
  width?: number;
  height?: number;
  rx?: number;
  points?: string;
  opacity?: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  strokeLinecap?: "round" | "butt" | "square";
  strokeLinejoin?: "round" | "miter" | "bevel";
  strokeDasharray?: string;
  fillRule?: "nonzero" | "evenodd";
  clipRule?: "nonzero" | "evenodd";
  transform?: string;
}

/** Icon data: viewBox string and array of shape elements. */
export interface SlotIconData {
  viewBox: string;
  paths: SvgPathData[];
}
