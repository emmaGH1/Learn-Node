const express = require('express')
const router = express.Router()

const { getPeople,
        postPerson, 
        postPersonPostman, 
        updatePerson, 
        deletePerson
 } = require('../controllers/people')

router.get('/', getPeople)
router.post('/', postPerson)
router.post('/api/postman/people', postPersonPostman)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router