const {Router} = require('express')
const {createPOst, getPost, getbyid, updatepost, deletepost} = require('../controler/postcontroler')

const router = Router()

router.post('/post',createPOst)
router.get('/post',getPost)
router.get('/post/:id',getbyid)
router.patch('/post/:id',updatepost)
router.delete('/post/:id',deletepost)

module.exports = router;