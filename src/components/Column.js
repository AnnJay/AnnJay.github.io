import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { cards as initialCards } from "./constants";
import { Card } from "./Card";

export const Column = ({ title }) => {
  const [cards, setCards] = useState(initialCards);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...cards];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCards(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="cards">
        {(provided) => (
          <div
            className="column"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h2>{title}</h2>
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided) => (
                  <div
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
        )}
      </Droppable>
    </DragDropContext>
  );
};
