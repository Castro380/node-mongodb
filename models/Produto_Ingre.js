const mongoose = require('mongoose');

const produtoIngreSchema = new mongoose.Schema({
    produto_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    },
    ingrediente_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingrediente',
        required: true
    }
}, { timestamps: true });

const Produto_Ingre = mongoose.model('Produto_Ingre', produtoIngreSchema);

module.exports = Produto_Ingre;
