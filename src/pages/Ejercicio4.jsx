import { useState } from 'react'

const elementos = ['Perro', 'Gato', 'Pez', 'Canario']

function Ejercicio4() {
  const [busqueda, setBusqueda] = useState('')

  const filtrados = elementos.filter(item =>
    item.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <main>
      <h2>Ejercicio 4 – Filtro en tiempo real</h2>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {filtrados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  )
}

export default Ejercicio4
