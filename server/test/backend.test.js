import app from '../index.js'
import request from 'supertest'
import { describe, it, expect, beforeEach, afterAll } from '@jest/globals' // Importamos los métodos de Jest para hacer pruebas
import Post from '../src/models/Post.js'
import User from '../src/models/User.js'
import { users, posts } from './data.js'

describe('Pruebas para getFeedPosts', () => {
  beforeEach(async () => {
    await Post.deleteMany({})
    // await User.deleteMany({})

    // User.insertMany(users)
    Post.insertMany(posts)
  })
  it('Debería obtener una lista de publicaciones', async () => {
    const response = await request(app).get('/post/feed')
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    console.log(response.body)
    console.log(response.body[0])
    console.log(response.body.length)
  })
})

describe('Pruebas para getFeedPosts', () => {
  beforeEach(async () => {
    await Post.deleteMany({})
    // await User.deleteMany({})

    // User.insertMany(users)
    // Post.insertMany(posts)
  })
  it('Debería obtener una lista de publicaciones', async () => {
    const response = await request(app).get('/post/feed')
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    console.log(response.body)
    console.log(response.body[0])
    console.log(response.body.length)
  })
})

describe('CreatePost test', () => {
  // Antes de cada prueba, limpiamos la base de datos de posts

  beforeEach(async () => {
    await Post.deleteMany({})
    // await User.deleteMany({})

    // User.insertMany(users)
    Post.insertMany(posts)
  })

  it('debe crear un nuevo post', async () => {
    // Datos del nuevo post a crear
    const newPostData = {
      userId: '6079d71e75a4f8001c56a998', // Id válido de un usuario existente en la base de datos
      firstName: 'Steve',
      lastName: 'Ralph',
      location: 'New York, CA',
      description: 'Nuevo post de prueba2',
      picturePath: 'ruta/de/la/imagen.jpg',
      userPicturePath: 'ruta/de/la/imagen-usuario.jpg',
      likes: { 5000: true }, // Likes dados por el usuario con el Id dado
      comments: ['Comentario 1', 'Comentario 2'] // Comentarios asociados al post
    }

    // Creamos un nuevo post utilizando el modelo de Post
    const newPost = new Post(newPostData)
    const savedPost = await newPost.save()

    // Verificamos que el post se haya guardado correctamente en la base de datos
    expect(savedPost._id).toBeDefined()
    expect(savedPost.userId).toBe(newPostData.userId)
    expect(savedPost.firstName).toBe(newPostData.firstName)
    expect(savedPost.lastName).toBe(newPostData.lastName)
    expect(savedPost.location).toBe(newPostData.location)
    expect(savedPost.description).toBe(newPostData.description)
    expect(savedPost.picturePath).toBe(newPostData.picturePath)
    expect(savedPost.userPicturePath).toBe(newPostData.userPicturePath)
    expect(savedPost.comments).toEqual(newPostData.comments)

    const response = await request(app).get('/post/feed')
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    console.log(response.body.length)
  })
})

describe('Pruebas para getUserPosts', () => {
  it('debe obtener las notas de un usuario en especifico por id', async () => {
    const response = await request(app).get('/post/6079d71e75a4f8001c56a998/posts/pruebapostporid')
    const notas = response.body // Aquí obtienes el array de posts
    console.log(`Hay ${notas.length} notas`)

    // Verifica que la respuesta tenga el código de estado 200 (OK)
    expect(response.status).toBe(200)

    // Verifica que la respuesta sea en formato JSON
    expect(response.type).toBe('application/json')

    // Verifica que la respuesta contenga el array de posts
    expect(response.body).toBeDefined()
    expect(Array.isArray(response.body)).toBe(true)

    // Por ejemplo, si esperas que haya al menos un post en el feed, puedes hacer:
    expect(response.body.length).toBeGreaterThan(0)
  })
})

describe('Mas pruebas para getUserPosts', () => {
  beforeEach(async () => {
    await Post.deleteMany({})
  })

  afterAll(async () => {
    Post.insertMany(posts)
  })

  it('debe mostrar error por que el usuario no tiene notas', async () => {
    const response = await request(app).get('/post/6079d71e75a4f8001c56a998/posts/pruebapostporid')
    console.log('No hay notas')
    const notas = response.body // Aquí obtienes el array de posts
    console.log(`Hay ${notas.length} notas`)
    expect(notas).toHaveLength(0)
    expect(response.body).toHaveProperty('error', 'No se encontraron notas para este usuario.')
  })
})

// pruebas para el login //
describe('POST /auth/login', () => {
  it('should return a token and user object when given valid credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ email: 'lino@lino.com', password: 'asgsdg' })
    expect(response.body).toHaveProperty('token')
    expect(response.body).toHaveProperty('user')
  })

  it('should return an error message when given invalid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'lino@lino.com', password: 'wrongpassword' })
    expect(response.body).toHaveProperty('msg', 'Invalid Credentials')
  })
})

// pruebas para el middleware //
describe('GET /', () => {
  it('should return a 200 status code when given a valid token', async () => {
    const response = await request(app)
      .get('/')
      .set('Authorization', 'Bearer YOUR_TOKEN_HERE')

    expect(response.status).toBe(200)
  })

  it('should return a 403 status code when not given a token', async () => {
    const response = await request(app)
      .get('/')

    expect(response.status).toBe(403)
  })

  it('should return a 500 status code when given an invalid token', async () => {
    const response = await request(app)
      .get('/')
      .set('Authorization', 'Bearer INVALID_TOKEN')

    expect(response.status).toBe(500)
  })
})
