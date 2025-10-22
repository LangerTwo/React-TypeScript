import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = 'Control de Nintendo';

        render(<ItemCounter name={name} />);
        // screen.debug();

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('should render with custom quantity', () => {
        const name = 'Control de Nintendo';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity}/>);
        // screen.debug();

        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is clicked', async () => {
        render(<ItemCounter name="Test Item" quantity={1}/>);

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    });

    test('should increase count when -1 button is clicked', async () => {
        render(<ItemCounter name="Test Item" quantity={5}/>);

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);
        expect(screen.getByText('4')).toBeDefined();
    })

    test('should increase count when -1 button is presses and quantity is 1', async () => {
        const quantity = 1;
        render(<ItemCounter name="Test Item" quantity={quantity}/>);

        const [, buttonSubtract] = screen.getAllByRole('button');
        
        fireEvent.click(buttonSubtract);
        expect(screen.getByText('0')).toBeDefined();
    });

    test('should change to red when is 1', () => {
        const quantity = 1;
        const name = 'Test Item';
        render(<ItemCounter name={name} quantity={quantity}/>);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when is greater 1', () => {
        const quantity = 2;
        const name = 'Test Item';
        render(<ItemCounter name={name} quantity={quantity}/>);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
    });
});