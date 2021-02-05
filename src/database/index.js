import { Sequelize } from 'sequelize';

import { databaseConfig } from '../config';
import { 
  Employee,
  Office,
  EmployeeOffice
} from '../models';

const models = [
  Employee, 
  Office,
  EmployeeOffice
];

class Database {
  constructor() {
    this.init();
    this.associate();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    this.connection.authenticate().then(() => {
      console.log(`Connection successfully with ${process.env.DB_DIALECT} on port ${process.env.DB_PORT}`);
    });

    models.map(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
