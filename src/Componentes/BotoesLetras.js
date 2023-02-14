export default function BotoesLetras(props){
    
    return(
        <button disabled={props.disabled} className="botao-letra">{props.letra}</button>
    )
}