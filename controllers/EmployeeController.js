// controllers/EmployeeController.js
const Employee = require('../models/Employee');
const BaseController = require('./BaseController');

class EmployeeController extends BaseController {
  constructor() {
    super(Employee);
  }

  
    async index(req, res) {
        // TODO 4: Tampilkan data Employees
        const Employees = await Employee.all();

        const data = {
            message: "Menampilkan data Employee",
            data: Employees
        };

        res.status(200).json(data);
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */

        const Employees = await Employee.create(req.body);
        const data = {
            message: "Menambahkan data Employee",
            data: Employees,
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        /**
         * check id Employees
         * jika ada, lakukan update
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const Employees = await Employee.find(id);

        if (Employees) {
            // update data
            const EmployeeUpdated = await Employee.update(id, req.body);
            const data = {
                message: "Mengupdate data Employee",
                data: EmployeeUpdated,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const Employee = await Employee.find(id);

        if (Employee) {
            // hapus data
            await Employee.delete(id);
            const data = {
                message: "Menghapus data Employee",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const Employee = await Employee.find(id);

        if (Employee) {
            const data = {
                message: "Menampilkan detail data Employee",
                data: Employee,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }

  async search(req, res) {
      const { name } = req.query;
      try {
        if (!name) {
          return res.status(200).json({ message: 'Get Searched Resource' });
        }
  
        const results = await this.model.search({
          where: {
            name: {
              [Op.like]: `%${name}%`,
            },
          },
        });
  
        res.json(results);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }

    async Active(req, res) {
      try {
        const activeEmployees = await Employee.findByStatus('Active');
        res.json(activeEmployees);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async inactive(req, res) {
      try {
        const inactiveEmployees = await Employee.findByStatus('Inactive');
        res.json(inactiveEmployees);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async terminated(req, res) {
      try {
        const terminatedEmployees = await Employee.findByStatus('Terminated');
        res.json(terminatedEmployees);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
}

const object = new EmployeeController();
module.exports = object;

