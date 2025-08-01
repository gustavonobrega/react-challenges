import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  data: {
    id: string;
    question: string;
    answer: string;
  }[];
  allowMultiple?: boolean;
}

export function Accordion({ data, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setOpenItems({});
  }, [allowMultiple]);

  function handleSelection(id: string) {
    if (allowMultiple) {
      setOpenItems((prev) => ({ ...prev, [id]: !openItems[id] }));
    } else {
      setOpenItems({
        [id]: !openItems[id],
      });
    }
  }

  return (
    <div className="shadow rounded-md overflow-hidden">
      {data.map((item) => {
        const state = openItems[item.id] ? "open" : "closed";

        return (
          <div
            key={item.id}
            className="bg-white not-last:border-b border-zinc-300 first:rounded-t-md last:rounded-b-md has-focus-visible:outline-2 has-focus-visible:-outline-offset-2"
            data-state={state}
          >
            <button
              onClick={() => handleSelection(item.id)}
              className="w-full flex items-center justify-between gap-2 group text-left px-4 py-2 bg-transparent border-zinc-300 break-all hyphens-auto cursor-pointer focus:outline-none not-last:border-b"
              data-state={state}
            >
              {item.question}
              <ChevronDown
                size={18}
                className="min-w-max group-data-[state=open]:rotate-180 transition-transform duration-300"
              />
            </button>

            <div
              className="bg-zinc-100 text-zinc-800 overflow-hidden max-h-screen transition-all duration-300 data-[state=closed]:max-h-0 data-[state=closed]:opacity-0"
              data-state={state}
            >
              <p className="p-4 pt-3">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
