//Queremos crear una nueva comunicación entre el frontend y el backend esto lo vamos a lograr con una clase que ya viene nativa en el navegador que se llama XMLHttpRequest
//const http = new XMLHttpRequest();

//Abrir http (método, url) --> es un método que me va a recibir dos parámetros

// CRUD - Métodos HTTP
// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE

//PROMESAS

/* const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/perfil");
  
      http.send();
  
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
  
    return promise;
  };
   */

//FETCH API -> FUNCION QUE VIENE NATIVA EN EL NAVEGADOR -- Fetch por defecto trabaja con el método
// Podemos convertir este método en una sola línea

/* const listaClientes = () => {
    return fetch("http://localhost:3000/perfil").then(respuesta =>{
        return respuesta.json()
    })
}
 */

//Esta función se encarga de hacer la comunicación con el servidor, recibir la respuesta y después generarla en un json
const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

//FUNCIÓN CREAR CLIENTE

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //atraves del cuerpo vamos a poner toda la información que queremos que se envíe en el cuerpo de nuestra petición.  Nuestra conexión http trabaja con texto, por lo tanto debemos convertirlo, para esto se usa el JSON.strigify el cual transforma nuestro objeto en texto.
    body: JSON.stringify({
      nombre,
      email,
      id: uuid.v4(),
    }),
  });
};

// ELIMINAR CLIENTE

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

// EDITAR CLIENTE

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify ({
      nombre, 
      email
    })
  })
  .then((response) => response)
  .catch((err) => console.log (err))


}
export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};

// La palabra perfil viene del nombre de nuestro archivo json. Con el metodo open, lo que vamos a hacer es que en vez que el navegador se encargue de obtener la información vamos a hacer que JS lo haga.//
//http.open("GET", "http://localhost:3000/perfil");

// Send se encarga de enviar la petición -- > Desde nuestro proyecto está saliendo  hacia el servidor que se encuentra en la url anterior.
//http.send();

// Con el metodo SEND solo estamos enviando la petrición pero aun no tenemos los resultados o la respuesta que nos da el servidor, para eso utilizamos el método Onload

// Onload -> una vez que termine o carque de recibir una respuesto se va a ejecutar esta función.

// Con JSON.parse lo que hace es convertir el http (que es un texto) en un formato JSON.  Pues la respuesta no es un arreglo es un texto.

/* http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);  
}
 */

/*  */
