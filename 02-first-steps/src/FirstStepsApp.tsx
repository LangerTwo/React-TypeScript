import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {

    return (
        <>
            <h1>Carriyo de Compras</h1>

            <ItemCounter name="Nintendo Switch 2" quantity={15}/>
            <ItemCounter name="Pro Controller" quantity={20}/>
            <ItemCounter name="Super Smash" quantity={25}/>
        </>
    );
};