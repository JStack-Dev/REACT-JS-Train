import { useState } from 'react'

function Ejercicio3() {
  const [texto, setTexto] = useState('')
  const [lista, setLista] = useState([])

  const agregarItem = () => {
    if (texto.trim() === '') return
    setLista([...lista, texto])
    setTexto('')
  }

  const eliminarItem = (index) => {
    setLista(lista.filter((_, i) => i !== index))
  }

  return (
    <main>
      <h2>Ejercicio 3 – Lista dinámica</h2>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={agregarItem}>Agregar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => eliminarItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Ejercicio3
