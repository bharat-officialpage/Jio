let hamburger = document.querySelector('#bar');
let sidenav = document.querySelector('.aside');
let inputsearch = document.querySelector('.inputsearch');

hamburger.onclick = () => {
    hamburger.classList.toggle('fa-xmark');
    sidenav.classList.toggle('active');
}


document.querySelector('#Input1').onclick = () =>{
    inputsearch.classList.toggle('active');
}
document.querySelector('#glass').onclick = () =>{
    inputsearch.classList.toggle('active');
}
document.querySelector('.fa-chevron-left').onclick = () =>{
    inputsearch.classList.remove('active');
}
document.querySelector('.backg').onclick = () =>{
    inputsearch.classList.remove('active');
}

$(document).ready(function () {
    $('.h3').click(function () {
        $(this).next('.tooglecont').toggle();
    });
})




const tabItems = document.querySelectorAll('.jiobtn');
const tabContentItems = document.querySelectorAll('.tabcontent');

function selectItem(e) {
	removeBorder();
	removeShow();
	this.classList.add('active');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('active');
	});
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});