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
    const sandwich = await Sandwich.findById(req.params.id).populate('cast');
    res.render('sandwiches/show', { title: 'Sandwich Location Details', sandwich });
}

async function create(req, res) {
    req.body.nowShowing = !!req.body.nowShowing;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      try {
        const movie = await Movie.create(req.body);
        res.redirect(`/movies/${movie._id}`);
    } catch (err) {
        console.log(err);
        res.render('movies/new', { errorMsg: err.message });
      }
    }

    function newSandwich(req, res) {
  res.render('sandwich/new', { title: 'Add Sandwich', errorMsg: ''});
    }