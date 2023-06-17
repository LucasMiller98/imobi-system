import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class ImobiController {
  async createImobi(req, res) {
    try {
      const thumb = req.file.filename
      
      const { 
        id,
        name,
        email,
        phone,
        type,
        address,
        city,
        federativeUnit,
        value,          
        description,
      } = req.body

      const user = await prisma.user.findUnique({
        where: { id: Number(id) }
      })

      if(!user) {
        return res.status(401).json({ message: 'Usuário não encontrado.' })
      }

      const slugify = (str = '') => {
        return str.toLowerCase()
                  .trim()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/[\s_-]+/g, '-')
                  .replace(/^-+|-+$/g, '')
      }

      const slug = slugify(type)
      
      const imobi = await prisma.imobi.create({
        data: {
          thumb,
          type,
          address,
          city,
          federativeUnit,
          value,
          description,
          name,
          email,
          phone,
          slug,
          userId: user.id,
        }
      })

      return res.status(201).json(imobi)

    } catch (error) {
      return res.status(401).json({ message: error.message })
    }
  }

  async listImobis(req, res) {
    try {
      
      const imobi = await prisma.imobi.findMany()

      return res.json(imobi)

    } catch (error) {
      return res.status(401).json({ message: error.message })
    }
  }

  async findOneImobi(req, res) {
    try {

      const { slug } = req.params
      
      const imobi = await prisma.imobi.findFirst({
        where: { slug: slug }
      })

      if(!imobi) {
        return res.json({ message: 'Imóvel não encontrado.' })
      }

      return res.json(imobi)

    } catch (error) {
      return res.status(401).json({ message: error.message })
    }
  }
}