import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async (_, args) => {
  console.log(args)

  return 'this is one bridge response'
})
