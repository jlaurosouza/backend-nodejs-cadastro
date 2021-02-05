import { Router } from 'express';

import {
  EmployeeController  
} from '../controllers';

import {
  employeeValidator,
} from '../validators';

import { ValidatorHelper } from '../helpers';

const appRoutes = new Router();

appRoutes.get('/employees', EmployeeController.index);
appRoutes.get('/employees/:id', EmployeeController.show);
appRoutes.post('/employees', employeeValidator.postRules, ValidatorHelper.check, EmployeeController.store);
appRoutes.put('/employees/:id', employeeValidator.putRules, ValidatorHelper.check, EmployeeController.update);
appRoutes.delete('/employees/:id', employeeValidator.deleteRules, ValidatorHelper.check, EmployeeController.delete);

export default appRoutes;
