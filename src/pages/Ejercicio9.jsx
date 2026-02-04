import { useEffect, useState } from 'react'

function Ejercicio9() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas')
    return guardadas ? JSON.parse(guardadas) : []
  })

  const [texto, setTexto] = useState('')

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const agregar = () => {
    if (texto.trim() === '') return
    setTareas([...tareas, { texto, completada: false }])
    setTexto('')
  }

  const toggle = (index) => {
    setTareas(
      tareas.map((t, i) =>
        i === index ? { ...t, completada: !t.completada } : t
      )
    )
  }

  const limpiarCompletadas = () => {
    setTareas(tareas.filter(t => !t.completada))
  }

  return (
    <main>
      <h2>Ejercicio 9 – Lista de tareas</h2>

      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />
      <button onClick={agregar}>Agregar</button>

      <ul>
        {tareas.map((t, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => toggle(i)}
            />
            {t.texto}
          </li>
        ))}
      </ul>

      <button onClick={limpiarCompletadas}>
        Limpiar completadas
      </button>
    </main>
  )
}

export default Ejercicio9
