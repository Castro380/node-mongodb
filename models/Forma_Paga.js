const mongoose = require('mongoose');

const formaPagaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const Forma_Paga = mongoose.model('Forma_Paga', formaPagaSchema);

module.exports = Forma_Paga;
