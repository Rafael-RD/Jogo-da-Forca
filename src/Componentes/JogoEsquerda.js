const forcaImg=[
    "assets/forca0.png",
    "assets/forca1.png",
    "assets/forca2.png",
    "assets/forca3.png",
    "assets/forca4.png",
    "assets/forca5.png",
    "assets/forca6.png"
]

export default function JogoEsquerda(props){

    return (
        <div className="jogo-esquerda">
            <img src={forcaImg[props.forca]} alt="Forca" />
        </div>
    )
}