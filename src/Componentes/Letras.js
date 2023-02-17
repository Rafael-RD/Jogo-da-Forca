import BotoesLetras from "./BotoesLetras";

const alfabeto = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

export default function Letras({jogando, chute, setChute, chutar, tentarLetra, letrasChutadas}) {

    return (
        <div className="jogo-embaixo">
            <div className="letras">
                {alfabeto.map(e => <BotoesLetras tentarLetra={tentarLetra} disabled={!jogando || letrasChutadas.includes(e)} key={e} letra={e} />)}
            </div>
            <div className="chute">
                <span>Já sei a palavra!</span>
                <input data-test="guess-input" disabled={!jogando} value={chute} onInput={e=>setChute(e.target.value)}></input>
                <button data-test="guess-button" disabled={!chute} onClick={chutar}>Chutar</button>
            </div>
        </div>
    )
};