const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");


const team = [];

async function initalize(role){
  let answers1 = inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your ${role}'s name?`
    },
    {
      type: "input",
      name: "id",
      message: `What is your ${role}'s ID?`
    },
    {
      type: "input",
      name: "email",
      message: `What is your ${role}'s email?`
    },
    {
      type: "list",
      name: "role",
      message:"What type of team member would you like to add?",
      choices: ["Engineer","Intern","I don't want to add any more team members"]
    }
  ]);

//let answers3 = {...answer1, ...answer2}
//team.push(answers3)
};

function addMember(role){
  if (role === "Engineer"){
    let answers2 = inquirer.prompt([
      {
        type: "input",
        name: "gitHub",
        message: `What is your engineer's GitHub?`
      }
    ])
    return answers2
  }
  if (role === "Intern"){
    let answers2 = inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: `What is your intern's school?`
    }
  ]) 
  }
  return
}

/* ==========================================================*/
//START OF APP SEQUENCE 
/* ==========================================================*/
console.log("Please build your team");s
initalize("manager");

