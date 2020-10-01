//employee class
class Employee{
    //constructor function
    constructor(name, id, email){
        this.name = name;
        this.email = email;
        this.id = id;
    }

   //get the name of the employee
   getName(){
       return this.name;
   }
 
   //get the  employee id
   getId(){
       return this.id;
  }

  //get the employee email
  getEmail(){
      return this.email;
  }

  //get the eemployee role
  getRole(){
     return 'Employee'
 }
}

module.exports = Employee;