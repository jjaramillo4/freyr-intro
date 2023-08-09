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

userName=event.target.usersName; 
userEmail=event.target.usersEmail;
userMessage=event.target.usersMessage;   
console.log(userName);
console.log(userEmail);
console.log(userMessage);
event.preventDefault();

const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');


newMessage.innerHTML = `<a href=mailto:${userEmail.value}>${userName.value}</a>`+" wrote: "+`<span>${userMessage.value}</span>`;

removeButton = document.createElement('button');
removeButton.textContent = "Remove";
removeButton.type = "button";
removeButton.addEventListener('click',() => {
const entry=removeButton.parentNode; 
entry.remove();

});

newMessage.appendChild(removeButton); 
messageList.appendChild(newMessage);
messageSection.appendChild(messageList);

messageForm.reset();
});