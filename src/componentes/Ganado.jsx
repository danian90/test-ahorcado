import { useNavigate } from "react-router-dom"

function getImageUrl(imagen) {
  return new URL(`../assets/el_ahorcado${imagen}.png`, import.meta.url).href
}

const Ganado = () => {
  const navegacion = useNavigate();
  return (
    <>
      <h1>Muy bien, has ganado, y continua manteniendo tu cabeza sobre los honbros</h1>
      <div className="imagen">
        <img src={getImageUrl(1)} alt="" />
      </div>
      <button onClick={()=> navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Ganado