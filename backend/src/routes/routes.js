import { Router } from 'express'
import { UserController } from '../controllers/user/UserController'
import { SessionController } from '../controllers/session/SessionController'
import { authMiddleware } from '../middlewares/auth'
import { ImobiController } from '../controllers/imobi/ImobiController'
import { MessageController } from '../controllers/messages/MessagesController'
import multer from 'multer'
import uploadConfig from '../middlewares/uploads'

const upload = multer(uploadConfig)

const router = Router()

const userController = new UserController()
const sessionController = new SessionController()
const imobiController = new ImobiController()
const messageController = new MessageController()

router.get('/listUsers', authMiddleware, userController.listUsers)
router.get('/findOneUser/:id', authMiddleware, userController.findOneUser)

router.get('/listImobis', imobiController.listImobis)
router.get('/listImobis/:slug', imobiController.findOneImobi)

router.post('/createUsers', userController.create)
router.post('/login', sessionController.createSession)

router.post('/createImobi', upload.single('thumb'), imobiController.createImobi)

router.post('/createMessages', messageController.createMessages)
router.get('/listMessages', messageController.listMessages)

export { router }


/*
  {
	"id": "3",
	"type": "Apartamento",
	"address": "Avenida Boa Viagem, 1382, Boa Viagem, Recife",
	"city": "Recife",
	"federativeUnit": "Pernabuco",
	"value": "8.500.000",
	"description": "Apartamento à venda no bairro Boa Viagem"
}
*/ 