# @designtools/cascade

97 icons for CSS properties and their values, available as React components and raw SVGs. Every icon fits a 15x15 pixel grid with crisp edges at 1x resolution.

Made for design tools that speak code. Maintained by [flett.cc](https://flett.cc).

## Install

```sh
npm install @designtools/cascade
```

## Usage

```tsx
import { DisplayFlex, PaddingTop, FlexDirectionRow } from "@designtools/cascade";

function App() {
  return (
    <div>
      <DisplayFlex />
      <PaddingTop />
      <FlexDirectionRow />
    </div>
  );
}
```

## Props

Every icon component accepts the following props along with all standard SVG attributes (`SVGAttributes<SVGSVGElement>`):

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `currentColor` | Icon colour. Inherits from parent text colour by default. |
| `solid` | `boolean` | `false` | Render at full opacity (strips duotone fading). No effect on non-duotone icons. |
| `width` | `number \| string` | `15` | Icon width. Use multiples of 15 for pixel-perfect rendering. |
| `height` | `number \| string` | `15` | Icon height. Use multiples of 15 for pixel-perfect rendering. |

```tsx
<DisplayFlex color="#6366f1" />
<DisplayFlex solid />
<DisplayFlex width={30} height={30} />
```

Any standard SVG attribute (e.g. `className`, `style`, `aria-hidden`) can also be passed directly.

## Accessibility

Icons ship without `aria-hidden` so consumers can decide per use case.

**Decorative** (most common) — add `aria-hidden="true"`:

```tsx
<label>
  <DisplayFlex aria-hidden="true" />
  Flex
</label>
```

**Standalone/meaningful** — use `aria-label`:

```tsx
<button aria-label="Set display to flex">
  <DisplayFlex aria-hidden="true" />
</button>
```

## Raw SVGs

Static `.svg` files are included in the [`svg/`](svg/) directory for use outside React.

## Metadata

The package exports a `metadata` array mapping CSS properties/values to icon names:

```tsx
import { metadata } from "@designtools/cascade";

// Each entry: { property: string, value: string | null, icon: string }
metadata.forEach((entry) => {
  console.log(`${entry.property}: ${entry.value} → ${entry.icon}`);
});
```

Use this to build icon pickers, documentation, or editor integrations programmatically.

## Categories

| Category | Icons | Examples |
|----------|-------|---------|
| Display | 8 | `DisplayBlock`, `DisplayFlex`, `DisplayGrid`, `DisplayNone` |
| Flex direction | 4 | `FlexDirectionRow`, `FlexDirectionColumn` |
| Flex wrap | 3 | `FlexWrapWrap`, `FlexWrapNowrap` |
| Flex grow/shrink | 2 | `FlexGrow`, `FlexShrink` |
| Justify content | 6 | `JustifyContentCenter`, `JustifyContentSpaceBetween` |
| Align items | 7 | `AlignItemsCenter`, `AlignItemsStretch` |
| Align self | 8 | `AlignSelfCenter`, `AlignSelfStretch` |
| Align content | 9 | `AlignContentCenter`, `AlignContentSpaceBetween` |
| Position | 5 | `PositionAbsolute`, `PositionSticky` |
| Padding | 5 | `PaddingAll`, `PaddingTop` |
| Margin | 5 | `MarginAll`, `MarginTop` |
| Gap | 2 | `GapColumn`, `GapRow` |
| Size | 2 | `SizeHorizontal`, `SizeVertical` |
| Axis | 2 | `AxisX`, `AxisY` |
| Border radius | 5 | `BorderRadiusAll`, `BorderRadiusTopLeft` |
| Border style/width | 2 | `BorderStyle`, `BorderWidth` |
| Overflow | 4 | `OverflowVisible`, `OverflowScroll` |
| Text align | 4 | `TextAlignLeft`, `TextAlignCenter` |
| Text decoration | 3 | `TextDecorationUnderline`, `TextDecorationNone` |
| Text transform | 3 | `TextTransformUppercase`, `TextTransformCapitalize` |
| Typography | 5 | `FontFamily`, `FontSize`, `FontWeight`, `LineHeight`, `LetterSpacing` |
| Opacity | 1 | `Opacity` |
| Box shadow | 1 | `BoxShadow` |

## Compatibility

The package ships both **ESM** (`.mjs`) and **CJS** (`.cjs`) bundles with full TypeScript declarations. It works out of the box with any modern bundler or runtime:

| Format | Entry point | Used by |
|--------|-------------|---------|
| ESM | `dist/index.mjs` | Vite, Next.js, webpack 5+, esbuild |
| CJS | `dist/index.cjs` | Node.js `require()`, older bundlers |
| Types | `dist/index.d.ts` | TypeScript |

The `exports` map in `package.json` ensures the correct format is resolved automatically. The package is marked `sideEffects: false`, so importing a single icon will not bundle the rest.

Requires **React 18+** as a peer dependency.

## Licence

MIT. Glyph paths derived from [Inter](https://rsms.me/inter/) (OFL-1.1).
