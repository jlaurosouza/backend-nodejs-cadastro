import { Employee, Office, EmployeeOffice } from '../models';

class EmployeeController {
  async index(req, res) {   
    try {      
      const employees = await Employee.findAll({
        attributes: ['id', 'name', 'surname', 'date_of_birth', 'salary'],
        include: [
          {
            model: Office,
            attributes: ['id', 'description'],
            through: { attributes: [] },
          },
        ],
      });

      return res.status(200).json({ data: employees });
    } catch (e) {            
      return res.json({ 
        status: 400,
        message: 'Não foi possível listar os funcionários.' 
      });
      
    }
  }

  async show(req, res) {   
    try {      
      const employees = await Employee.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'name', 'surname', 'date_of_birth', 'salary'],
        include: [
          {
            model: Office,
            attributes: ['id', 'description'],
            through: { attributes: [] },
          },
        ],
      });

      return res.status(200).json({ data: employees });
    } catch (e) {            
      return res.json({ 
        status: 400,
        message: 'Não foi possível listar os funcionários.' 
      });
      
    }
  }

  async store(req, res) {
    const {
      body: { name, surname, date_of_birth, salary, office },
    } = req;
    
    let newSalary = salary;
    newSalary = newSalary.replace(/([^\d])+/gim, '');
    
    let objEmployee;        
    let objOffice;
    let employeeId;
    let officeId;
    try {
      try {
        objEmployee = await Employee.create(
          {
            name, surname, date_of_birth, salary: newSalary,
          },          
        );
        employeeId = objEmployee.id;

        try{
          objOffice = await Office.findOne({where: { description: office }});
          if(objOffice){
            officeId = objOffice.id;            
          }else{
            objOffice = await Office.create(
              {
                description: office
              }
            )
            officeId = objOffice.id;
          }
          await EmployeeOffice.create(
            {
              employeeId,
              officeId
            }
          )
          
        } catch (e) {
          return res.status(400).json({
            message: 'Não foi possível registrar os dados do funcionário.',
            data: e,
          });
        }
        
        objEmployee = await Employee.findOne({where: { id: employeeId }});

        return res.status(200).json({ 
          data: objEmployee, 
          message: 'Funcionário registrado com sucesso.' 
        
        });
      } catch (e) {
        return res.status(400).json({
          message: 'Não foi possível registrar os dados do funcionário.',
          data: e,
        });
      }
    } catch (e) {
      return res.status(400).json({ message: 'Não foi possível registrar os seus dados', data: e });
    }
  }
  async update(req, res) {
    let {
      body: { name, surname, date_of_birth, salary, office },
    } = req;    

    let newSalary = salary;
    newSalary = newSalary.replace(/([^\d])+/gim, '');
        
    const { params: { id } } = req;
    
    let objOffice;    
    let officeId;
    try {
      try {
        await Employee.update(
          {
            name, surname, date_of_birth, salary: newSalary,
          },
          { where: { id } },     
        );        

        try{          
          objOffice = await Office.findOne({where: { description: office }});
          if(objOffice){
            officeId = objOffice.id;            
          }else{
            objOffice = await Office.create(
              {
                description: office
              }
            )
            officeId = objOffice.id;
          }
          await EmployeeOffice.update(
            {              
              officeId
            },
            { where: { employeeId: id } },
          )
          
        } catch (e) {                    
          return res.status(400).json({
            message: 'Não foi possível atualizar os dados do funcionário.',
            data: e,
          });
        }
        
        return res.status(200).json({ 
          message: 'Funcionário atualizado com sucesso.' 
        });
      } catch (e) {        
        return res.status(400).json({
          message: 'Não foi possível atualizar os dados do funcionário.',
          data: e,
        });
      }
    } catch (e) {      
      return res.status(400).json({ message: 'Não foi possível alterar os seus dados', data: e });
    }
  }

  async delete(req, res) {
    const { params: { id } } = req;
    
    try {
      try {
        await Employee.destroy(
          { where: { id } },     
        );        

        try{          
          await EmployeeOffice.destroy(
            { where: { employeeId: id } },
          )
          
        } catch (e) {
          return res.status(400).json({
            message: 'Não foi possível delete o funcionário informado.',
            data: e,
          });
        }
        
        return res.status(200).json({ message: 'Funcionário deletado com sucesso.' });
      } catch (e) {
        return res.status(400).json({
          message: 'Não foi possível delete o funcionário informado.',
          data: e,
        });
      }
    } catch (e) {
      return res.status(400).json({ message: 'Não foi possível delete o funcionário informado.', data: e });
    }
  }
}

export default new EmployeeController();
