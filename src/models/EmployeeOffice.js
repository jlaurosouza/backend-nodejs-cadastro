import Sequelize, { Model } from 'sequelize';

class EmployeeOffice extends Model {
  static init(connection) {
    super.init(
      {
        employeeId: Sequelize.INTEGER,
        officeId: Sequelize.INTEGER,
      },
      {
        sequelize: connection,
        paranoid: true,
        timestamps: true,
        name: {
          singular: 'employeeOffice',
          plural: 'employeeOffices',
        },
        defaultScope: {
          order: [['id', 'ASC']],
        },
      },
    );
    return this;
  }
}

export default EmployeeOffice;
