import { clientServices } from "../services/client-service.js";

const form = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "../screens/error.html";
  }

  const nombre = document.querySelector("[data-nombre]"); // es el data atribute que lo traemos de nuestro html editar_cliente
  const email = document.querySelector("[data-email]");

  try {
    const perfil = await clientServices.detalleCliente(id);
    console.log(perfil);
    if (perfil.nombre && perfil.email) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Catch Error-", error);
    window.location.href = "../screens/error.html"
  }
};

obtenerInformacion();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = "../screens/edicion_concluida.html";
  });
});
