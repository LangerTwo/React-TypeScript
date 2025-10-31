import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";


describe('SearchBar', () => {

    test('should render searchBar corretly', () => {
        const { container } = render(<SearchBar onQuery={() => {}} />);

        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });

    test('should call on Query with the correct value after 700ms', async() => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test'}});

        // await new Promise((resolve) => setTimeout(resolve, 701));

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });

    test('should call only with the last value (debounce)', async() => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't'} });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('t');
        });
    });

    test('should call onQuery when button clicked the input value', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't'} });

         const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('t');
    });

    test('should the input hast the correct placeholder value', () => {
        const value = 'Buscar algo';

        render(<SearchBar onQuery={() => {}} placeholder={value} />);

        expect(screen.getByPlaceholderText(value)).toBeDefined();
    });
});