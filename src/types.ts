export interface Message {
  id: string
  text?: string
  date: Date
  image: ImageData
}

export interface ImageData {
  imageOptimized: ImageOptimizedType
  imageOriginal: ImageOriginalType
}

export interface ImageOptimizedType {
  originalname: string
  mimetype: string
  encoding: string
  buffer: string
}
export interface ImageOriginalType {
  imageOriginal: {
    originalname: string
    mimetype: string
    encoding: string
    buffer: string
  }
}
