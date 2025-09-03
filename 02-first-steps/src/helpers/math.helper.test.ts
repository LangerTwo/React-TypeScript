import { describe, expect, test } from 'vitest'
import { add, subtract, multiply } from './math.helper'

describe('add', () => {
    test('should add two positives numbers', () => {
        // ! Arrange
        const a = 2
        const b = 3
    
        // ! Act
        const result = add(2, 3)
        // console.log({ result })
    
        // ! Assert
        expect(result).toBe( a + b )
    })
});

describe('subtract', () => {
    test('should subtract two negatives numbers', () => {
        const a = 2
        const b = 3

        const result = subtract(2, 3)

        expect(result).toBe( a - b )
    })
});

describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        const a = 2
        const b = 3

        const result = multiply(2, 3)

        expect(result).toBe( a * b )
    })
});