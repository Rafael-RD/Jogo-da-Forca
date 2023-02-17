export default function BotoesLetras({disabled, letra, tentarLetra}){
    
    return(
        <button data-test="letter" onClick={()=>tentarLetra(letra)} disabled={disabled} className="botao-letra">{letra.toUpperCase()}</button>
    )
}