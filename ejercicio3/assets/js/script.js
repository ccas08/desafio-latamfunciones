// Cambiar el color de los divs a negro al hacer clic
document.querySelectorAll('.colorDiv').forEach(div => {
  div.addEventListener('click', () => div.style.backgroundColor = 'black');
});

// Variable global para almacenar el color seleccionado
let selectedColor = 'white';

// Cambiar el color del div #key o crear nuevos divs según la tecla presionada
document.addEventListener('keydown', function(event) {
  const keyDiv = document.getElementById('key');
  switch (event.key) {
      case 'a':
          selectedColor = 'pink';
          keyDiv.style.backgroundColor = selectedColor;
          break;
      case 's':
          selectedColor = 'orange';
          keyDiv.style.backgroundColor = selectedColor;
          break;
      case 'd':
          selectedColor = 'lightblue';
          keyDiv.style.backgroundColor = selectedColor;
          break;
      case 'q':
      case 'w':
      case 'e':
          const newDiv = document.createElement('div');
          newDiv.style.width = '200px';
          newDiv.style.height = '200px';
          newDiv.style.margin = '10px';
          newDiv.style.display = 'inline-block';
          newDiv.style.backgroundColor = event.key === 'q' ? 'purple' : event.key === 'w' ? 'grey' : 'brown';
          document.body.appendChild(newDiv);
          break;
  }
});

  