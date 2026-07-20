function parseColor(color: string): [number, number, number] | null {
  const trimmed = color.trim();

  if (trimmed.startsWith('#')) {
    const hex = trimmed.slice(1);
    if (hex.length === 3) {
      return [
        parseInt(hex[0] + hex[0], 16),
        parseInt(hex[1] + hex[1], 16),
        parseInt(hex[2] + hex[2], 16),
      ];
    }
    if (hex.length === 6) {
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
      ];
    }
    return null;
  }

  const rgbMatch = trimmed.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (rgbMatch) {
    return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])];
  }

  return null;
}

function toRgbString(r: number, g: number, b: number): string {
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

export function colorWithAlpha(color: string, alpha: number): string {
  const rgb = parseColor(color);
  if (!rgb) return color;
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

export function mixColors(from: string, to: string, ratio: number): string {
  const a = parseColor(from);
  const b = parseColor(to);
  if (!a || !b) return ratio < 0.5 ? from : to;

  const weight = Math.min(1, Math.max(0, ratio));
  return toRgbString(
    a[0] + (b[0] - a[0]) * weight,
    a[1] + (b[1] - a[1]) * weight,
    a[2] + (b[2] - a[2]) * weight,
  );
}

export function buildCubeColorKeyframes(
  colors: string[],
  animationName: string,
  alpha: number,
): string {
  if (colors.length < 2) return '';

  const stops: Array<{ percent: number; color: string }> = [];
  const segmentCount = colors.length;

  for (let i = 0; i < segmentCount; i += 1) {
    const current = colors[i];
    const next = colors[(i + 1) % segmentCount];
    const start = (i / segmentCount) * 100;
    const mid = ((i + 0.5) / segmentCount) * 100;
    const end = ((i + 1) / segmentCount) * 100;

    stops.push({ percent: start, color: current });
    stops.push({ percent: mid, color: mixColors(current, next, 0.5) });
    if (i === segmentCount - 1) {
      stops.push({ percent: 100, color: current });
    } else {
      stops.push({ percent: end, color: next });
    }
  }

  const body = stops
    .map(
      ({ percent, color }) =>
        `${percent.toFixed(2)}% { border-color: ${color}; background-color: ${colorWithAlpha(color, alpha)}; }`,
    )
    .join('\n  ');

  return `@keyframes ${animationName} {\n  ${body}\n}`;
}

export function buildBackgroundColorKeyframes(
  colors: string[],
  animationName: string,
): string {
  if (colors.length < 2) return '';

  const stops: Array<{ percent: number; color: string }> = [];
  const segmentCount = colors.length;

  for (let i = 0; i < segmentCount; i += 1) {
    const current = colors[i];
    const next = colors[(i + 1) % segmentCount];
    const start = (i / segmentCount) * 100;
    const mid = ((i + 0.5) / segmentCount) * 100;
    const end = ((i + 1) / segmentCount) * 100;

    stops.push({ percent: start, color: current });
    stops.push({ percent: mid, color: mixColors(current, next, 0.5) });
    if (i === segmentCount - 1) {
      stops.push({ percent: 100, color: current });
    } else {
      stops.push({ percent: end, color: next });
    }
  }

  const body = stops
    .map(({ percent, color }) => `${percent.toFixed(2)}% { background-color: ${color}; }`)
    .join('\n  ');

  return `@keyframes ${animationName} {\n  ${body}\n}`;
}
