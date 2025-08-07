import { useEffect, useState } from "react";
import Slider from "./slider";

export interface ImageSliderData {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const URL = "https://picsum.photos/v2/list";
const PAGE = 1;
const LIMIT = 10;

export default function ImageSlider() {
  const [data, setData] = useState<ImageSliderData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}?page=${PAGE}&limit=${LIMIT}`);

        if (!res.ok) {
          throw new Error(`HTTP Error! status: ${res.status}`);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : "Unexpected error occurred...";
        console.log(errorMsg);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="min-h-svh flex items-start justify-center py-8 px-4">
      <Slider data={data} isLoading={isLoading} />
    </div>
  );
}
