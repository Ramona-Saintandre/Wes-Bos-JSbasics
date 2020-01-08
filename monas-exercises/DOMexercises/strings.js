console.log('it works');

const width = 500;
const item = document.querySelector('.item');
const desc = `Cute Pup`;
const src = `https://picsum.photos/${width}`;
const myHTML = `<div class='wrapper'><h2>${desc}</h2>
<img src="${src}" alt="${desc}"/>
</div>  
`;  

//turn a string into a DOM element

const myFragment = document.createRange()
.createContextualFragment(myHTML);

document.body.appendChild(myFragment);


console.log(myFragment);