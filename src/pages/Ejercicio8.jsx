import { useState } from 'react'

function Ejercicio8() {
  const [texto, setTexto] = useState('')

  const palabras = texto.trim() === ''
    ? 0
    : texto.trim().split(/\s+/).length

  const caracteres = texto.replace(/\s/g, '').length

  return (
    <main>
      <h2>Ejercicio 8 – Contador de palabras</h2>

      <textarea
        rows="5"
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />

      <p>Palabras: {palabras}</p>
      <p>Caracteres (sin espacios): {caracteres}</p>
    </main>
  )
}

export default Ejercicio8
