const userCtrl = {}

userCtrl.getUsers =(req, res) => res.send('Users Routes')
userCtrl.createUser =(req, res) => res.json({ message: 'User saved'})
userCtrl.deleteUser =(req, res) => res.json({message: 'User deleted'})

module.exports = userCtrl;