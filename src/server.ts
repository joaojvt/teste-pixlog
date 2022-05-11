import express from 'express'
import routes from './routes'

const PORT = 3000

const server = express()

server.use(routes)

const httpServer = server.listen(PORT, '0.0.0.0',  () =>{
  console.log(`server listening to ${PORT}`)
})


// captura erros não tratados
// se não tiver ele o sistema quebra
process.on('uncaughtException', (error, origin) => {
  console.log(`\n${origin} signal received. \n${error}`)
})

// se nao tiver ele, o sistema joga um warn
process.on('unhandledRejection', (error) => {
  console.log(`\nunhandledRejection signal received. \n${error}`)
})


function grafulShutdown(event: string) {
  return (code:number) => {
    console.log(`${event} received! with ${code}`)
    // garantimos que nenhum cliente vai entrar nessa aplicação no periodo
    // mas quem está em alguma transação, termina o que está fazendo
    httpServer.close(() => {
      console.log('http server closed')
      console.log('DB connection closed')
      process.exit(code)
    })
  }
}

// Disparado no Ctrl + C no terminal -> multi plataforma
process.on('SIGINT', grafulShutdown('SIGINT'))

// Disparado no kill
process.on('SIGTERM', grafulShutdown('SIGTERM'))

process.on('exit', (code) => {
  console.log('exit signal received', code)
})
