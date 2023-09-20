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
    skill.classList.add("skill-list");
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




fetch("https://api.github.com/users/jjaramillo4/repos")
    .then(function(response){
        if(!response.ok){
            new Error("Error: "+ `${response.status} ${response.statusText}`);
            
        }
        let repositories=response.json();
        console.log(repositories);
        return repositories;
    })
    .then(function(repositories){
        let projectSection = document.getElementById("projects");
        projectList = projectSection.querySelector('ul');

        for(i = 0; i < repositories.length; i++){
            let project = document.createElement('li');
            let projectLink = document.createElement('a');
            var projectName = document.createTextNode(repositories[i].name);
            projectLink.target="_blank"
            projectLink.appendChild(projectName);
            projectLink.href = repositories[i].html_url;
            console.log(projectLink);
            project.append(projectLink);
            projectList.appendChild(project);
        }
    })
    .catch(error => {
    console.error(error);
    });

