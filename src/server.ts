import { env } from '@/env'
import { app } from './app'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`ok ${env.PORT}`)
    console.log('Sua URL do banco é:', env.DATABASE_URL)
  })
