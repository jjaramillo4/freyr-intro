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