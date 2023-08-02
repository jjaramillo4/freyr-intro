
//finding a tag called container using querySelector
const container = document.querySelector('#container');
//creating a variable called content that stores a tag called div
const content = document.createElement('div');
content.classList.add('content');//adding a classlist to content variable
content.textContent = 'This is the glorious text-content!';//adding text to the content variable

container.appendChild(content);//appending the content variable to container tag in DOM

const paragraph = document.createElement('p');
paragraph.textContent = 'Hey I\'m red!';
paragraph.style.color ='red';

container.appendChild(paragraph);

const header =document.createElement('h3');
header.textContent = 'I\'m a blue h3';
header.style.color = 'blue';

container.appendChild(header);

const div = document.createElement('div');
div.style.cssText ='border: black; background: pink;';
div.setAttribute('style','border: black; background: pink;');
const divHeader=document.createElement('h1');
divHeader.textContent ='I\'m a div';
div.appendChild(divHeader);
const divParagraph=document.createElement('p');
divParagraph.textContent ='ME TOO!'
div.appendChild(divParagraph);

container.appendChild(div);

const btn=document.querySelector('#btn');
btn.onclick=()=>alert("Hello World");

const bth = document.querySelector('#bth');
bth.addEventListener('click',() =>{
    alert("Hello World");
});