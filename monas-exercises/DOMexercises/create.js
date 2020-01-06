// console.log('it works');

const myParagraph = document.createElement('p');

myParagraph.textContent ='I am monas P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/250';
myImage.alt = 'Monas Photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

 
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Monas heading';

myDiv.insertAdjacentElement('afterbegin',heading);

