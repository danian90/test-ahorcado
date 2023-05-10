import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import Contexto from "../contexto/Contexto";

function getImageUrl(imagen) {
  return new URL(`../assets/el_ahorcado${imagen}.png`, import.meta.url).href
}

const Final = () => {
  const { laCorrecta } = useContext(Contexto)
  const navegacion = useNavigate();
  return (
    <>
      <h1>Vaya, respuesta incorrecta</h1>
      <h2>La respuesta correcta era: <strong>{laCorrecta}</strong></h2>
      <div className="imagen">
      <img src={getImageUrl(6)} alt="" />
      </div>
      <button onClick={() => navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Final