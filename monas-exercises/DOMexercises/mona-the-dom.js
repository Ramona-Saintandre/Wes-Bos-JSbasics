// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div.item');
// const imgs = document.querySelectorAll('.itme img');
// const item2 = document.querySelector('item');
// // const item2Image = item2.querySelectorAll('img');
// const heading = document.querySelector('h2');

// // .dir is really good to find out information about your selectors 

// console.log(heading.textContent);
// heading.textContent = 'Mona is cool';
// console.log(heading.innerText);


// // query.Selector and Selector all takes one arguement, it is the CSS selector 

// const pizzaList = document.querySelector('pizza');

// console.log (pizzaList.textContent);

// pizzaList.insertAdjacentText('afterbegin', '🍕');
// *strict*

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('big');
// pic.classList.add('round');
pic.classList.toggle('round');

function toggleRound(){
    pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

console.log(pic.classList);
