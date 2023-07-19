export interface Message {
  text?: string
  date: Date
  image?: ImageData
}

export interface ImageData {
  buffer: {
    data: Buffer
  }
  data: Uint8Array
  mimetype: string
}
