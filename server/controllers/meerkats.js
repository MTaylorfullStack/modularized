var mongoose = require('mongoose');
var Meerkat = mongoose.model('Meerkat');
module.exports = {
    show: function(req,res){
        Meerkat.find({}, function(err,meerkats){
            res.render('index', {arr: meerkats})
        })
    },
    create: function(req,res){
        var meerkat = new Meerkat({name: req.body.name, favorite_color: req.body.favorite_color});
        meerkat.save(function(err) {
          if(err) {
            console.log('something went wrong');
            console.log(meerkat.errors);
            res.redirect('/')
          } 
          else {
            console.log('successfully added a Meerkat!');
            res.redirect('/');
          }
        })
    },
    edit: function(req,res){
        meer = Meerkat.findOne({_id: req.params.id}, function(err, meerkat) {
            console.log(meerkat);
            res.render('edit', {meer:meerkat});
        })
    },
    change: function(req,res){
        Meerkat.update({_id: req.params.id},
        {name: req.body.name,
        favorite_color: req.body.favorite_color},
        function(err){
            if(err) {
                console.log('something went wrong');
                console.log(meerkat.errors);
                res.redirect(`/meerkats/edit/${req.params.id}`)
            } 
            else {
                console.log('successfully changed a Meerkat!');
                res.redirect(`/meerkats/${req.params.id}`);
            }

        })
    },
    delete: function(req,res){
        Meerkat.remove({_id: req.params.id}, function(err){
            console.log("RECORD DELETED");
            res.redirect('/');
        })
    },
    disp: function(req,res){
        meer = Meerkat.findOne({_id: req.params.id}, function(err, meerkat) {
            console.log(meerkat);
            res.render('meerkat', {meer:meerkat});
        })
    },

}