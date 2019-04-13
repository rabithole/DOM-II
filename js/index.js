// Your code goes here
/*	Events used...
*** 	mouseover
*** 	mouseleave
***		dblclick
***		keydown
***		scroll
***		
*/

// Welcome to the fun bus!
const welcomeFunBus = document.querySelector('.intro h2')
welcomeFunBus.addEventListener('mouseover', function() {
	welcomeFunBus.style.fontWeight = 'bold';
	welcomeFunBus.style.color = 'red'
})
welcomeFunBus.addEventListener('mouseleave', function() {
	welcomeFunBus.style.fontWeight = 'initial';
	welcomeFunBus.style.color = 'initial'
})

// Fun bus picture to adventure
const funBusPic = document.querySelector('.intro img')
funBusPic.addEventListener('dblclick', function() {
	funBusPic.src = 'img/destination.jpg'
	funBusPic.style.width = '100%'
})
funBusPic.addEventListener('mouseleave', function() {
	funBusPic.src = 'img/fun-bus.jpg'
})



//////////	Pop up h1 square. 
const beforeElement = document.querySelector('.intro')

const newElement = document.createElement('h1');
newElement.className = 'popUp toggle';
beforeElement.prepend(newElement) 

funBusPic.addEventListener('mouseover', function() { 
	newElement.textContent = 'Double Click The Image';
	newElement.classList.toggle('toggle')
})

funBusPic.addEventListener('mouseleave', function(event) { 
	newElement.classList.toggle('toggle')	
})
//////////	Pop up h1 square. 

const body = document.querySelector('body');
body.addEventListener('keydown', function(event) {
	if(event.keyCode === 13 || event.keyCode === 27){
		// alert("Don't push that!");
		newElement.textContent = ("Don't push that!")
		newElement.classList.toggle('toggle')
	}
})

const head = document.querySelector('header');
const headH1 = document.querySelector('header h1')
const navA = document.querySelectorAll('nav a')

// const navA = document.getElementsByTagName('a');
// const navA = document.querySelectorAll('nav a')
console.log(navA)
let counterScroll = 0;
window.addEventListener('scroll', function() {
	counterScroll++
	if(counterScroll > 20){
		head.style.height = '20px'
		headH1.style.fontSize = '1.5em'	
		
		for(let i = 0; i < navA.length; i++){
			navA[i].style.fontSize = '1em'
		}
	}
})