const inquirer = require('inquirer');
const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const generatePage = require('./src/generatePage');
const engProfile = [];
const internProfile = [];
const fs = require('fs');
let manager;

//function to get the engineer's information
const getEngineerInfo = () => {
    return inquirer.prompt([{
          name: 'engName',
          message: 'Please enter the employee\'s name?(required)',
          validate: function validateTitle(text){
            if(text==="" || text===" "){
                return "Please enter a valid employee name";
            }
            return true;
       }
    },
    {
          type: 'number',
          name: 'engId',
          message: 'Please enter the engineer\'s employee id?(required)',
          default: 0
    },
    {
          name: 'engEmail',
          message: 'Please enter the engineer\'s email id?(required)',
          validate: function validEmail(text){
            if(text==="" || text===" " || !text.includes('@')){
                return "Please enter a valid email address"
            }
            return true;
        }
    },
    {
          name: 'engGithub',
          message: 'Please enter the engineer\'s github username?(required)',
          validate: function validateTitle(text){
            if(text==="" || text===" "){
                return "Please enter a valid github username";
            }
            return true;
       }
    }
]).then(answers => {
    const engineer =  new Engineer(answers.engName,answers.engId,answers.engEmail,answers.engGithub);
    engProfile.push(engineer);
    console.log(engProfile);
    confirmGetData();
})
}

//function to receive the intern's info
const getInternData = () => {
    return inquirer.prompt([{
         name: 'internName',
         message: 'What is the intern\'s name(required)',
         validate: function validateTitle(text){
            if(text==="" || text===" "){
                return "Please enter a  valid name";
            }
            return true;
       }
    },
    {
        type: 'number',
        name: 'internId',
        message: 'What is the intern\'s id(required)',
        default: 0
    },
    {
        name: 'internEmail',
        message: 'what is the intern\'s email id?(required)',
        validate: function validEmail(text){
            if(text==="" || text===" " || !text.includes('@')){
                return "Please give a valid email address"
            }
            return true;
        }

    },
    {
        name: 'internCollege',
        message: 'Please enter the intern\'s current college?(required)',
        validate: function validateTitle(text){
            if(text==="" || text===" "){
                return "Please enter a valid college name";
            }
            return true;
       }
     }
]).then(answers => {
    const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internCollege);
    internProfile.push(intern);
    console.log(internProfile);
    confirmGetData();
})
}

//function to input roles or team is complete
const confirmGetData = () => {
    
    return inquirer.prompt({
        type: 'list',
        name: 'empRole',
        choices: ['Engineer','Intern','Done building team'],
        message: 'Please select employee role or select done building the team'
    }).then(answers => {
        
        if (answers.empRole === 'Done building team'){
              
              const templateData = {
                  'manager' : manager,
                  'engineer' : engProfile,
                  'intern': internProfile
              };
              let data = generatePage(templateData);
              
              fs.writeFile('./dist/index.html',data,err => {
                  if(err) throw err;
              })
        }
        else if(answers.empRole === 'Engineer'){
            getEngineerInfo();
            
        }
        else{
            getInternData();
           
        }
    })
}

//Function to get Manager's info
const userData = () => {
    return inquirer.prompt([{
        name: 'managerName',
        message: 'What is the team manager\'s name?(required)',
        validate: function validateTitle(text){
            if(text==="" || text===" "){
                return "Please enter a valid name";
            }
            return true;
       }

    },
    {
        type: 'number',
        name: 'employeeId',
        message: ' What\'s the manager\'s employee id?(required)',
        default: 0

    },
    {
        name: 'email',
        message: 'What\'s the manager\'s email id?(required)',
        validate: function validEmail(text){
            if(text==="" || text===" " || !text.includes('@')){
                return "Please give a valid email address"
            }
            return true;
        }

    },
    {
        type: 'number',
        name: 'managerPhone',
        message: 'What\'s the manager\'s phone number?(required)',
        default: 0000
    }]).then(answers => {
        manager = new Manager(answers.managerName,answers.employeeId,answers.email,answers.managerPhone);
        console.log(manager);
        return manager;
    })
}

//function to call the answers
userData().then(data => {
     confirmGetData().then(templateData => {
      
     });
     
})