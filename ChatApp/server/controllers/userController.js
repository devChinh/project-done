const User = require('../models/userModel')
const bcrypt = require('bcrypt')

module.exports.register = async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, email, password } = req.body;

        const usernameCheck = await User.findOne({ username }, { maxTimeMS: 20000 })

        if (usernameCheck) {
            return res.json({ msg: "username already used", status: false })
        }

        const emailCheck = await User.findOne({ email }, { maxTimeMS: 20000 })

        if (emailCheck) {
            return res.json({ msg: "email already used", status: false })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            username, email, password: hashedPassword
        })

        delete user.password

        return res.json({ status: true, user })

    } catch (error) {
        next(error)
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const userCheck = await User.findOne({ username }, { maxTimeMS: 20000 })

        if (!userCheck) {
            return res.json({ msg: "Incorrect username or password", status: false })
        }

        const isPasswordValid = await bcrypt.compare(password, userCheck.password)

        if (!isPasswordValid) {
            return res.json({ msg: "Incorrect usename or passwor", status: false })
        }

        delete userCheck.password

        return res.json({ status: true, userCheck })

    } catch (error) {
        next(error)
    }
}

module.exports.setAvatar = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const avatarImage = req.body.image;

        const userData = await User.findByIdAndUpdate({ _id: userId }, {
            isAvatarImageSet: true,
            avatarImage
        },
            {
                new: true
            }
        )
        return res.json({ isSet: userData.isAvatarImageSet, image: userData.avatarImage })
    } catch (error) {
        next(error)
    }
}


module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({ _id: { $ne: req.params.id } }).select([
            "email", "username", "avatarImage", "_id"
        ])
        return res.json(users)
    } catch (error) {
        next(error);
    }
}

module.exports.getUser = async (req, res, next) => {
    try {
        return res.json("lay du lieu thanh cong")
    } catch (error) {
        next(error);
    }
}