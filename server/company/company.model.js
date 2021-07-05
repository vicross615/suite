'use strict';
var dbConn = require('../../config/db.config');
//Company object create
var Company = function(company){
  this.first_name     = company.first_name;
  this.last_name      = company.last_name;
  this.email          = company.email;
  this.phone          = company.phone;
  this.organization   = company.organization;
  this.designation    = company.designation;
  this.salary         = company.salary;
  this.status         = company.status ? company.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Company.create = function (newEmp, result) {
  dbConn.query("INSERT INTO companies set ?", newEmp, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Company.findById = function (id, result) {
  dbConn.query("Select * from companies where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};
Company.findAll = function (result) {
  dbConn.query("Select * from companies", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('companies : ', res);
      result(null, res);
    }
  });
};
Company.update = function(id, company, result){
  dbConn.query("UPDATE companies SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [company.first_name,company.last_name,company.email,company.phone,company.organization,company.designation,company.salary, id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
  });
};
Company.delete = function(id, result){
  dbConn.query("DELETE FROM companies WHERE id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
};
module.exports= Company;
