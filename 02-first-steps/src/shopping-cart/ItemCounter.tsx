import { useState } from "react";

interface Props {
    name?: string,
    quantity?: number
};

export const ItemCounter = ({name, quantity = 1}: Props) => {
    // console.log(name);
    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubTract = () => {
        if (count === 0) return;

        setCount(count - 1);
    }

    return (
        <>
            <section
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginTop: '2rem'
                }}
            >
                <span
                    style={{
                        width: '200px',
                    }}
                >{name}</span>
                <button onClick={handleAdd}>+1</button>
                <span>{count}</span>
                <button onClick={handleSubTract}>-1</button>
            </section>
        </>
    )
}
