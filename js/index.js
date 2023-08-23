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