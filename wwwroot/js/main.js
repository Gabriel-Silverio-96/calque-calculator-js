const result = document.getElementById('result');
const num = document.querySelectorAll('.key');

//Add function onclick buttons numbers
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', () => {
        result.value = result.value + num[i].textContent;
    });
};

//Font size input result
setInterval(() => {
    if (result.value.length > 10) {
        result.classList.add('size-result');
    } else {
        result.classList.remove('size-result');
    }

    if (result.value.length > 0) {
        num[10].removeAttribute("disabled")
    }
}, 100);

//BTN FUNCTIONS 
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    result.value = result.value.substring(0, result.value.length - 1);
});

//Clear
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    result.value = ''
});

//Subtraction
const subtraction = document.getElementById('subtraction');
subtraction.addEventListener('click', () => {
    if (result.value != "") {
        result.value = result.value + ' - '
    }
});

//Sum
const sum = document.getElementById('sum');
sum.addEventListener('click', () => {
    if (result.value != "") {
        result.value = result.value + ' + '
    }
})

//Multiply
const multiply = document.getElementById('multiply');
multiply.addEventListener('click', () => {
    if (result.value != "") {
        result.value = result.value + ' * '
    }
})

//Division
const division = document.getElementById('division');
division.addEventListener('click', () => {
    if (result.value != "") {
        result.value = result.value + ' / '
    }
});

//Result operation math and historic
const historic = document.getElementById('historic');
const aside = document.querySelector('aside');
const listHistoric = document.querySelector('.list-historic');

historic.addEventListener('click', () => {
  //Show side bar
  aside.classList.toggle('show');  
  if(aside.classList.value == 'show') {
      historic.src = 'wwwroot/img/icons/close.svg';
  } else {
      historic.src = 'wwwroot/img/icons/clock.svg';
  }
})

const ul = document.createElement('ul');
const equal = document.getElementById('equal')
equal.addEventListener('click', () => {
    if (result.value.length > 4) {
        //Create list historic
        const li = document.createElement('li');
        const span = document.createElement('span');

        //First capture or value of the math operation
        li.innerText = result.value + ' = ';
        
        //Second performs the math operation
        const resultOperation = eval(result.value);

        //Third return or value of the math operation for the user
        result.value = resultOperation

        //Write result operation math 
        span.innerText = resultOperation;
        
        //Add to list 
        li.appendChild(span);
        ul.appendChild(li);
        listHistoric.appendChild(ul);
    }

    //Add scroll 
    const list = document.querySelectorAll('li');
    if (list.length > 10) {
        listHistoric.classList.add('scroll-on');
    }    
});