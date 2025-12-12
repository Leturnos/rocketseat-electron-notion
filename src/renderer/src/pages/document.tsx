import { Link } from 'react-router-dom'

export function Document() {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      Exemplo de documento aberto.
      <Link to="/">Voltar para a tela inicial</Link>
    </main>
  )
}
