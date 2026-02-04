import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <h1>Ejercicios de JavaScript en React</h1>
      <p>Selecciona un ejercicio:</p>

      <ul>
        <li>
          <Link to="/ejercicio-1">
            Ejercicio 1 – Cambiador de color de fondo
          </Link>
        </li>
        <li>
          <Link to="/ejercicio-2">
            Ejercicio 2 – Contador de clics
          </Link>
        </li>
        <li>
          <Link to="/ejercicio-3">
            Ejercicio 3 – Lista dinámica
          </Link>
        </li>
        <li>
          <Link to="/ejercicio-4">
            Ejercicio 4 – Filtro de búsqueda
          </Link>
        </li>
        <li>
          <Link to="/ejercicio-5">
            Ejercicio 5 – Calculadora sencilla
          </Link>
        </li>
        <li>
          <Link to="/ejercicio-6">
            Ejercicio 6 – Temporizador
          </Link>
        </li>
        <li>
          <Link to="/ejercicio-7">
            Ejercicio 7 – Generador de contraseñas
          </Link>
        </li>
        <li>
          <Link to="/ejercicio-8">
            Ejercicio 8 – Contador de palabras y caracteres
          </Link>
        </li>
        <li>
          <Link to="/ejercicio-9">
            Ejercicio 9 – Lista de tareas con LocalStorage
          </Link>
        </li>
      </ul>
    </main>
  )
}

export default Home
