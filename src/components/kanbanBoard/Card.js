import React from 'react'
import { Icon } from './Icon'
import { Draggable } from 'react-beautiful-dnd'

export const iconsPath = 'images/icons'

export const Card = ({ iconSrc, id, goalType, description, author, size, index }) => {
  return (
    <>
      <Draggable key={id} draggableId={id} index={index}>
        {(provided) => (
          <div
            className="mb-2 me-1 card bg-body p-2"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="d-flex justify-content-between mb-2 fw-medium">
              <div className="d-flex text-body align-items-center">
                <Icon src={iconSrc} className="me-3" />
                <span className="me-3">{`#${id}`}</span>
                <span>{goalType}</span>
              </div>

              <div className="d-flex align-items-center">
                <span className="me-3 text-primary">{size}</span>
                <Icon
                  src={`${iconsPath}/edit-icon.svg`}
                  isClickable
                  className="me-3"
                />
                <Icon src={`${iconsPath}/delete-icon.svg`} isClickable />
              </div>
            </div>

            <p className="card-text text-secondary">{description}</p>

            <p className="text-secondary m-0">{author}</p>
          </div>
        )}
      </Draggable>
    </>
  )
}
