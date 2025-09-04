import type { CSSProperties } from "react";

const firstName = 'Arthur';
const lastName = 'Ainsworth';

const favotiteGames = ['Metal Gear', 'Death Stranding', 'Elden Ring'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá',
};
const myStyle: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
};
export function MyAwesomeApp() {


    return (
        <>
            <h1 data-testid="first-name-tittle">{ firstName }</h1>
            <h3>{ lastName }</h3>

            <p className="mi-clase-favorita">{favotiteGames.join(', ')}</p>
            <p>{ 2 + 2 }</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p
                style={myStyle}
            >{JSON.stringify(address)}</p>
        </>
    );
};