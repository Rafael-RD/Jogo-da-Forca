import JogoDireita from "./JogoDireita";
import JogoEsquerda from "./JogoEsquerda";

export default function Jogo(props){
    
    return (
        <div className="jogo">
            <JogoEsquerda forca={props.forca}/>
            <JogoDireita palavra={props.palavra}/>
        </div>
    )
};