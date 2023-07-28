
const Sandwich = require('../models/sandwich');


module.exports = {
    
    create,
    delete: deleteType,
};

async function deleteType(req, res) {
    const sandwich = await Sandwich.findById(req.params.id);
    
    if (!sandwich) return res.redirect('/sandwiches');
    const indexOfType = await sandwich.types.findIndex(function(type){
        return type._id == req.params.type_id
    })
    if (indexOfType != -1 ) {
        sandwich.types.splice(indexOfType, 1)
        await sandwich.save();
        res.redirect(`/sandwiches/${sandwich._id}`);
    }
}

async function create(req, res) {
    const sandwich = await Sandwich.findById(req.params.id);

    req.body.user = req.user._id;

    sandwich.types.push(req.body);
    try {
        await sandwich.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/sandwiches/${sandwich._id}`);
}