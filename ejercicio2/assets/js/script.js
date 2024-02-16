function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

document.getElementById("ele1").addEventListener("click", function() {
    pintar(this, 'yellow');
});

  