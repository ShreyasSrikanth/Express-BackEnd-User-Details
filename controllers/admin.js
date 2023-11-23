const User = require('../models/user');

exports.postUserDetails = (req,res,next) =>{
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    console.log("name",name);
    console.log("email",email);
    console.log("phone",phone);

    User.create({
        name: name,
        phone: phone,
        email:email
    })
    .then(result =>{
        console.log('User data stored');
      })
      .catch(err=>{console.log(err)})
}

exports.getUserDetails = (req,res,next) => {
    User.findAll()
    .then(users =>{
        console.log('getting')
        res.json(users)
    })
    .catch(err=>{
        console.log(err)
    })
}