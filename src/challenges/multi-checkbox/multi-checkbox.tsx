import { useEffect, useId, useState } from "react";

interface MultiCheckboxProps {
  options: {
    label: string;
    value: string;
  }[];
  selectedValues: Record<string, boolean>;
  handleToggle: (value: string, nextChecked?: boolean | null) => void;
}

export default function MultiCheckbox({
  options,
  selectedValues,
  handleToggle,
}: MultiCheckboxProps) {
  const [selectingMode, setSelectingMode] = useState<boolean | null>(false);
  const id = useId();

  useEffect(() => {
    if (typeof selectingMode !== "boolean") {
      return;
    }

    function handleMouseUp() {
      setSelectingMode(null);
    }

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [selectingMode]);

  return (
    <ul className="space-y-1">
      {options.map(({ label, value }) => {
        const optionId = `multi-checkbox-${value}-${id}`;
        const currentChecked = !!selectedValues[value];
        const nextChecked = !currentChecked;

        return (
          <li
            key={optionId}
            className="flex items-center gap-2 select-none"
            onMouseDown={() => {
              handleToggle(value);
              setSelectingMode(nextChecked);
            }}
            onMouseEnter={() => {
              if (selectingMode === null) {
                return;
              }
              handleToggle(value, selectingMode);
            }}
          >
            <input
              className="mt-0.5"
              type="checkbox"
              id={optionId}
              value={value}
              checked={currentChecked}
              onKeyDown={(event) => {
                if (event.code === "Space") {
                  handleToggle(value);
                }
              }}
            />
            <label htmlFor={optionId}>{label}</label>
          </li>
        );
      })}
    </ul>
  );
}
