import { contextBridge } from 'electron'
import { electronAPI, ElectronAPI } from '@electron-toolkit/preload'
import { IPCChannels } from '@shared/constants/ipc'
import {
  CreateDocumentResponse,
  DeleteDocumentRequest,
  FetchAllDocumentsResponse,
  FetchDocumentRequest,
  FetchDocumentResponse,
  SaveDocumentRequest,
} from '@shared/types/ipc'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}

const api = {
  fetchDocuments(): Promise<FetchAllDocumentsResponse> {
    return electronAPI.ipcRenderer.invoke(IPCChannels.DOCUMENTS.FETCH_ALL)
  },

  fetchDocument(req: FetchDocumentRequest): Promise<FetchDocumentResponse> {
    return electronAPI.ipcRenderer.invoke(IPCChannels.DOCUMENTS.FETCH, req)
  },

  createDocument(): Promise<CreateDocumentResponse> {
    return electronAPI.ipcRenderer.invoke(IPCChannels.DOCUMENTS.CREATE)
  },

  saveDocument(req: SaveDocumentRequest): Promise<void> {
    return electronAPI.ipcRenderer.invoke(IPCChannels.DOCUMENTS.SAVE, req)
  },

  deleteDocument(req: DeleteDocumentRequest): Promise<void> {
    return electronAPI.ipcRenderer.invoke(IPCChannels.DOCUMENTS.DELETE, req)
  },
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
