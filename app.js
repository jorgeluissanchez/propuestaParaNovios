// Obtener los elementos de los botones y el modal
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Función para mostrar el modal
function showModal() {
  modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = "none";
}

// Agregar un evento al botón de "Sí"
yesBtn.addEventListener("click", function () {
  showModal();
});

// Agregar un evento al botón de "No"
// Función para mover el botón "No" por toda la pantalla
function moveButton() {
  // Obtener el ancho y alto del botón y de la ventana
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Calcular una posición aleatoria para el botón
  let leftPos = Math.random() * (windowWidth - btnWidth);
  let topPos = Math.random() * (windowHeight - btnHeight);

  // Asegurarse de que el botón no esté en contacto con el mouse
  while (
    leftPos <= event.clientX + btnWidth &&
    leftPos + btnWidth >= event.clientX &&
    topPos <= event.clientY + btnHeight &&
    topPos + btnHeight >= event.clientY
  ) {
    leftPos = Math.random() * (windowWidth - btnWidth);
    topPos = Math.random() * (windowHeight - btnHeight);
  }

  // Aplicar la clase para la animación antes de cambiar la posición
  noBtn.classList.add("btn-move");
  noBtn.classList.add("btn-slide");

  // Cambiar la posición del botón después de un pequeño retraso para que la animación funcione
  setTimeout(() => {
    noBtn.style.position = "absolute";
    noBtn.style.left = leftPos + "px";
    noBtn.style.top = topPos + "px";
  }, 10);

  // Quitar la clase de animación después de que la transición haya terminado
  setTimeout(() => {
    noBtn.classList.remove("btn-move");
    noBtn.classList.remove("btn-slide");
  }, 1000);
}

// Agregar un evento de clic al botón de "No" para moverlo
noBtn.addEventListener("click", function () {
  moveButton();
});

// Agregar un evento al botón de cerrar del modal
closeBtn.addEventListener("click", function () {
  closeModal();
});

// Agregar un evento al hacer clic fuera del modal para cerrarlo
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
