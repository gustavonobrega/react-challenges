import { Copy } from "lucide-react";
import { useState } from "react";

export default function RandomColorGenerator() {
  const [randomColors, setRandomColors] = useState({
    hex: "#000000",
    rgb: "rgb(0, 0, 0)",
    hsl: "hsl(0, 0%, 0%)",
  });

  function hexToRgb(hex: string) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
  }

  function rgbToHsl(r: number, g: number, b: number) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max === min) {
      h = 0;
      s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }

  function generateRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215);

    let hexColor = randomColor.toString(16);

    while (hexColor.length < 6) {
      hexColor = "0" + hexColor;
    }

    const [r, g, b] = hexToRgb(hexColor);
    const { h, s, l } = rgbToHsl(r, g, b);

    setRandomColors({
      hex: "#" + hexColor,
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: `hsl(${h}, ${s}%, ${l}%)`,
    });
  }

  function copyToClipboard(value: string) {
    navigator.clipboard.writeText(value)
      .then(() => alert("Copied the color: " + value))
  }

  return (
    <div className="min-h-svh text-slate-800 flex flex-col items-center justify-center gap-5 bg-zinc-100">
      <div>
        <h1 className="text-4xl font-bold ">Random Color Generator</h1>
        <p className="text-lg text-center mt-2">
          Random HEX, RGB and HSL Colors
        </p>
      </div>

      <button
        className="py-2 px-3 rounded-md bg-slate-800 text-white font-semibold cursor-pointer transition-colors hover:bg-slate-900"
        onClick={generateRandomHexColor}
      >
        Generate Random Color
      </button>

      <ul className="space-y-8">
        {Object.entries(randomColors).map(([key, value]) => (
          <li key={key} className="w-72 space-y-2">
            <h3 className="font-bold text-2xl text-center">
              {key.toUpperCase()}
            </h3>
            <div className="flex items-center gap-2 rounded-full border border-zinc-200 py-3 px-4">
              <span
                className="h-7 w-7 border border-inherit rounded-full"
                style={{ backgroundColor: value }}
              />
              <p className={`text-lg font-semibold`}>{value}</p>
              <button className="ml-auto cursor-pointer" onClick={() => copyToClipboard(value)}>
                <Copy size={22} />
                <span className="sr-only">Copy to clipboard</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
