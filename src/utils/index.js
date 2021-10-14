export const fetchJson = (...args) => fetch(...args).then((resp) => resp.json());

export function valueToRgba(value, a) {
  let r = 255,
    g = 255,
    b = 0;
  if (value <= 50) {
    g = Math.floor((value / 50) * 255);
  } else if (value > 50) {
    r = Math.floor(255 - ((value - 50) / 50) * 255);
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
