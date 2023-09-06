let today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = 'Javier Jaramillo ' + thisYear;
footer.appendChild(copyright);

const skills = ["Recruiting","Cold Calling","HR","Sourcing","Javascript","HTML","SQL","Data Analysis"];

skillsSection = document.querySelector('#skills');
skillsList = skillsSection.querySelector('ul');

for(i of skills){
    const skill=document.createElement('li');
    skill.innerHTML = i;
    skillsList.appendChild(skill);
}

const messageForm = document.getElementById('leave_message');

messageForm.addEventListener('submit',(event) => {
event.preventDefault();
let userName=event.target.usersName.value; 
let userEmail=event.target.usersEmail.value;
let userMessage=event.target.usersMessage.value;

 
console.log(userName);
console.log(userEmail);
console.log(userMessage);


const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
newMessage.setAttribute("class","msg");


newMessage.innerHTML = `<a href=mailto:${userEmail}>${userName}</a> wrote: <span>${userMessage}</span>`;

removeButton = document.createElement('button');
removeButton.textContent = "Remove";
removeButton.type = "button";
removeButton.addEventListener('click',() => {
newMessage.remove();

});

newMessage.appendChild(removeButton); 
messageList.appendChild(newMessage);
messageSection.appendChild(messageList);

messageForm.reset();
});

let githubRequest = new XMLHttpRequest();

githubRequest.open("GET","https://api.github.com/users/jjaramillo4/repos");
githubRequest.send();

//I could not get the project with this code because it told me that load was undefined. 
//I would like to know how to make it work this way.

//githubRequest.addEventListener("load", (event)=>{
//   let repositories=JSON.parse(this.response);
//  console.log(respositories); 
//})
githubRequest.onload =function(){
 let repositories=JSON.parse(this.response);
 console.log(repositories);
 let projectSection = document.getElementById("projects");
projectList = projectSection.querySelector('ul');

for(i = 0; i < repositories.length; i++){
    let project = document.createElement('li');
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
}

}

