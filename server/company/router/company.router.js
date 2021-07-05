const express = require('express')
const router = express.Router()
const companyController =   require('../controller/company.controller');
// Retrieve all companies
router.get('/', companyController.findAll);
// Create a new company
router.post('/', companyController.create);
// Retrieve a single company with id
router.get('/:id', companyController.findById);
// Update a company with id
router.put('/:id', companyController.update);
// Delete a company with id
router.delete('/:id', companyController.delete);
module.exports = router
