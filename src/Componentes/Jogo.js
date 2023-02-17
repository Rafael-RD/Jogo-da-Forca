import JogoDireita from "./JogoDireita";
import JogoEsquerda from "./JogoEsquerda";

export default function Jogo({erros, palavra, jogando, jogar, venceu}){
    
    return (
        <div className="jogo">
            <JogoEsquerda erros={erros}/>
            <JogoDireita palavra={palavra} jogar={jogar} jogando={jogando} venceu={venceu} />
        </div>
    )
};