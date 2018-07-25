var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    makenote:function(req, res){
        User.create({note: req.body.note}, function(err, user){
            res.json({user: user})
        })
    },
    finding:function(req, res){
        User.find({}).sort('-createdAt').exec(function(err, users){
          res.json(users)
        })
    }
}