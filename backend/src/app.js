import 'dotenv/config'

import express from 'express'
import { router } from './routes/routes'
import cors from 'cors'
import { resolve } from 'node:path'

const app = express()

app.use('/uploads', express.static(resolve(__dirname, '../', 'uploads')))

app.use(express.json())

const methodsList = [
  'GET',
  'POST',
  'PUT',
  'DELETE'
]

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', methodsList.map(method => {
    return method
  }))

  app.use(cors())
  next()
})

app.use(router)

app.listen(process.env.SERVER_PORT, () => console.log(`
  Server is running on port ${process.env.SERVER_PORT}
`))