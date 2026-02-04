import { useState } from 'react'

function Ejercicio1() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  const cambiarColor = () => {
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setBackgroundColor(colorAleatorio)
  }

  return (
    <main
      style={{
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        padding: '2rem'
      }}
    >
      <h2>Ejercicio 1 – Cambiador de color de fondo</h2>

      <button onClick={cambiarColor}>
        Cambiar color
      </button>
    </main>
  )
}

export default Ejercicio1
