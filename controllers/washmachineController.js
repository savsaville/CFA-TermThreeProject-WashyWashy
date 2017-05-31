const mongoose = require('mongoose');
const Washmachine = require('../models/Washmachine');

/* GET */

exports.getWashmachines = (req, res) => {
Washmachine.find()
  .then((washmachines) => {
    res.render('index', {
      title: 'Washmachines',
      washmachines: washmachines
    })
  })
};

exports.getApiWashmachines = (req, res) => {
Washmachine.find()
  .then((washmachines) => {
    res.json(washmachines)
  })
};

exports.createWashmachines = (req, res) => {
const name = req.body.washmachine_name;
const cycles = req.body.washmachine_cycles;
const size = req.body.washmachine_size;
let washmachine = new Washmachine();
washmachine.name = name;
washmachine.cycles = cycles;
washmachine.size = size;
washmachine.save()
  .then(() => {
    res.redirect('/')
  })
};

exports.createApiWashmachines = (req, res) => {
const name = req.query.name;
const cycles = req.query.cycles;
const size = req.query.size;
let washmachine = new Washmachine();
washmachine.name = name;
washmachine.cycles = cycles;
washmachine.size = size;
washmachine.save()
  .then(() => {
    res.json(washmachine)
  })
};

exports.editWashmachines = (req, res) => {
  Washmachine.findOne({ _id: req.params.id })
    .then(washmachine => {
      res.render('editWashmachine', {washmachine: washmachine});
    })
};
exports.updateWashmachines = (req, res) => {
  Washmachine.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true //returns new washmachine
  })
      .then(washmachine => {
        res.redirect('/')
      })
}
