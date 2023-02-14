
export default function JogoDireita(props){
    
    return (
        <div className="jogo-direita">
            <button>Escolher palavra</button>
            <span className="verde">{props.palavra}</span>
        </div>
    )
}