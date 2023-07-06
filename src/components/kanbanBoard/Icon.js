import React from 'react'

export const Icon = ({ src, isClickable = false, ...props }) => {
  return (
    <img
      src={src}
      alt="kanban post icon"
      height={18}
      width={18}
      style={{ cursor: isClickable ? 'pointer' : 'inherit' }}
      {...props}
    />
  )
}
