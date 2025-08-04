import { BrowserRouter, Route, Routes } from "react-router";
import AccordionDemo from "./challenges/accordion-demo";
import RandomColorGenerator from "./challenges/random-color-generator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="" />
        <Route path="/accordion" element={<AccordionDemo />} />
        <Route path="/random-color-generator" element={<RandomColorGenerator />} />
      </Routes>
    </BrowserRouter>
  )
}
