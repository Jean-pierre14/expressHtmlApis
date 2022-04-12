const db = require('../models/')

// @desc Get all users
// @Route /api
// @privilegies
const getUsers = async(req, res) => {
    let sql = `SELECT * FROM users ORDER BY id DESC`
    await db.query(sql, (err, data) => {
        if (err) throw err
        res.json({ datas: data })
    })
}


const createUser = async(req, res) => {
    res.json({ message: 'Create User' })
}

const updateUser = async(req, res) => {
    res.json({ message: `Update User ${req.params.id}` })
}
const deleteUser = async(req, res) => {
    res.json({ message: `Delete User ${req.params.id}` })
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}