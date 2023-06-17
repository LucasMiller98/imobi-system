import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

export class UserController {

  async listUsers(req, res) {
    try {
      const user = await prisma.user.findMany() 

      return res.json(user)

    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  async findOneUser(req, res) {
    try {
      const { id } = req.params

      const user = await prisma.user.findUnique({
        where: { id: Number(id) }
      })
      
      if(!user) {
        return res.json({ message: 'Usuário não encontrado.' })
      }

      return res.json(user)
      
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
  
  async create(req, res) {
    
    try{
      const { name, password, email, confirmPassword } = req.body

      let user = await prisma.user.findUnique({
        where: { email }
      })

      if(user) {
        return res.json({ 
          error: true,
          message: 'O e-mail informado já existe.' 
        })
      }

      const isValidPassword = password !== confirmPassword
      
      if(isValidPassword) {
        return res.json({ message: 'A senha deve ser igual a confirmação de senha.' })
      }

      if(!password || !confirmPassword || !email || !name) {
        return res.json({ message: 'Preencha todos os campos.' })
      }

      const hashPassword = await hash(password, 8)
      const hashConfirmPassword = await hash(confirmPassword, 8)
      
      user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashPassword,
          confirmPassword: hashConfirmPassword
        }
      })

      return res.status(201).json({
        error: false,
        message: 'Usuário criado com sucesso!',
        user
      })
      
    }catch(error) {
      return res.status(500).json({ message: error.message })
    }
  }
}