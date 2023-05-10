import { useNavigate } from "react-router-dom"

function Portada() {
  const navegacion = useNavigate()
  return (
    <>
    <div>Bienvenido/a</div>
    <button onClick={()=>navegacion("/juego")}>Jugar</button>
    </>
  )
}

export default Portada