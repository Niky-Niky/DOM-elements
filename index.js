// QUERY SELECTORS

const navEl = document.querySelector('.site__nav');
console.log(navEl)
const tazEl = document.querySelector('.dumb-taz');
console.log(tazEl)
tazEl.src = 'Looney.png'
tazEl.alt = 'Hello, you seem to be dumb (sometimes)'
console.log(tazEl.alt);
console.log(tazEl.getAttribute('src'))

// CHANGE PROPS
const heroTitleEl = document.querySelector('.hero__title');
console.log(heroTitleEl);
console.log(heroTitleEl.textContent = 'Hi, blunty');
heroTitleEl.style.color = 'gray';
heroTitleEl.style.backgroundColor = 'silver'

// CREATING FORM
const inputEl = document.querySelector('.js-input');
console.log(inputEl.value);

const btnEl = document.querySelector('.form_btn');

btnEl.addEventListener('click', ()=>{
    console.log(inputEl.value); 
})

// CLASSLIST
const pEl = document.querySelector('.hero__p');
pEl.classList.add('p-js');
console.log(pEl.classList.contains('p-js'));
console.log(pEl);

// ELEM.SOMETHING
console.log(navEl.lastElementChild);

