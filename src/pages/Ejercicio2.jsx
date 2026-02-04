import { useState } from 'react'

function Ejercicio2() {
  const [contador, setContador] = useState(0)

  return (
    <main>
      <h2>Ejercicio 2 – Contador de clics</h2>
      <p>Clics: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Contar clics
      </button>
    </main>
  )
}

export default Ejercicio2
