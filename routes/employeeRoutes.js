// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

// Definisi rute
router.use(authenticateToken);
router.get('/employees', employeeController.all.bind(employeeController));
router.get('/employees/:id', employeeController.find.bind(employeeController));
router.post('/employees', employeeController.create.bind(employeeController));
router.put('/employees/:id', employeeController.update.bind(employeeController));
router.delete('/employees/:id', employeeController.delete.bind(employeeController));
router.get('/employees/search/:name', employeeController.search.bind(employeeController));
router.get('/employees/status/:active', employeeController.active.bind(employeeController));
router.get('/employees/status/:inactive', employeeController.inactive.bind(employeeController));
router.get('/employees/status/:terminated', employeeController.terminated.bind(employeeController));

module.exports = router;
