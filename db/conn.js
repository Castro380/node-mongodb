const mongoose = require('mongoose')

async function main() {

    try {
        await mongoose.connect('mongodb+srv://Castro:ezm8B1KYAVzGH4ZU@cluster0.juzoyg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Banco OK');
    } catch (error) {
        console.log('Erro: ' + error);

    }



}

module.exports = main