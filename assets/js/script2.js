function pintar(e, color){
    const elementoClickeado = e.target;
    elementoClickeado.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener('click', (e) => {
    pintar(e, 'yellow');
});
    