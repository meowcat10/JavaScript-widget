
let buttons = document.querySelectorAll('.btn');
let counter = document.querySelector('.counterText');

let lastest = document.querySelector('.last-btn');

buttons.forEach(function (btn){
  btn.addEventListener('click', function(){
    if (btn.innerHTML[0] === '+'){
      counter.innerText = Number(counter.innerHTML)+Number(btn.value);
      updateLatest(btn.innerText);
    }
    if (btn.innerHTML[0] === '-'){
      counter.innerText = Number(counter.innerHTML)-Number(btn.value);
      updateLatest(btn.innerText);
    }
    else if (btn.innerText === 'Reset'){
      counter.innerText = 0;
    }
    else if (btn.innerText === 'Random'){
      let randomNumber = Math.round(Math.random()*100);
      let chance = Math.random();
      console.log(randomNumber);
      if (chance >= 1/2){
        counter.innerText = Number(counter.innerHTML)+Number(randomNumber);
        updateLatest('+'+randomNumber);
      }
      else if (chance < 1/2){
        counter.innerText = Number(counter.innerHTML)-Number(randomNumber);
        updateLatest('-'+randomNumber);
      }
    }
  })
})

function updateLatest(value){
  lastest.innerText = value;
  if (value[0] === '+'){
    lastest.style.color = 'lightgreen';
  }
  if (value[0] === '-'){
    lastest.style.color = 'red';
  }
}