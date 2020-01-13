
//requiring controller code so that I can call response methods
var meerkats = require('../controllers/meerkats.js');

module.exports = function(app){
    app.get('/', function(req, res) {
        meerkats.show(req, res);
    })

    app.get('/meerkats/new', function(req, res) {
        res.render('new');
    })
    
    app.post('/add', function(req, res) {
      meerkats.create(req, res);
    })
    
    app.get('/meerkats/edit/:id', function(req, res) {
        meerkats.edit(req, res);
    })

    app.post('/change/:id', function(req, res) {
        meerkats.change(req, res); 
    })
    
    app.post('/delete/:id', function(req,res){
        meerkats.delete(req, res);
    })
    app.get('/meerkats/:id', function(req, res) {
       meerkats.disp(req, res);
    });
}