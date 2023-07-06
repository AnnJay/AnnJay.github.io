import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { cards as initialCards } from "./mock";
import { Card } from "./Card";

export const Column = ({ title, titleBg }) => {
  const [cards, setCards] = useState(initialCards);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...cards];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCards(items);
  };

  return (
    <div className="border shadow-sm bg-light w-95">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <div
              className="column p-2"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h4 className={`fs-6 badge mb-2 ${titleBg}`}>{title}</h4>
              <div className="scroll-container custom-scrollbar">
                {cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        className="mb-2 me-1"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card {...card} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
