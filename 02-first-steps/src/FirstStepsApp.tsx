import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
};

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 2 },
    { productName: 'Super Smash', quantity: 3 },
];

export function FirstStepsApp() {

    return (
        <>
            <h1>Carriyo de Compras</h1>

            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }

            {/* <ItemCounter name="Nintendo Switch 2" quantity={15}/>
            <ItemCounter name="Pro Controller" quantity={20}/>
            <ItemCounter name="Super Smash" quantity={25}/>
            <ItemCounter name="Super Mario" quantity={30}/> */}
        </>
    );
};