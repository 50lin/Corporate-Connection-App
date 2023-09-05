import express from 'express'
import { getFeedPosts, getUserPosts, likePost } from '../controllers/post.js'
import { verifyToken } from '../middlewares/auth.js'

const router = express.Router()

/* READ */
router.get('/', verifyToken, getFeedPosts)
router.get('/:userId/posts', verifyToken, getUserPosts)

/* PRUEBAS */
router.get('/feed', getFeedPosts)
router.get('/:userId/posts/pruebapostporid', getUserPosts)
router.get('/:id/like', likePost)

/* UPDATE */
router.patch('/:postId/like', verifyToken, likePost)

export default router
