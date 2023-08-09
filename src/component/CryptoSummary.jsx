export const CryptoSummary =(props) =>{
    return (
        <>
            <p>{props.crypto.name + "$" + props.crypto.current_price}</p>
        </>
)
}