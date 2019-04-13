// Your code goes here
const welcomeFunBus = document.querySelector('.intro h2')
welcomeFunBus.addEventListener('mouseover', function() {
	welcomeFunBus.style.fontWeight = 'bold';
	welcomeFunBus.style.color = 'red'
})
welcomeFunBus.addEventListener('mouseleave', function() {
	welcomeFunBus.style.fontWeight = 'initial';
	welcomeFunBus.style.color = 'initial'
})

console.log(welcomeFunBus)