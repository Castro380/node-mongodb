const { json } = require("express");
const Forma_Paga = require("../models/Forma_Paga")

const Forma_PagaController = {
  getAll: async (req, res ) => {

const filtros = {}
const campos = Object.keys(Forma_Paga.schema.paths)

for(let campo in req.query){
  if(campos.includes(campos)){
    filtros[campo] = {$regex: new RegExp(req.query[campo], 'i')}
  }
}
 res.json(await Forma_Paga.find(filtros))
},

  //   const tipo = req.query.tipo                                                                                                                                                                                                                                                                             
  //   res.json( await Forma_Paga.find({tipo: {$regex: new RegExp(tipo, 'i')}}))
  // },

  get: async (req, res ) => {
    try {
        res.json( await Forma_Paga.findById(req.params.id))
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },

  create: async (req, res ) => {
      try {
          
          res.json( await Forma_Paga.create(req.body))
        
    } catch (error) {
        res.status(404).json({error})
    }
  },

  update: async (req, res ) => {
      try {
          
          res.json( await Forma_Paga.findByIdAndUpdate(req.params.id, req.body))
        
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },

  delete: async (req, res ) => {
      try {
          res.json( await Forma_Paga.findByIdAndDelete(req.params.id))
          
    } catch (error) {
        res.status(404).json({error: 'error'})
    }
  },


}

module.exports = Forma_PagaController;