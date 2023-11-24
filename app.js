const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
// const adminRoutes = require('./routes/admin');
const expenseRoute = require('./routes/expenseRoute');


app.use(cors({
    origin: ['http://127.0.0.1:5500', 'http://127.0.0.1:5500/expense.html?amount=20&Description=suspense&exp-categories=Fuel&submit=Submit'],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(adminRoutes);
app.use('/expense',expenseRoute);


sequelize.sync()
.then(result =>{
    app.listen(4000);
})
.catch(err =>{
    console.log(err);
});
