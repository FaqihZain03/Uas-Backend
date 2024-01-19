// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
router.get('/employees', employeeController.all.bind(employeeController));
router.get('/employees/:id', employeeController.find.bind(employeeController));
router.post('/employees', employeeController.create.bind(employeeController));
router.put('/employees/:id', employeeController.update.bind(employeeController));
router.delete('/employees/:id', employeeController.delete.bind(employeeController));
router.get('/employees/search/:name', employeeController.search.bind(employeeController));
router.get('/employees/status/:active', employeeController.active.bind(employeeController));
router.get('/employees/status/:inactive', employeeController.inactive.bind(employeeController));
router.get('/employees/status/:terminated', employeeController.terminated.bind(employeeController));

// export router
module.exports = router;
