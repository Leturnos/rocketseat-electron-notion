import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async () => {
  return [
    { id: 1, title: 'Document 1', content: 'Content of Document 1' },
    { id: 2, title: 'Document 2', content: 'Content of Document 2' },
    { id: 3, title: 'Document 3', content: 'Content of Document 3' },
  ]
})
