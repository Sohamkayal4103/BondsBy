const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const getUsers = async (req, res) => {
    res.status(200).json(await User.find())
}


const addUser = asyncHandler(async(req,res) => {
    const { name, email, image, pancard, aadharcard, address, dmataccountnumber, bonds } = req.body
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400);
        throw new Error('User already exist')
    }
    const user = await User.create({
        name,
        email,
        image,
        pancard,
        aadharcard,
        address,
        dmataccountnumber,
        bonds
    })
    if(user){
        res.status(201).json(user)
    } else {
        res.status(400)
       throw new Error('Invalid user data')
    }
})

module.exports = {getUsers,addUser}