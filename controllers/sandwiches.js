const Sandwich = require('../models/sandwich');

module.exports= {
    index,
    show,
    create,
    new: newSandwich
};

async function index(req, res) {
    const sandwiches = await Sandwich.find({});
    res.render('sandwiches/index', { title: "Sandwich Locations", sandwiches});
}

async function show(req, res) {
    const sandwich = await Sandwich.findById(req.params.id);
    res.render('sandwiches/show', { title: 'Sandwich Location Details', sandwich });
}

async function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      try {
        const sandwich = await Sandwich.create(req.body);
        res.redirect(`/sandwiches`);
    } catch (err) {
        console.log(err);
        res.render('sandwiches/rest', { errorMsg: err.message });
      }
    }

    function newSandwich(req, res) {
  res.render('sandwiches/rest', { title: 'Add Sandwich', errorMsg: ''});
    }