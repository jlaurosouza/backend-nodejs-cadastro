import Sequelize, { Model } from 'sequelize';
import EmployeeOffice from './EmployeeOffice';
import Office from './Office';

class Employee extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
        date_of_birth: Sequelize.DATE,
        salary: Sequelize.FLOAT,
      },
      {
        sequelize: connection,
        paranoid: true,
        timestamps: true,
        name: {
          singular: 'employee',
          plural: 'employees',
        },
        defaultScope: {
          order: [['id', 'DESC']],
        },
      },
    );
    return this;
  }

  static associate() {
    this.belongsToMany(Office, { through: EmployeeOffice, foreignKey: 'employeeId', otherKey: 'officeId' });
  }
}

export default Employee;
