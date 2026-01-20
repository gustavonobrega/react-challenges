import { useState } from "react";
import MultiCheckbox from "./multi-checkbox";

const DAYS = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
];

export default function MultiCheckboxDemo() {
  const [selectedDays, setSelectedDays] = useState<Record<string, boolean>>({});

  function handleToggle(value: string, nextChecked?: boolean | null) {
    setSelectedDays({
      ...selectedDays,
      [value]:
        typeof nextChecked === "boolean" ? nextChecked : !selectedDays[value],
    });
  }

  return (
    <div className="min-h-svh bg-gradient-to-t from-yellow-100 to-yellow-50">
      <div className="h-svh flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Foodorama Order Form</h1>
        <p className="">Sign up to receive daily meal delivery service.</p>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-72 w-full mt-8 p-4 pt-3 bg-white rounded-sm border-2 border-dotted border-yellow-300 outline-4 outline-white">
          <h2 className="text-lg font-bold mb-2">Select days:</h2>

          <MultiCheckbox
            options={DAYS}
            selectedValues={selectedDays}
            handleToggle={handleToggle}
          />

          <button className="block w-full mt-4 py-0.5 bg-zinc-100 border border-black rounded-xs hover:bg-zinc-200/70 cursor-pointer">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
