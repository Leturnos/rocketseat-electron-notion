import { Link } from 'react-router-dom'

export function Blank() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      Selecione ou crie um documento para começar.
      <Link to="/document">Abrir Documento Exemplo</Link>
    </main>
  )
}
