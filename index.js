// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template');


 const prompts =  [
        {
            type: "input",
            message: "What is your project title?",
            name: "title",
            validate: (value)=>{if(value){return true}else{return "need a value to continue!"}}
        },
        {
            type: "input",
            message: "how do you install your app?",
            name: "installation",
            validate: (value)=>{if(value){return true}else{return "need a value to continue!"}}
        },
        {
            type: "input",
            message: "provide your project's description: ",
            name: "description",
            validate: (value)=>{if(value){return true}else{return "need a value to continue!"}}
        },
        {
            type: "input",
            message: "how do you use your app?",
            name: "usage",
            validate: (value)=>{if(value){return true}else{return "need a value to continue!"}}
        },
        {
            type: "list",
            message: "what is your project licence or your badge link",
            name: "license",
            choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0',
    'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0',
'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family',
'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0',
'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License'],
            validate: (value)=>{if(value){return true}else{return "need a value to continue!"}}
        },
        {
            type: "input",
            message: "GitHub username: ",
            name: "git",
            validate: (value)=>{if(value){return true}else{return "need a value to continue!"}}
        },
        {
            type: "input",
            message: "E-mail: ",
            name: "email",
            validate: (value)=>{if(value){return true}else{return "need a value to continue!"}}
        }
    ];


function writeFile(filleName, data){
    fs.writeFile(filleName, data, (err)=>{
        if(err)
        throw err;
        console.log('Your README has been generated');
    });
};

function init(){
    inquirer.prompt(prompts).then(function(userInput){
        console.log(userInput)
        writeFile('Readme.md', template(userInput));
    });
};

init();