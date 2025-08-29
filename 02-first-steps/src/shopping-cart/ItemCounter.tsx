interface Props {
    name?: string,
    quantity?: number
};

export const ItemCounter = ({name, quantity}: Props) => {
    console.log(name);
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
            <button>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    </>
  )
}
