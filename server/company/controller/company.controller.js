'use strict';
const Company = require('../company.model');

exports.findAll = function(req, res) {
  Company.findAll(function(err, company) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', company);
    res.send(company);
  });
};

exports.create = function(req, res) {
  const new_employee = new Company(req.body);
//handles null error
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Company.create(new_employee, function(err, company) {
      if (err)
        res.send(err);
      res.json({error:false,message:"Company added successfully!",data:company});
    });
  }
};

exports.findById = function(req, res) {
  Company.findById(req.params.id, function(err, company) {
    if (err)
      res.send(err);
    res.json(company);
  });
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Company.update(req.params.id, new Company(req.body), function(err, company) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'Company successfully updated' });
    });
  }
};
exports.delete = function(req, res) {
  Company.delete( req.params.id, function(err, company) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'Company successfully deleted' });
  });
};
