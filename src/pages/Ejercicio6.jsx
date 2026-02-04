import { useEffect, useState } from 'react'

function Ejercicio6() {
  const [segundos, setSegundos] = useState(0)
  const [activo, setActivo] = useState(false)

  useEffect(() => {
    let intervalo
    if (activo) {
      intervalo = setInterval(() => {
        setSegundos(s => s + 1)
      }, 1000)
    }
    return () => clearInterval(intervalo)
  }, [activo])

  const formatear = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, '0')
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0')
    const sec = String(s % 60).padStart(2, '0')
    return `${h}:${m}:${sec}`
  }

  return (
    <main>
      <h2>Ejercicio 6 – Temporizador</h2>
      <p>{formatear(segundos)}</p>

      <button onClick={() => setActivo(true)}>Iniciar</button>
      <button onClick={() => setActivo(false)}>Pausar</button>
      <button onClick={() => { setActivo(false); setSegundos(0) }}>
        Reiniciar
      </button>
    </main>
  )
}

export default Ejercicio6
