
const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username:{
        type: String, //tipo de dato cadena
        require: true, // obligatorio
        trim: true, // permite evitar espacios
        unique: true //permite no repetirse
    }
}, {
    timestamps: true
});

module.exports =model('User', userSchema);