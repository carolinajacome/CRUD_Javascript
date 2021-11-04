let personas = [];

//Función declarada
/*
function registrarPersona(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    //Construir objeto
    let objPersona = {
        nombre,
        apellido,
        telefono,
        email
    }
    console.table(objPersona);
}
*/


//Función expresada
const registrarPersona = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    //Construir objeto
    let objPersona = {
        nombre,
        apellido,
        telefono,
        email
    }
    //console.table(objPersona);
    //Añadir el objeto al arreglo
    personas.push(objPersona);
    listarPersonas();

    console.log(personas);
}

/********************************************
*Ejercicio:
*Listar el arreglo 'personas' en la tabla
********************************************/
//Luis Eduardo Arcila Trujillo
const listarPersonas = () => {
    let cuerpo = document.getElementById('cuerpoTabla')
    let texto = ''
    for (let objPersona of personas) {
        texto += `<tr>
                    <td>${objPersona.nombre}</td>
                    <td>${objPersona.apellido}</td>
                    <td>${objPersona.telefono}</td>
                    <td>${objPersona.email}</td>
                    <td> <button onclick ="btnEditar('${objPersona.nombre}','${objPersona.apellido}','${objPersona.telefono}','${objPersona.email}')  "> Editar </button>
                    <button onclick="eliminarPersonas ('${objPersona.email}')"> Eliminar </button>
                    
                    </td>
                    
                </tr> `
    }
    cuerpo.innerHTML = texto
}

const eliminarPersonas = (email) => {
    let personasTempo = personas.filter(objPersona => (objPersona.email != email));
    //sobreescribir arreglo
    personas = personasTempo;
    listarPersonas();


}
const btnEditar = (nombre, apellido, telefono, email) => {
    document.getElementById("nombre").value = nombre;
    document.getElementById("apellido").value = apellido;
    document.getElementById("telefono").value = telefono;
    document.getElementById("email").value = email;
}

const limpiar = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
     document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";


}
const btnActualizar =() =>{
    let objPersona= getDatos();
    console.log("Actualizar-> ", objPersona);
    limpiar();

    personas.map (element=>{

        if (element.email == objPersona.email){
            element.nombre= objPersona.nombre;
            element.apellido= objPersona.apellido;
            element.telefono= objPersona.telefono;
            
                
        }
    });
    listarPersonas();

}
const getDatos =() =>{
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    //Construir objeto
    let objPersona = {
        nombre,
        apellido,
        telefono,
        email

    }
    return objPersona;
}