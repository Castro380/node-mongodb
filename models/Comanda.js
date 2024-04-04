const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String, 
    data: {
        type: Date,
        required: true,
        set: (value) => {
            const [dia, mes, ano] = value.slipt('/')
            return `${ano}-${mes}-${dia}`
        }
    }
}, {timestamps: true})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda