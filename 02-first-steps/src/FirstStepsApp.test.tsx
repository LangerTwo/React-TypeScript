import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
// import { ItemCounter } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn( (_props: unknown) => {
    return (
        <div data-testid="ItemCounter" />
    )
});

vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));

// vi.mock("./shopping-cart/ItemCounter", () => ({
//     ItemCounter: (props: unknown) => 
//         <div 
//             data-testid="ItemCounter"
//             name={props.name}
//             quantity={props.quantity}
//         />
// }));

describe("FirstStepsApp", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test("should match the snapshot", () => {
        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();
    });

    test("should render the correct number of ItemCounter components", () => {
        render(<FirstStepsApp />);

        const itemCountersEl = screen.getAllByTestId("ItemCounter");

        expect(itemCountersEl.length).toBe(3);
        // screen.debug();
    });

    test("should render ItemCounter with the correct props", () => {
        render(<FirstStepsApp />);

        expect( mockItemCounter ).toHaveBeenCalledTimes(3);
        expect( mockItemCounter ).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2',
            quantity: 1
        });
        expect( mockItemCounter ).toHaveBeenCalledWith({
            name: 'Pro Controller',
            quantity: 2
        });
        expect( mockItemCounter ).toHaveBeenCalledWith({
            name: 'Super Smash',
            quantity: 3
        });
    });
});