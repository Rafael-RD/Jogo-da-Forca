import { useState } from "react";
import BotoesLetras from "./BotoesLetras";

const alfabeto = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

export default function Letras() {
    const [chute, setChute]=useState('');
    function chutar(){
        console.log(chute);
        setChute('');
    }
    return (
        <div className="jogo-embaixo">
            <div className="letras">
                {alfabeto.map(e => <BotoesLetras disabled={true} key={e} letra={e} />)}
            </div>
            <div className="chute">
                <span>Já sei a palavra!</span>
                <input disabled={true} value={chute} onInput={e=>setChute(e.target.value)}></input>
                <button disabled={!chute} onClick={chutar}>Chutar</button>
            </div>
        </div>
    )
};