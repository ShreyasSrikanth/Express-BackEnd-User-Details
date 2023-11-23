const path = require('path'); //built in 
const express = require('express');
const Router = express.Router(); //built in function which routes

const adminController = require('../controllers/admin');

Router.post('/user',adminController.postUserDetails);

Router.get('/userDetails',adminController.getUserDetails);

module.exports = Router;