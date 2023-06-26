const ref = {
	body: document.querySelector('body'),
   btnStart: document.querySelector('button[data-start]'),
	btnStop: document.querySelector('button[data-stop]'),
};

const DELAY_TIME = 1000;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 };


  ref.btnStart.addEventListener('click',() => {
   timerId = setInterval(() => {
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











