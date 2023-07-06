import React, { useLayoutEffect, useState } from 'react'
import { Column } from './Column'
import { DragDropContext } from 'react-beautiful-dnd'
import { cards as initialCards } from './mock'

const COLUMNS_INFO = {
  funnel: {
    titleBg: 'bg-primary',
    title: 'Funnel',
    columnType: 'funnel',
    order: 1,
    posts: [],
  },
  analyzing: {
    titleBg: 'bg-info',
    title: 'Analyzing',
    columnType: 'analyzing',
    order: 2,
    posts: [],
  },
  backlog: {
    titleBg: 'bg-success',
    title: 'Backlog',
    columnType: 'backlog',
    order: 3,
    posts: [],
  },
  trash: {
    titleBg: 'bg-secondary',
    title: 'Trash',
    columnType: 'trash',
    order: 4,
    posts: [],
  },
}

const sortColumns = (columnsInfo) => {
  const res = Object.values(columnsInfo).sort(
    (col1, col2) => col1.order - col2.order
  )

  return res
}

const fillColumnsWithPosts = (columnsInfo, posts) => {
  if (!posts) return
  const columnTypes = Object.keys(columnsInfo)

  const res = {}

  columnTypes.forEach((type) => (res[type] = []))

  for (const post of posts) {
    const type = post.status

    if (!type || !columnTypes.includes(type)) continue

    res[type].push(post)
  }

  columnTypes.forEach((type) => (columnsInfo[type].posts = res[type]))

  return columnsInfo
}

const createColumns = (posts) => {
  const sortedColumns = sortColumns(COLUMNS_INFO)

  const groupedPosts = fillColumnsWithPosts(COLUMNS_INFO, posts)

  return sortedColumns.map((column) => {
    const posts = groupedPosts[column.columnType]

    return { ...column, posts }
  })
}

export const Board = () => {
  const [posts, setPosts] = useState(initialCards)
  const [columns, setColumns] = useState(
    fillColumnsWithPosts(COLUMNS_INFO, posts)
  )

  const handleDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return

    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.posts]
      const destItems = [...destColumn.posts]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          posts: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          posts: destItems,
        },
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.posts]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          posts: copiedItems,
        },
      })
    }

    // if (!result.destination) return

    // const posts = [...posts]
    // const [reorderedItem] = posts.splice(result.source.index, 1)
    // posts.splice(result.destination.index, 0, reorderedItem)

    // setPosts(posts)
  }

  return (
    <DragDropContext
      onDragEnd={(result) => handleDragEnd(result, columns, setColumns)}
    >
      <div className="board p-4">
        <div className="row gx-4">
          {columns &&
            sortColumns(columns).map((column) => (
              <div className="col-3">
                <Column {...column} />
              </div>
            ))}
        </div>
      </div>
    </DragDropContext>
  )
}
