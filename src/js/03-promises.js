import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ссылки на элементы 

const form = document.querySelector('.form');

const refs = {
  delayInput: form.querySelector('input[name="delay"]'),
  stepInput: form.querySelector('input[name="step"]'),
  amountInput: form.querySelector('input[name="amount"]'),
  submit: form.querySelector('button[type=submit]'),

};

refs.submit.addEventListener('click', handlesubmit);

function handlesubmit(event) {
  event.preventDefault();
  let delayValue = parseInt(refs.delayInput.value);

  const stepValue = parseInt(refs.stepInput.value);

  const amountValue = parseInt(refs.amountInput.value);

  let position = 1;

  for (let index = 0; index < amountValue; index++) {
    createPromise(position, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)


      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      });
    delayValue += stepValue;
    position += 1;
  }

}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(position, "position");

  console.log(delay, "delay");
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill 
        res({ position, delay })
      } else {
        // Reject
        rej({ position, delay })
      }
    }, delay)


  })

}


