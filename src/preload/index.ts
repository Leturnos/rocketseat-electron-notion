import { contextBridge } from 'electron'
import { electronAPI, ElectronAPI } from '@electron-toolkit/preload'
import { IPCChannels } from '@shared/constants/ipc'
import { FetchAllDocumentsResponse } from '@shared/types/ipc'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}

// Custom APIs for renderer
const api = {
  fetchDocuments(): Promise<FetchAllDocumentsResponse> {
    return electronAPI.ipcRenderer.invoke(IPCChannels.DOCUMENTS.FETCH_ALL)
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
