const exp = require('express');
const router = exp.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userCrudEvent')

// Get and Create user
router.route('/').get(getUsers).post(createUser);

/** Desc
 *  GetOne user and UpdateOne HTTP 
 */
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

// router.put('/:id', updateUser)

module.exports = router