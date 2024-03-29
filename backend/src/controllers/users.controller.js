const userCtrl = {}
const User = require('../models/User')

userCtrl.getUsers = async (req, res) => {
        const users = await User.find();
        res.json(users);
}

userCtrl.createUser = async(req, res) => {
    const newUser = new User( req.body );
    await newUser.save();
    res.json({ message: 'User saved'})
};


userCtrl.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id); 
    res.json({message: 'User deleted'})
}

module.exports = userCtrl;