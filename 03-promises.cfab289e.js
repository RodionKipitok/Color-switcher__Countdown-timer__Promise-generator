var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector(".form"),l={delayInput:r.querySelector('input[name="delay"]'),stepInput:r.querySelector('input[name="step"]'),amountInput:r.querySelector('input[name="amount"]'),submit:r.querySelector("button[type=submit]")};l.submit.addEventListener("click",function(e){e.preventDefault();let t=parseInt(l.delayInput.value),n=parseInt(l.stepInput.value),o=parseInt(l.amountInput.value),r=1;for(let e=0;e<o;e++)(function(e,t){let n=Math.random()>.3;return console.log(e,"position"),console.log(t,"delay"),new Promise((o,i)=>{setTimeout(()=>{n?o({position:e,delay:t}):i({position:e,delay:t})},t)})})(r,t).then(({position:e,delay:t})=>{(0,i.Notify).success(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{(0,i.Notify).failure(`❌ Rejected promise ${e} in ${t}ms`)}),t+=n,r+=1});
//# sourceMappingURL=03-promises.cfab289e.js.map