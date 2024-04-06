const { json } = require("express");
const Produto_Coma = require("../models/Produto_Coma")

const Produto_ComaController = {
  getAll: async (req, res ) => {

const filtros = {}
const campos = Object.keys(Produto_Coma.schema.paths)

for(let campo in req.query){
  if(campos.includes(campos)){
    filtros[campo] = {$regex: new RegExp(req.query[campo], 'i')}
  }
}
 res.json(await Produto_Coma.find(filtros))
},

  //   const tipo = req.query.tipo                                                                                                                                                                                                                                                                             
  //   res.json( await Produto_Coma.find({tipo: {$regex: new RegExp(tipo, 'i')}}))
  // },

  get: async (req, res ) => {
    try {
        res.json( await Produto_Coma.findById(req.params.id))
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },

  create: async (req, res ) => {
      try {
          
          res.json( await Produto_Coma.create(req.body))
        
    } catch (error) {
        res.status(404).json({error})
    }
  },

  update: async (req, res ) => {
      try {
          
          res.json( await Produto_Coma.findByIdAndUpdate(req.params.id, req.body))
        
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },

  delete: async (req, res ) => {
      try {
          res.json( await Produto_Coma.findByIdAndDelete(req.params.id))
          
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },


}

module.exports = Produto_ComaController;