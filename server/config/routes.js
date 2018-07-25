var users = require('./../controllers/users');
module.exports = function(app){
    app.post('/note', function(req, res){
        users.makenote(req, res)
    }),
    app.get('/find', function(req, res){
        users.finding(req, res)
    })
}
