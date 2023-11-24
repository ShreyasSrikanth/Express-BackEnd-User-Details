const expense = require('../models/expenseModel');

exports.postExpenseAmount=(req,res,next)=>{
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;

    console.log("amount",amount);
    console.log("description",description);
    console.log("category",category);

    expense.create({
        amount:amount,
        description:description,
        category:category
    })
    .then(res =>{
        console.log('expense data stored');
    })
    .catch(err =>{
        console.log(err);
    });

    res.json({amount:amount,description:description,category:category});
}

exports.getExpenseAmount=(req,res,next)=>{
    expense.findAll()
    .then(result =>{
        console.log('returning expense');
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    })
}