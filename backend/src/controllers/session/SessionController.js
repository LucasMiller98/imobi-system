import 'dotenv/config'

import { PrismaClient } from '@prisma/client'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export class SessionController {
  async createSession(req, res) {
    try {
      const { password, email } = req.body

      let user = await prisma.user.findUnique({
        where: { email }
      })

      if(!user) {
        return res.json({ message: 'Usuário ou senha incorreta.' })
      }

      const comparePassword = await compare(password, user.password)

      if(!comparePassword) {
        return res.json({ message: 'Usuário ou senha incorreta.' })
      }

      const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN, {
        expiresIn: process.env.TOKEN_EXPIRES
      })

      return res.status(201).json({ 
        email: user.email, 
        name: user.name,
        token 
      })
      
    } catch (error) {
      return res.json({ message: error.message })
    }
  }
}