const mongoose = require('mongoose');

const produtoComaSchema = new mongoose.Schema({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    },
    comanda_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comanda',
        required: true
    },
    quantidade: {
        type: Number,
        required: true,
        min: 1
    }
}, { timestamps: true });

const Produto_Coma = mongoose.model('Produto_Coma', produtoComaSchema);

module.exports = Produto_Coma;
