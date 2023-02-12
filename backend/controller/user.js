const User = require('../models/user')
const asyncHandler = require('express-async-handler')

const getUsers = async (req, res) => {
    res.status(200).json(await User.find())
}

const getUserByEmail = async(req,res) => {
    res.status(200).json(await User.findOne({email: req.params.email}))
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

const verifyUser = asyncHandler(async(req,res) => {
    const { name, email, image, pancard, aadharcard, address, dmataccountnumber, bonds } = req.body
    const userExist = await User.findById(req.params.id)
    if (userExist) {
        userExist.name = name
        userExist.email = email
        userExist.image = image
        userExist.pancard = pancard
        userExist.aadharcard = aadharcard
        userExist.address = address
        userExist.dmataccountnumber = dmataccountnumber
        userExist.bonds = bonds
        userExist.iSVerified = true
        const updatedUser = await userExist.save()
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            image: updatedUser.image,
            pancard: updatedUser.pancard,
            aadharcard: updatedUser.aadharcard,
            address: updatedUser.address,
            dmataccountnumber: updatedUser.dmataccountnumber,
            bonds: updatedUser.bonds,
            iSVerified: updatedUser.iSVerified,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const addBond = asyncHandler(async(req,res) => {
    const {userId} = req.body;
    const bondExist = await Bonds.findById(req.params.id);
    const userExist = await User.findById(req.params.id);
    console.lfo(bondExist);

})


module.exports = {getUsers,addUser,verifyUser,getUserByEmail}