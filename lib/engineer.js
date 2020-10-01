const Employee = require('./Employee');

//engineer class inherting from Employee class
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id , email);
        this.github = github;
    }

    //get engineer's github username
    getGithub(){
    
       return this.github;  
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;