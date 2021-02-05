import { check, Result } from 'express-validator';

import { Employee } from '../models';

const registerValidator = {
    postRules: [
      check('name')
        .exists()
        .withMessage('Informe o nome do funcionário.'),
      check('surname')
        .exists()
        .withMessage('Informe o sobrenome do funcionário.'),
      check('date_of_birth')
        .exists()
        .withMessage('Informe a data de aniversário do funcionário.')
        .isDate()
        .withMessage('Informe uma data de aniversário válida.'),
      check('salary')
        .exists()
        .withMessage('Informe o salário do funcionário.'),         
      check('office')
        .exists()
        .withMessage('Informe o cargo do funcionário.'),  
    ],
    putRules: [
      check('id')
        .exists()
        .withMessage('Informe o funcionário que deseja atualizar.')
        .custom(id => {
          return new Promise((resolve, reject) => {
            Employee.count({ where: { id } })
              .then(exists => {
                if (exists) {
                  resolve();
                } else {
                  reject();
                }
              })
              .catch(() => {
                reject();
              });
          });
        })
        .withMessage('Funcionário informado não foi encontrado em nossa base de dados.'),      
      check('name')
        .exists()
        .withMessage('Informe o nome do funcionário.'),
      check('surname')
        .exists()
        .withMessage('Informe o sobrenome do funcionário.'),
      check('date_of_birth')
        .exists()
        .withMessage('Informe a data de aniversário do funcionário.')
        .isDate()
        .withMessage('Informe uma data de aniversário válida.'),
      check('salary')
        .exists()        
        .withMessage('Informe o salário do funcionário.'),     
      check('office')
        .exists()
        .withMessage('Informe o cargo do funcionário.'),  
    ],
    deleteRules: [
      check('id')
        .exists()
        .withMessage('Informe o funcionário que deseja atualizar.')
        .custom(id => {
          return new Promise((resolve, reject) => {
            Employee.count({ where: { id } })
              .then(exists => {
                if (exists) {
                  resolve();
                } else {
                  reject();
                }
              })
              .catch(() => {
                reject();
              });
          });
        })
        .withMessage('Funcionário informado não foi encontrado em nossa base de dados.'),  
    ],
  };
  
  export default registerValidator;
  