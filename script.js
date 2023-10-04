alert("Hola este es mi Javascript");

let nombre ="yamile";

console.log=(nombre);

let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () 
      {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };


      // formulario
      
      const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "valido";
  let valido = true;
  parrafo.innerHTML = "exitoso";

  if (nombre.valueOf.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});