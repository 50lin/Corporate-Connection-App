import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './src/routes/auth.js'
import userRoutes from './src/routes/user.js'
import postRoutes from './src/routes/post.js'
import { register } from './src/controllers/auth.js'
import { createPost } from './src/controllers/post.js'
import { verifyToken } from './src/middlewares/auth.js'

/* Configuracion */

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()
const port = process.env.PORT || 3001 // Definimos el puerto que escuchará el backend

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(helmet.contentSecurityPolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

/* Almacenamiento de archivos */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

/* Rutas con archivos */
app.post('/auth/register', upload.single('picture'), register)
app.post('/posts', verifyToken, upload.single('picture'), createPost)

/* Rutas */

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.get('/', (req, res) => {
  res.send('Hola desde el BackEnd')
})

export default app
