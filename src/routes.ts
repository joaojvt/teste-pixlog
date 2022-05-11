import express from 'express'

const routes = express.Router()

routes.get('/', (req, res) => res.send({ ola: 'mundo!'}))


export default routes