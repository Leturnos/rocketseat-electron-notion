import { createElectronRouter } from 'electron-router-dom'

export const { Router, registerRoute } = createElectronRouter({
  port: 5173, // port where the electron is used

  types: {
    ids: ['main'],
  },
})
