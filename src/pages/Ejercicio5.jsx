import { useState } from 'react'

function Ejercicio5() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(null)

  const calcular = (operacion) => {
    const a = Number(num1)
    const b = Number(num2)

    if (isNaN(a) || isNaN(b)) return setResultado('Datos inválidos')
    if (operacion === '/' && b === 0) return setResultado('No se puede dividir por 0')

    switch (operacion) {
      case '+': setResultado(a + b); break
      case '-': setResultado(a - b); break
      case '*': setResultado(a * b); break
      case '/': setResultado(a / b); break
      default: break
    }
  }

  return (
    <main>
      <h2>Ejercicio 5 – Calculadora</h2>

      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />

      <div>
        <button onClick={() => calcular('+')}>Sumar</button>
        <button onClick={() => calcular('-')}>Restar</button>
        <button onClick={() => calcular('*')}>Multiplicar</button>
        <button onClick={() => calcular('/')}>Dividir</button>
      </div>

      {resultado !== null && <p>Resultado: {resultado}</p>}
    </main>
  )
}

export default Ejercicio5
