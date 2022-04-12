const exp = require('express');
const router = exp.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userCrudEvent')

router.route('/').get(getUsers).post(createUser);

router.route('/:id').put(updateUser).delete(deleteUser)

// router.put('/:id', updateUser)

module.exports = router