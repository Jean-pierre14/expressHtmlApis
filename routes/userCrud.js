const exp = require('express'),
    router = exp.Router(),
    { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userCrudEvent')

router.get('/', getUsers)

// router.post('/', createUser)

// router.route('/:id').put(updateUser).delete(deleteUser)

router.put('/:id', updateUser)

module.exports = router