const path = require('path'); //built in 
const express = require('express');
const router = express.Router(); //built in function which routes

const expenseController = require('../controllers/expenseController');

router.post('/store',expenseController.postExpenseAmount);
router.get('/fetch',expenseController.getExpenseAmount);

module.exports = router;