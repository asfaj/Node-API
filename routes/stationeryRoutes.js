const express = require('express')
const { 
    create, 
    deleteP, 
    getById, 
    get, 
    update } = require("../controller/productController");


const productRoute = express.Router();


productRoute.route('/').get(get).post(create)
productRoute.route('/:id').get(getById).put(update).delete(deleteP)

module.exports = productRoute;
