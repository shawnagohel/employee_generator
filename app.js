const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const engList = [];
const internList = [];
const fs = require('fs');
let manager;

//get engineer info from user
const getEngineerInfo = () => {
    return inquirer.prompt([{
          name: 'engName',
          message: 'What is the employee\'s name?(required)',
          validate: function validTitle(text){
            if(text==="" || text===" "){
                return "Please enter a  valid name";
            }
            return true;
       }
    },
    {
          type: 'number',
          name: 'engId',
          message: 'What\'s the engineer\'s employee id?(required)',
          default: 0
    },
    {
          name: 'engEmail',
          message: 'What is the engineer\'s email id?(required)',
          validate: function validEmail(text){
            if(text==="" || text===" " || !text.includes('@')){
                return "Please give a valid email address"
            }
            return true;
        }
    },
    {
          name: 'engGithub',
          message: 'What is the engineer\'s github username?(required)',
          validate: function validTitle(text){
            if(text==="" || text===" "){
                return "Please enter a  valid github username";
            }
            return true;
       }
    }
]).then(answers => {
    const engineer =  new Engineer(answers.engName,answers.engId,answers.engEmail,answers.engGithub);
    engList.push(engineer);
    console.log(engList);
    confirmGetInfo();
})
}

//get intern info from user
const getInternInfo = () => {
    return inquirer.prompt([{
         name: 'internName',
         message: 'What is the intern\'s name(required)',
         validate: function validTitle(text){
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
        name: 'internSchool',
        message: 'What is the name of the intern\'s school?(required)',
        validate: function validTitle(text){
            if(text==="" || text===" "){
                return "Please enter a  valid school name";
            }
            return true;
       }
     }
]).then(answers => {
    const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool);
    internList.push(intern);
    console.log(internList);
    confirmGetInfo();
})
}

//get role - engineer, intern or done building the team
const confirmGetInfo = () => {
    
    return inquirer.prompt({
        type: 'list',
        name: 'empRole',
        choices: ['Engineer','Intern','Done building team'],
        message: 'Please select employee role or select done building the team'
    }).then(answers => {
        
        if (answers.empRole === 'Done building team'){
              
              const templateData = {
                  'manager' : manager,
                  'engineer' : engList,
                  'intern': internList
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
            getInternInfo();
           
        }
    })
}

//Get manager info
const promptUser = () => {
    return inquirer.prompt([{
        name: 'mgrName',
        message: 'What is the team manager\'s name?(required)',
        validate: function validTitle(text){
            if(text==="" || text===" "){
                return "Please enter a  valid name";
            }
            return true;
       }

    },
    {
        type: 'number',
        name: 'empId',
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
        name: 'mgrOffNumber',
        message: 'What\'s the manager\'s office number?(required)',
        default: 0000
    }]).then(answers => {
        manager = new Manager(answers.mgrName,answers.empId,answers.email,answers.mgrOffNumber);
        console.log(manager);
        return manager;
    })
}

//calling functions
promptUser().then(data => {
     confirmGetInfo().then(templateData => {
      
     });
     
})