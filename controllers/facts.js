const Fact = require('../models/fact');

async function create(req, res) {
    try {
        await Fact.create(req.body);
      } catch (err) {
        console.log(err);
      }
        res.redirect("/facts");
      }

        async function index(req, res) {
          const facts = await Fact.find({});
          res.render('facts/index', { title: "Facts", facts});
      }

module.exports= {
    create,
    index,
};