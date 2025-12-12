import { Route } from 'react-router-dom'
import { Router } from './lib/electron-router-dom'

import { Blank } from './pages/blank'
import { Document } from './pages/document'
import { App } from './App'

export function Routes() {
  return (
    <Router
      // All routes from the Main ID screen
      main={
        <Route path="/" element={<App />}>
          <Route index element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </Route>
      }
    />
  )
}
