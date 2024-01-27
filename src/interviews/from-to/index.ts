export type Ticket = {
  from: string,
  to: string
}

const getRoute = (tickets: Ticket[]): Ticket[] => {
  const fromToMap = tickets.reduce((acc, ticket) => {
    acc.from[ticket.from] = ticket
    acc.to[ticket.to] = ticket

    return acc
  }, { from: {}, to: {} } as {
    to: { [city: string]: Ticket },
    from: { [city: string]: Ticket }
  })

  const startPoint = tickets.find(({ from }) => !fromToMap.to[from])

  // @ts-ignore
  const road: Ticket[] = [startPoint]

  while (road.length <= tickets.length) {
    const { to } = road[road.length - 1]
    road.push(fromToMap.from[to])
  }

  return road
}

export default getRoute
