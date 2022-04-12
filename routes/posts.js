const exp = require('express'),
    router = exp.Router(),
    { getUsers, createUsers, updateUsers, deleteUsers } = require('../controllers/userCrudEvent')

// @Desc the endpoint of the api
// @Route /api
// @Role to get all users
router.get('/', getUsers)


// @Desc the endpoint of the api
// @Route /api
// @Role to get all users
router.post('/', createUsers)


// @Desc the endpoint of the api
// @Route /api
// @Role to get all users
router.get('/:id', updateUsers)


// @Desc the endpoint of the api
// @Route /api
// @Role to get all users
router.get('/:id', deleteUsers)



module.exports = router