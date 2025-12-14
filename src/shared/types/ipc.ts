export interface IpcDocument {
  id: string
  title: string
  content: string
}

/* Requests */

/* Responses */

export interface FetchAllDocumentsResponse {
  data: IpcDocument[]
}
