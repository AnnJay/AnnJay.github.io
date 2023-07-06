import React from 'react'
import { Droppable } from 'react-beautiful-dnd'


import { Card } from './Card'

export const Column = ({ posts, title, titleBg, columnType }) => {
  return (
    <div className="border shadow-sm bg-light w-95">
        <Droppable droppableId={columnType}>
          {(provided) => (
            <div
              className="column p-2"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h4 className={`fs-6 badge mb-2 ${titleBg}`}>{title}</h4>
              
              <div className="scroll-container custom-scrollbar">
                {posts && posts.map((card, index) => (
                  <Card {...card} index={index} />
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
    </div>
  )
}
