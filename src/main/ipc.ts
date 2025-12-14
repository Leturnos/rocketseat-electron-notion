import { ipcMain } from 'electron'
import { IPCChannels } from '@shared/constants/ipc'
import { FetchAllDocumentsResponse } from '@shared/types/ipc'

ipcMain.handle(
  IPCChannels.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: [
        { id: '1', title: 'Document 1', content: 'Content of Document 1' },
        { id: '2', title: 'Document 2', content: 'Content of Document 2' },
        { id: '3', title: 'Document 3', content: 'Content of Document 3' },
      ],
    }
  },
)
