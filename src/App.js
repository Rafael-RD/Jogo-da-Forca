import { useState } from "react";
import Jogo from "./Componentes/Jogo";
import Letras from "./Componentes/Letras";
import palavras from "./palavras";

export default function App(){
  const [forca, setForca]=useState(0);
  const [palavra, setPalavra]=useState(palavras[Math.floor(Math.random()*palavras.length)])
  return (
    <>
      <Jogo forca={forca} palavra={palavra} />
      <Letras />
    </>
  )
};