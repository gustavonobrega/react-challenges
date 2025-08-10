import { BrowserRouter, Route, Routes } from "react-router";

import AccordionDemo from "./challenges/accordion-demo";
import RandomColorGenerator from "./challenges/random-color-generator";
import StarRatingDemo from "./challenges/star-rating";
import ImageSlider from "./challenges/image-slider";
import LoadMoreData from "./challenges/load-more-data";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="" />
        <Route path="/accordion" element={<AccordionDemo />} />
        <Route path="/random-color-generator" element={<RandomColorGenerator />} />
        <Route path="/star-rating" element={<StarRatingDemo />} />
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/load-more-data" element={<LoadMoreData />} />
      </Routes>
    </BrowserRouter>
  )
}
