import express from 'express'
import multer from 'multer'

import UserController from './controllers/user.controller'

const routes = express.Router()
const MAX_FILE_SIZE = 1024 * 1024 * 100 // 100MB

const userController = new UserController()
const upload = multer({ dest: 'uploads/', limits: { fileSize: MAX_FILE_SIZE } })

routes.get('/users', userController.findAll.bind(userController))
routes.post('/save-files', upload.single('updaloadFile'), userController.saveFile.bind(userController))

routes.use('*', (req, res) => res.send({ message: '404 - URL inexistente!' }))


export default routes
