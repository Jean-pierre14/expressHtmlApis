const exp = require('express');
const router = exp.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userCrudEvent')

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

// router.put('/:id', updateUser)

module.exports = router