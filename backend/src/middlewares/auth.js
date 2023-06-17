import jwt from "jsonwebtoken"

export function authMiddleware(req, res, next) {
  const { authorization } = req.headers

  if(!authorization) {
    return res.status(401).json({ message: 'Entre na sua conta e tente novamente.' })
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN)
    const { id } = data
    
    req.userId = id

    return next()
  } catch (error) {
    return res.status(401).json({ message: 'Não autorizado.' })
  }
}