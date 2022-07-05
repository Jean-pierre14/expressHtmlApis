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
    // @desc Get one user
    // @Route /api
    // @privilegies
const getUser = async(req, res) => {
    const Id = req.params.id;
    const TId = Id.trim();
    let sql = `SELECT * FROM users WHERE id= ${TId}`
    await db.query(sql, (err, data) => {
        if (err) throw err
        res.json({ datas: data })
    })
}


const createUser = async(req, res) => {

    const { username, fullname, email, password, unique_id } = req.body

    if (!username) {

        res.status(500).json({ message: 'Please fields in all fields' })

    } else {

        if (username.length < 3) {

            res.status(500).json({ message: 'Invalid Username' })

        } else {

            if (password.length <= 4) {

                res.status(500).json({ message: 'Password must have at least 6 characters' })

            } else {

                let sql = `SELECT * FROM users WHERE username = '${username}'`

                db.query(sql, (err, data) => {

                    if (err) throw err

                    if (data.length > 1) {

                        res.json({ message: `This Username is taken ${username}` })

                    } else {

                        let pass = password;

                        let d = new Date('Y-m-d');

                        let y = d.getFullYear()

                        let SQL = `INSERT INTO users(username, fullname, email, pass, salary, department_id)
                                                VALUES('${username}','${fullname}','${email}','${pass}', 2000, 4)`
                        db.query(SQL, (err, result) => {
                            if (err) throw err
                            res.json({ message: `Resultats ${result}` })
                        })
                    }
                })
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
    getUser,
    createUser,
    updateUser,
    deleteUser
}