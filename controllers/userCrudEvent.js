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

    const { username, email, password, unique_id } = req.body

    if (!username && !email && !password) {
        res.status(500).json({ message: 'Please fields in all fields' })
    } else {
        if (username.length < 3) {
            res.status(500).json({ message: 'Invalid Username' })
        } else {
            if (password.length <= 4) {
                res.status(500).json({ message: 'Password must have at least 6 characters' })
            } else {
                res.json({ message: "Good job" })
            }
        }
    }

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