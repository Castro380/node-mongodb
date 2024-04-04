const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String, 
}, {timestamps: true})

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario