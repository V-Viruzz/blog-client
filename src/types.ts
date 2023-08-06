export interface Message {
  text?: string
  date: Date
  image: ImageData
}

export interface ImageData {
  imageOptimized: {
    originalname: string
    mimetype: string
    encoding: string
    buffer: {
      data: Buffer
      type: string
    }
  }
  imageOriginal: {
    originalname: string
    mimetype: string
    encoding: string
    buffer: {
      data: Buffer
      type: string
    }
  }
}
