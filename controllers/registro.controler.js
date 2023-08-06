import { clientServices } from "../services/client-service.js";


const form = document.querySelector("[data-form]")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices.crearCliente(nombre, email)
        .then(() => {
        window.location.href = "../screens/registro_completado.html"
    })
    .catch((err) => console.log(err));
    });