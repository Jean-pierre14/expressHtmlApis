const getUsers = async(req, res) => {
    let sql = `SELECT * FROM users ORDER BY id DESC`
    await db.query(sql, (err, data) => {
        if (err) throw err
        res.json({ data })
    })
}

const createUsers = async(req, res) => {
    res.json({ message: 'Create User' })
}

const updateUsers = async(req, res) => {
    res.json({ message: `Update User ${req.params.id}` })
}
const deleteUsers = async(req, res) => {
    res.json({ message: `Delete User ${req.params.id}` })
}

module.exports = {
    getUsers,
}