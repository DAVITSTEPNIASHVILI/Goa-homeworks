const Presentational = ({count, decrease}) => {
    return (
        <>
            <p>{count}</p>
            <button onClick={decrease}>-1</button>
        </>
    )
}

export default Presentational;