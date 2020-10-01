const Employee = require('./Employee');

//Intern class - inheriting from Employee class
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id , email);
        this.school = school;
    }

    //get the name of the school
    getSchool(){
    
       return this.school;  
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;