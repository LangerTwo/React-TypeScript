const firstName = 'Arthur';
const lastName = 'Ainsworth';

const favotiteGames = ['Metal Gear', 'Death Stranding', 'Elden Ring'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá',
};
export function MyAwesomeApp() {

    return (
        <>
            <h1>{ firstName }</h1>
            <h3>{ lastName }</h3>

            <p>{favotiteGames.join(', ')}</p>
            <p>{ 2 + 2 }</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p>{JSON.stringify(address)}</p>
        </>
    );
};