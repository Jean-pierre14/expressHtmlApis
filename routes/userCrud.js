const exp = require('express'),
    router = exp().Router(),
    { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userCrudEvent')

router.route('/').get(getUsers).post(createUser)

router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router