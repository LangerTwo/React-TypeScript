import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {
    const titleText = "Test Title";

    test('should render the title correctly', () => {
        render(<CustomHeader title={titleText} />);
        expect(screen.getByText(titleText)).toBeDefined();
    });

    test('should render the description when provided', () => {
        const descriptionText = "Test Description";

        render(<CustomHeader title={titleText}  description={descriptionText} />);

        expect(screen.getByText(descriptionText)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(descriptionText)
    });

    test('should not render description when not provided', () => {
        const { container } = render(<CustomHeader title={titleText}  />);

        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(titleText);

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
    })

});