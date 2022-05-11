import express from 'express'

import UserController from './controllers/user.controller'

const routes = express.Router()

const userController = new UserController()

routes.get('/', (req, res) => res.send({ ola: 'mundo!'}))
routes.get('/users', userController.findAll.bind(userController))

routes.use('*', (req, res) => res.send({message: '404 - URL inesistente!'}))


export default routes