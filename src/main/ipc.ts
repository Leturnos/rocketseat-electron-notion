import { ipcMain } from 'electron'
import { randomUUID } from 'node:crypto'
import { IPCChannels } from '@shared/constants/ipc'
import {
  CreateDocumentResponse,
  DeleteDocumentRequest,
  Document,
  FetchAllDocumentsResponse,
  FetchDocumentRequest,
  FetchDocumentResponse,
  SaveDocumentRequest,
} from '@shared/types/ipc'
import { store } from './store'

ipcMain.handle(
  IPCChannels.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: Object.values(store.get('documents')) || {},
    }
  },
)

ipcMain.handle(
  IPCChannels.DOCUMENTS.FETCH,
  async (_, { id }: FetchDocumentRequest): Promise<FetchDocumentResponse> => {
    const document = store.get(`documents.${id}`) as Document

    return {
      data: document,
    }
  },
)

ipcMain.handle(
  IPCChannels.DOCUMENTS.CREATE,
  async (): Promise<CreateDocumentResponse> => {
    const id = randomUUID()
    const document: Document = {
      id,
      title: 'Untitled',
    }
    store.set(`documents.${id}`, document)
    return {
      data: document,
    }
  },
)

ipcMain.handle(
  IPCChannels.DOCUMENTS.SAVE,
  async (_, { id, title, content }: SaveDocumentRequest): Promise<void> => {
    store.set(`documents.${id}`, { id, title, content })
  },
)

ipcMain.handle(
  IPCChannels.DOCUMENTS.DELETE,
  async (_, { id }: DeleteDocumentRequest): Promise<void> => {
    // @ts-expect-error: known issue with electron-store delete method typings
    store.delete(`documents.${id}`)
  },
)
