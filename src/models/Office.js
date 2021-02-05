import Sequelize, { Model } from 'sequelize';
import Employee from './Employee';
import EmployeeOffice from './EmployeeOffice';

class Office extends Model {
  static init(connection) {
    super.init(
      {        
        description: Sequelize.STRING,
      },
      {
        sequelize: connection,
        paranoid: true,
        timestamps: true,
        name: {
          singular: 'office',
          plural: 'offices',
        },
        defaultScope: {
          order: [['id', 'ASC']],
        },
      },
    );
    return this;
  }
  
  static associate() {
    this.belongsToMany(Employee, { through: EmployeeOffice });
  }
}

export default Office;
