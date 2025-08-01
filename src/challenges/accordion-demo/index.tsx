import { useState } from "react";

import { Accordion } from "./accordion";

import { data } from "./data";

export default function AccordionDemo() {
  const [isMultiple, setIsMultiple] = useState(false);

  function handleSelectionType() {
    setIsMultiple(!isMultiple);
  }

  return (
    <div className="min-h-svh flex flex-col gap-10 items-center bg-slate-100 p-8">
      <button
        className="group flex items-center gap-2 mt-12 uppercase bg-zinc-700 text-white rounded-full text-xs font-bold py-2 px-4 hover:cursor-pointer"
        onClick={handleSelectionType}
      >
        Multi Selection
        <span className={`h-2.5 w-2.5 rounded-full group-hover:scale-125 transition-transform ${isMultiple ? "bg-green-400" : "bg-zinc-400"}`}/>
      </button>

      <div className="w-80">
        <Accordion data={data} allowMultiple={isMultiple} />
      </div>
    </div>
  );
}
