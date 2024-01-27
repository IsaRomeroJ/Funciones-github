
const container = document.querySelector('#container');
const div1= document.querySelector('#div-1');
const div2 = document.querySelector('#div-2');
const div3 = document.querySelector('#div-3');
const div4 = document.querySelector('#div-4');
const contenedorKey = document.querySelector('#Key');
const span = document.querySelector('#Span-contador');

var a = 'pink';
var s = 'orange';
var d = 'aqua';
var q = 'purple';
var w = 'gray';
var e = 'brown';
let isActive = true;
let divCreado = 0;

div1.addEventListener('click', () => {
    changeColorStatic(div1, 'blue', 'black');
});

div2.addEventListener('click', () => {
    changeColorStatic(div2, 'red', 'black');
});

div3.addEventListener('click', () => {
    changeColorStatic(div3, 'green', 'black');    
});

div4.addEventListener('click', () => {
    changeColorStatic(div4, 'yellow', 'black');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        contenedorKey.style.backgroundColor = a;
    } else if (event.key === 's') {
        contenedorKey.style.backgroundColor = s;
    } else if (event.key === 'd') {
        contenedorKey.style.backgroundColor = d;
    } else if (event.key === 'q') {
        createDiv(q)
    } else if (event.key === 'w') {
        createDiv(w)
    } else if (event.key === 'e') {
        createDiv(e)
    }
    console.log(event.key);
});

function changeColorStatic(element, color1, color2) {
    if (isActive) {
        element.style.backgroundColor = color1;
        isActive = false;
    } else {
        element.style.backgroundColor = color2;
        isActive = true;
    }
    console.log(isActive);
}

function createDiv(color) {
    if (divCreado <  5) {
        divCreado++;
        span.innerHTML = `${divCreado}`;
        subContainer2.innerHTML += `
            <div class="contenedores contenedores-creados" style="background-color: ${color};"></div>
        `;
    }
    console.log(divCreado);
}

