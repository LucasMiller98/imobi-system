import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class MessageController {
  async createMessages(req, res) {

    const {
      client_name,
      client_email,
      client_messages,
      userId
    } = req.body
    
    try {

      let message = await prisma.messages.findFirst({
        where: {
          client_email
        }
      })

      if(message) {
        return res.json({
          error: true,
          message: 'Sua mensagem já foi cadastrada, aguarde a resposta do anunciante!'
        })
      }

      message = await prisma.messages.create({
        data: {
          client_email,
          client_messages,
          client_name,
          userId
        }
      })

      console.log(message)

      return res.status(201).json({ 
        error: false,
        messageCreated: 'Messagem criada com sucesso! Aguarde a resposta do anunciante.',
        message
      })
      
    } catch (error) {
      return res.json({ message: error.message })
    }
  }

  async listMessages(req, res) {
    try {
      const messages = await prisma.messages.findMany()

      return res.json(messages)
    } catch (error) {
      return res.status(401).json({ message: error.message })
    }
  }
}
