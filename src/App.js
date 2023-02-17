import { useState } from "react";
import Jogo from "./Componentes/Jogo";
import Letras from "./Componentes/Letras";
import palavras from "./palavras";

let resposta='';
const letrasCertas=[];

export default function App(){
  const [letrasChutadas, setLetrasChutadas]=useState([]);
  const [palavra, setPalavra]=useState(resposta);
  const [jogando, setJogando]=useState(false);
  const [erros, setErros]=useState(0);
  const [chute, setChute]=useState('');
  const [venceu, setVenceu]=useState(false);

  function jogar(){
    setJogando(true);
    resposta = palavras[Math.floor(Math.random()*palavras.length)];
    setPalavra(resposta.split('').map(e=>'_'));
    setErros(0);
    setLetrasChutadas([]);
    console.log(resposta);
    letrasCertas.splice(0,letrasCertas.length);
    setChute('');
  }
  
  function testFimJogo(erro){
    if(erro>5) {
      setJogando(false);
      setVenceu(false);
      setPalavra(resposta);
    }
  }

  function tentarLetra(letra){
    const novaLetra=[...letrasChutadas, letra];
    setLetrasChutadas(novaLetra );
    console.log(novaLetra );
    
    if(resposta.normalize('NFD').replace(/[^A-Za-z]/g,'').includes(letra)){
      letrasCertas.push(letra);
      const updatePalavra=resposta.split('').map(e=>letrasCertas.includes(e.normalize('NFD').replace(/[^A-Za-z]/g,''))?e:'_')
      setPalavra(updatePalavra)
      
      if(!updatePalavra.includes('_')){
        setJogando(false);
        setVenceu(true);
      }
      else{
        console.log('acertou',letrasCertas);
      }
    }
    else{
      const novoErros=erros+1;
      setErros(novoErros);
      testFimJogo(novoErros);
    } 
  }

  function chutar(){
    if(chute.toLowerCase()===resposta){
      setJogando(false);
      setVenceu(true);
      setPalavra(resposta);
    }else{
      const novoErros=6;
      setErros(novoErros);
      testFimJogo(novoErros);
    }
    setChute('');
}

  return (
    <>
      <Jogo erros={erros} jogando={jogando} jogar={jogar} palavra={palavra} venceu={venceu} />
      <Letras jogando={jogando} chute={chute} setChute={setChute} chutar={chutar} letrasChutadas={letrasChutadas} tentarLetra={tentarLetra} />
    </>
  )
};