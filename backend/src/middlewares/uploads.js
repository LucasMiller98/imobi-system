import multer from 'multer'
import crypto from 'crypto'
import { resolve } from 'path'

const tempFolder = resolve(__dirname, '../', '../', 'uploads')
const tempUpload = resolve(tempFolder, 'uploads')

export default {
  directory: tempFolder,
  uploadFolder: tempUpload,

  storage: multer.diskStorage({
    destination: tempFolder,
    filename(req, file, callback) {
      const hashFile = crypto.randomBytes(10).toString('hex')
      const nameFile = `${hashFile}-${file.originalname}`

      return callback(null, nameFile)
    }
  })
}