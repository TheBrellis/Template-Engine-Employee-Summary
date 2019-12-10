const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const htmlBlocks = require("./lib/htmlBlocks.js")

const team = [];
team.push(htmlBlocks.header());

  /*
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

  initalize(role)
  let answers1 = inquirer.prompt();
  let answer2 = inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"What type of team member would you like to add?",
      choices: ["Engineer","Intern","I don't want to add any more team members"]
    }
    ]);
    */
function initalize(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your manager's name?`
    },
    {
      type: "input",
      name: "id",
      message: `What is your manager's ID?`
    },
    {
      type: "input",
      name: "email",
      message: `What is your manager's email?`
    },
    {
      type: "input",
      name: "officeNumber",
      message: `What is your manager's office number?`
    }
  ])
}
function nextMember(){
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"What type of team member would you like to add?",
      choices: ["Engineer","Intern","I don't want to add any more team members"]
    }
}
/* ==========================================================*/
//START OF APP SEQUENCE 
/* ==========================================================*/
initalize()
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
  team.push(manager.getHTML());
  
})

