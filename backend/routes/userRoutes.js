import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,registerUser,updateUserProfile
  
} from '../controllers/userController.js'
import {protect} from '../middelware/authMiddleware.js'


router.post('/login', authUser)
router.post('/', registerUser)

router.route('/profile' ).get(protect,getUserProfile).put(protect, updateUserProfile)


export default router
