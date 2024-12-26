const {Router} = require('express')
const {insertNote,fetchData,fetchonedata, deletedata, updatadata} = require('../controler/notecontroler')

const router = Router()

router.post('/notes',insertNote)
router.get('/notes',fetchData)
router.get('/notes/:id',fetchonedata)
router.delete('/notes/:id',deletedata)
router.patch('/notes/:id',updatadata)

module.exports = router;