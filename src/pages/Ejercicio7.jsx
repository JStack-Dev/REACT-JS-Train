import { useState } from 'react'

function Ejercicio7() {
  const [longitud, setLongitud] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const generar = () => {
    if (longitud < 4) {
      setError('La longitud debe ser mayor o igual a 4')
      setPassword('')
      return
    }

    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
    let resultado = ''

    for (let i = 0; i < longitud; i++) {
      resultado += caracteres[Math.floor(Math.random() * caracteres.length)]
    }

    setPassword(resultado)
    setError('')
  }

  return (
    <main>
      <h2>Ejercicio 7 – Generador de contraseñas</h2>

      <input
        type="number"
        value={longitud}
        onChange={e => setLongitud(e.target.value)}
        placeholder="Longitud"
      />

      <button onClick={generar}>Generar contraseña</button>

      {error && <p>{error}</p>}
      {password && <p>{password}</p>}
    </main>
  )
}

export default Ejercicio7
