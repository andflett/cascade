# @designtools/cascade

88 CSS layout property icons as React components and raw SVGs. Every icon fits a 15x15 pixel grid with crisp edges at 1x resolution.

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
      <DisplayFlex aria-hidden="true" />
      <PaddingTop aria-hidden="true" />
      <FlexDirectionRow aria-hidden="true" />
    </div>
  );
}
```

Icons inherit the current text colour by default. Override with the `color` prop:

```tsx
<DisplayFlex color="#6366f1" />
```

## Sizing

Default size is 15x15. For pixel-perfect rendering, use multiples of 15:

```tsx
<DisplayFlex width={30} height={30} />
```

Any size works via `width`/`height` props or CSS.

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

Static `.svg` files are included in the `svg/` directory for use outside React:

```
node_modules/@designtools/cascade/svg/display-flex.svg
```

## Categories

| Category | Icons | Examples |
|----------|-------|---------|
| Display | 8 | `DisplayBlock`, `DisplayFlex`, `DisplayGrid`, `DisplayNone` |
| Flex direction | 4 | `FlexDirectionRow`, `FlexDirectionColumn` |
| Flex wrap | 3 | `FlexWrapWrap`, `FlexWrapNowrap` |
| Flex grow/shrink | 2 | `FlexGrow`, `FlexShrink` |
| Justify content | 6 | `JustifyContentCenter`, `JustifyContentSpaceBetween` |
| Align items | 7 | `AlignItemsCenter`, `AlignItemsStretch` |
| Align self | 7 | `AlignSelfCenter`, `AlignSelfStretch` |
| Align content | 6 | `AlignContentCenter`, `AlignContentSpaceBetween` |
| Position | 5 | `PositionAbsolute`, `PositionSticky` |
| Padding | 5 | `PaddingAll`, `PaddingTop` |
| Margin | 5 | `MarginAll`, `MarginTop` |
| Gap | 2 | `GapColumn`, `GapRow` |
| Size | 2 | `SizeHorizontal`, `SizeVertical` |
| Axis | 2 | `AxisX`, `AxisY` |
| Border radius | 5 | `BorderRadiusAll`, `BorderRadiusTopLeft` |
| Border style | 1 | `BorderStyle` |
| Overflow | 4 | `OverflowVisible`, `OverflowScroll` |
| Text align | 4 | `TextAlignLeft`, `TextAlignCenter` |
| Text decoration | 3 | `TextDecorationUnderline`, `TextDecorationNone` |
| Text transform | 3 | `TextTransformUppercase`, `TextTransformCapitalize` |
| Typography | 5 | `TypographyFontFamily`, `TypographyLineHeight` |
| Opacity | 1 | `Opacity` |
| Box shadow | 1 | `BoxShadow` |

## Tree-shaking

The package is marked `sideEffects: false` and ships ESM + CJS. Importing a single icon will not bundle the rest.

## Licence

MIT. Glyph paths derived from [Inter](https://rsms.me/inter/) (OFL-1.1).
