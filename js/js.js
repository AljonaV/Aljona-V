let dipper = document.querySelector('#dipper');
//console.log("добавили класс/id");
console.log("Add class/id");

function dipperjump(){
//    console.log("Начало функции прыжка");
    console.log("Add jump class to dipper");
    dipper.classList.add('jump');
//    console.log("Функция закончилась, убираем класс, что бы можно было снова её активировать.");
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}

function dippermove(){
//    console.log("Начало функции движений");
    console.log("Add move class to dipper");
    dipper.classList.add('move');
//    console.log("Функция закончилась, убираем класс, что бы можно было снова её активировать.");
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}

function dipperrun(){
//    console.log("Начало функции движений");
    console.log("Add run class to dipper");
    dipper.classList.add('run');
//    console.log("Функция закончилась, убираем класс, что бы можно было снова её активировать.");
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}

function dipperrun30(){
//    console.log("Начало функции движений");
    console.log("Dipper run to 30%");
    dipper.classList.add('run30');
//    console.log("Функция закончилась, убираем класс, что бы можно было снова её активировать.");
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}

function runfrom30(){
    console.log("Dipper run from 30% to right side of screen");
//    console.log("Начало функции движений");
    dipper.classList.add('runfrom30');
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}

function dipperrotate(){
//    console.log("Начало функции движений");
    console.log("Wheeeeee, dipper rotate :)");
    dipper.classList.add('rotate');
//    console.log("Функция закончилась, убираем класс, что бы можно было снова её активировать");
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}

function dipperscale(){
//    console.log("Начало функции движений");
    console.log("Scale class, yaiks");
    dipper.classList.add('scale');
//    console.log("Функция закончилась, убираем класс что бы можно было снова её активировать");
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);

}

function dippermirror(){
//    console.log("Начало функции движений");
    console.log("Mirror");
    dipper.classList.add('mirror');
//    console.log("Функция закончилась, убираем класс что бы можно было снова её активировать");
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}

function dipperfade(){
    console.log("Fade");
    dipper.classList.add('fade');
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}

function dippershake(){
    console.log("Shake with balls");
    dipper.classList.add('shake');
    console.log("Remove class from dipper");
    dipper.addEventListener('animationend', clean);
}


function clean(){
    dipper.classList.remove('move');
    dipper.classList.remove('jump');
    dipper.classList.remove('rotate');
    dipper.classList.remove('scale');
    dipper.classList.remove('mirror');
    dipper.classList.remove('fade');
    dipper.classList.remove('run');
    dipper.classList.remove('run30');
    dipper.classList.remove('runfrom30');
    dipper.classList.remove('shake');
//    console.log("Убрали все класы, можно снова жать.");
    console.log("All is clean");
}

