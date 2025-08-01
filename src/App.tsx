import { BrowserRouter, Route, Routes } from "react-router";
import AccordionDemo from "./challenges/accordion-demo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="" />
        <Route path="/accordion" element={<AccordionDemo />} />
      </Routes>
    </BrowserRouter>
  )
}
