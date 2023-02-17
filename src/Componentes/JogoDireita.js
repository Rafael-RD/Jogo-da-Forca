
export default function JogoDireita({palavra, jogar, jogando, venceu}){
    
    return (
        <div className="jogo-direita">
            <button data-test="choose-word" onClick={jogar} >Escolher palavra</button>
            <span data-test="word" className={jogando?'':venceu?"verde":"vermelho"}>{palavra.toString().replaceAll(',',' ')}</span>
        </div>
    )
}