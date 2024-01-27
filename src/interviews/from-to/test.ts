import { describe, expect, test } from '@jest/globals';
import solution, { Ticket } from '.'

describe('fromTo', () => {
  const tickets: Ticket[] = [
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'Spb' }
  ]
  const route: Ticket[] = [
    { from: 'NY', to: 'London' },
    { from: 'London', to: 'Moscow' },
    { from: 'Moscow', to: 'Spb' }
  ]
  const matrix: [tickets: Ticket[], expected: Ticket[]][] = [
    [tickets, route]
  ]

  test.each(matrix)(
      'should work',
      (tickets, expected
  ): void => {
    expect(solution(tickets)).toEqual(expected);
  })
});
