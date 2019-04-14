// Your code goes here
/*	Events used...
*** 1	mouseover
*** 2	mouseleave
***	3	dblclick
***	4	keydown
***	5	scroll
***	6	keybup
*** 7	load
***	8	click
*** 9	resized
***	10	mouseup	
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
		newElement.textContent = "Don't push that!"
		newElement.classList.toggle('toggle')
	}
})

const head = document.querySelector('header');
const headH1 = document.querySelector('header h1')
const navA = document.querySelectorAll('nav a')

// navA.addEventListener('click', function(event){
// 	event.preventDefault();
// })

window.addEventListener('scroll', function() {	
	if(scrollY > 80){
		head.style.height = '20px'
		headH1.style.fontSize = '1.5em'	
		
		for(let i = 0; i < navA.length; i++){
			navA[i].style.fontSize = '1em'
		}
	}
	if(scrollY < 81){
		head.style.height = '90px'
		headH1.style.fontSize = '4rem'
		
		for(let i = 0; i < navA.length; i++){
			navA[i].style.fontSize = '1.6em'
		}	
	}
})

body.addEventListener('keyup', function(event){
	if(event.keyCode === 32){
		// newElement.textContent = "You pushed the space bar!"
		// newElement.classList.toggle('toggle')
		alert('You let the space bar up!')
		console.log('yes')
	}
})

window.addEventListener('load', function(event){
	body.style.backgroundColor = '#000080';
	head.style.backgroundColor = '#663399';
	setTimeout(function() {
		body.style.backgroundColor = 'lightgrey';
		head.style.backgroundColor = 'lightblue'		
	}, 2000);
})

const buttonBottomPage = document.querySelector('.btn')
console.log(buttonBottomPage)

buttonBottomPage.addEventListener('click', function(){
	console.log(buttonBottomPage)
	newElement.style.top = '1600px'
	newElement.textContent = "You'll just get burned, stay home!";
	newElement.classList.toggle('toggle')
	setTimeout(function(){
		newElement.style.top = '400px';
		newElement.classList.toggle('toggle')
	}, 3000);
})

let resized = 0;
window.addEventListener('resize', function(){
	if(resized < 1){
		console.log('resized')	
		body.style.backgroundColor = 'red'	
		setTimeout(function(){
			body.style.backgroundColor = 'lightgrey'
		}, 2000)
	}
	resized++

	setTimeout(function(){
		resized = 0;
		console.log(resized)
	}, 6000);
})

const mapImage = document.querySelector('.img-content');

mapImage.addEventListener('mouseup', function(){
	console.log('moused up')
})

