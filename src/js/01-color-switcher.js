const ref = {
	body: document.querySelector('body'),
   btnStart: document.querySelector('button[data-start]'),
	btnStop: document.querySelector('button[data-stop]'),
};

const DELAY_TIME = 1000;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 };







/*Это старый код где выдает ошибку 

01-color-switcher.js:15 Uncaught ReferenceError: timerId is not defined

at HTMLButtonElement.<anonymous> (01-color-switcher.js:15:4) */

  ref.btnStart.addEventListener('click',() => {
    const timerId = setInterval(() => {
    const color = getRandomHexColor();
    ref.body.style.backgroundColor = color;
    ref.btnStart.setAttribute("disabled", "disabled")

	},DELAY_TIME)


  })



   ref.btnStop.addEventListener('click',() =>{
      clearInterval(timerId);
      ref.btnStart.removeAttribute("disabled");
		ref.body.style.backgroundColor = '';
	})












