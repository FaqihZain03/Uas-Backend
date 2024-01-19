// import database
const db = require("../config/database");


class Employee {
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM Employee";
            db.query(sql, (sql, results) => {
                resolve(results);
            });
        });
    }

    /**
  * TODO 1: Buat fungsi untuk insert data.
  * Method menerima parameter data yang akan diinsert.
  * Method mengembalikan data Employee yang baru diinsert.
  */

    // promise 1
    static async create(Employee) {
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO Employee SET ?";
            db.query(sql, Employee, (err, results) => {
                resolve(results.insertId);
            });
        });


        // promise 2
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM Employee WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }


    static find(id) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM Employee WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE Employee SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // select data by id
        const Employee = await this.find(id);
        return Employee;
    }

    static async delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            // query sql
            const sql = "DELETE FROM Employee WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }
     static init() {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        position: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        statusId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        // ... kolom lainnya ...
      },
      {
        tableName: 'employees',
      }
    );
    }

    static associate(models) {
      // Menetapkan relasi dengan model Status
      this.belongsTo(models.Status, { foreignKey: 'statusId' });
    }
  
    static async findByStatus(statusName) {
      try {
        const employees = await this.findAll({
          include: [
            {
              model: this.sequelize.models.Status,
              where: { name: statusName },
            },
          ],
        });
        return employees;
      } catch (error) {
        throw error;
      }
    }
  }


// export model
module.exports = Employee;