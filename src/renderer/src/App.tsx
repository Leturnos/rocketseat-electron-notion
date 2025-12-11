import './styles/global.css'
import { Header } from '@renderer/components/Header'
import { Sidebar } from '@renderer/components/Sidebar'

export function App() {
  return (
    <div className="h-screen w-screen text-rotion-100 flex-1">
      <Sidebar/>
      <div className="flex-1 flex flex-col max-h-screen">
        <Header/>
        <main className='flex-1 items-center justify-center text-rotion-400'>
          Selecione ou crie um documento para começar.
        </main>
      </div>
    </div>
  )
}
