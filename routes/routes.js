const express = require("express");
<<<<<<< HEAD
const ProdutoController = require("../controllers/ProdutoController");
const Produto = require("../models/produto");
=======
>>>>>>> a6e6e93a0469acc2d3b17aee9339608ec1c2faa5
const router = express.Router();

const introducao = require('./introducao')
const lista4 = require('./Lista4')

<<<<<<< HEAD
//Produtos
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos',(req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id',(req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id',(req, res) => ProdutoController.delete(req, res))

//Comandas
router.get('/Comandas', (req, res) => ComandaController.getAll(req, res))
router.post('/Comandas',(req, res) => ComandaController.create(req, res))
router.get('/Comandas/:id', (req, res) => ComandaController.get(req, res))
router.put('/Comandas/:id',(req, res) => ComandaController.update(req, res))
router.delete('/Comandas/:id',(req, res) => ComandaController.delete(req, res))

//Funcionarios
router.get('/Funcionario', (req, res) => FuncionarioController.getAll(req, res))
router.post('/Funcionario',(req, res) => FuncionarioController.create(req, res))
router.get('/Funcionario/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/Funcionario/:id',(req, res) => FuncionarioController.update(req, res))
router.delete('/Funcionario/:id',(req, res) => FuncionarioController.delete(req, res))

//Clientes
router.get('/Cliente', (req, res) => ClienteController.getAll(req, res))
router.post('/Cliente',(req, res) => ClienteController.create(req, res))
router.get('/Cliente/:id', (req, res) => ClienteController.get(req, res))
router.put('/Cliente/:id',(req, res) => ClienteController.update(req, res))
router.delete('/Cliente/:id',(req, res) => ClienteController.delete(req, res))

module.exports = router
=======
router.use('/', introducao)
router.use('/lista4', lista4)

module.exports = router
>>>>>>> a6e6e93a0469acc2d3b17aee9339608ec1c2faa5
