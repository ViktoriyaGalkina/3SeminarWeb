// let name = "Viktoriya";
// alert(`Привет, ${name}!`);
//let element = document.getElementById(`el1`);
//console.log(element);
// добавляем класс элементу
//element.classList.add('active');
// удалить элемент
//element.classList.remove('active');

let count = 0;

function clickButton() {
    //alert('Кнопка нажата!');
    let element = document.getElementById('el1');
    // if (count % 2 == 0) element.classList.add('active');
    // else element.classList.remove('active');
    // count++;
    element.classList.toggle('active');  //!!!
    element.textContent = "Свой текст";
}
let btn = document.getElementById('btn');
btn.addEventListener('click', clickButton);


function clickButton1() {
    let element = document.getElementById('btn1');
    element.classList.toggle('active');  //!!!
}
let btn1 = document.getElementsByClassName('btn1');
console.log(btn1);
btn1[0].addEventListener('click', clickButton1);


function clickButton2() {
    let element = document.getElementById('text');
    element.classList.toggle('button');
    element.textContent = "Поменялся текст!";
}
let text = document.getElementsByClassName('text');
console.log(text);
text[0].addEventListener('click', clickButton2);


// function changedLi() {
//     let element = document.getElementById('p');
//     element.classList.toggle('button');

    // // смена всех элементов ul li
    // let ul = document.getElementsByTagName('li');
    // // для того, чтобы дальше перебрать
    // let arr = Array.from(ul);
    // // перебор каждого элемента
    // arr.forEach((element) => {
    //     element.classList.toggle('active');
    // })
// }
// let btn = document.getElementById('btn');
// btn.addEventListener('click', clickButton);

// let btn2 = document.getElementsByClassName('btn1');
// btn2[0].addEventListener('click', clickButton);
// btn2[1].addEventListener('click', changedLi);