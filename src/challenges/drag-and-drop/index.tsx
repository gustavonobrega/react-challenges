import { useState } from "react";

const INITIAL_STATE = [
  {
    name: "Upcoming",
    columnId: "column-a",
    cards: [
      {
        id: "a",
        label: "Buy cat food",
      },
      {
        id: "b",
        label: "File taxes",
      },
    ],
  },
  {
    name: "Finished",
    columnId: "column-b",
    cards: [
      {
        id: "c",
        label: "Buy Amina’s birthday present",
      },
      {
        id: "d",
        label: "Schedule haircut",
      },
    ],
  },
];

export default function DragAndDrop() {
  const [columns, setColumns] = useState(INITIAL_STATE);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  function handleStartDrag(cardId: string) {
    setDraggingId(cardId);
  }

  function handleHoverOverColumn(hoveringColumnIndex: number) {
    if (!draggingId) {
      return;
    }

    const { columnId: hoveringOverColumnId } = columns[hoveringColumnIndex];

    const draggingFromColumnIndex = columns.findIndex((column) =>
      column.cards.some((card) => card.id === draggingId)
    );

    const draggingFromColumnId = columns[draggingFromColumnIndex].columnId;

    if (draggingFromColumnId === hoveringOverColumnId) {
      return;
    }

    const cardIndex = columns[draggingFromColumnIndex].cards.findIndex(
      (card) => card.id === draggingId
    );

    const card = columns[draggingFromColumnIndex].cards[cardIndex];

    setColumns((prevColumns) => {
      return prevColumns.map((col) => {
        if (col.columnId === draggingFromColumnId) {
          return {
            ...col,
            cards: col.cards.filter((card) => card.id !== draggingId),
          };
        }
        if (col.columnId === hoveringOverColumnId) {
          return { ...col, cards: [...col.cards, card] };
        }
        return col;
      });
    });
  }

  return (
    <main className="min-h-svh" onMouseUp={() => setDraggingId(null)}>
      <div className="flex justify-center gap-4 p-8">
        {columns.map((column, columnIndex) => (
          <section
            className="bg-zinc-200 p-2 rounded-lg flex flex-col gap-2 flex-1 max-w-56"
            key={column.columnId}
            onMouseEnter={() => handleHoverOverColumn(columnIndex)}
          >
            <header>{column.name}</header>
            <div className="flex flex-col gap-2">
              {column.cards.map((card) => (
                <button
                  key={card.id}
                  className="p-2 border-2 border-transparent bg-white rounded-sm shadow outline-offset-4 opacity-100 data-[isDragging=true]:opacity-50"
                  data-isDragging={draggingId === card.id}
                  onMouseDown={() => handleStartDrag(card.id)}
                >
                  {card.label}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
