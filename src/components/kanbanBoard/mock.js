const copy = {
  id: '508',
  goalType: 'RUN',
  description:
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit',
  status: 'funnel',
  author: 'No name',
  iconSrc: '/images/icons/feature-icon.svg',
  size: '8',
}

const cardGenerator = (copy) => {
  const res = []

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      res.push({ ...copy, id: String(i), status: 'backlog' })
    } else if (i % 4 == 0) {
      res.push({ ...copy, id: String(i), status: 'analyzing' })
    } else if (i % 11 == 0) {
      res.push({ ...copy, id: String(i), status: 'trash' })
    } else {
      res.push({ ...copy, id: String(i) })
    }
  }

  return res
}

export const cards = cardGenerator(copy)

// export const cards = [
//   {
//     id: '508',
//     goalType: 'RUN',
//     description:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit',
//     status: 'funnel',
//     author: 'No name',
//     iconSrc: '/images/icons/file-regular.svg',
//     size: '8',
//   },
//   {
//     id: '902',
//     goalType: 'RUN',
//     description:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit',
//     status: 'backlog',
//     author: 'No name',
//     iconSrc: '/images/icons/file-regular.svg',
//     size: '8',
//   },
//   {
//     id: '1018',
//     goalType: 'RUN',
//     description:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit ',
//     status: 'backlog',
//     author: 'No name',
//     iconSrc: '/images/icons/file-regular.svg',
//     size: '8',
//   },
//   {
//     id: '521',
//     goalType: 'RUN',
//     description:
//       'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit',
//     status: 'backlog',
//     author: 'No name',
//     iconSrc: '/images/icons/file-regular.svg',
//     size: '8',
//   },
// ]
