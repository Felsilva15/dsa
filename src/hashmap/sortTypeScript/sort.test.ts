import { expect, test } from 'vitest'
import { sort } from './sort.js'

test('Sort Array', () => {
    expect(sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
})