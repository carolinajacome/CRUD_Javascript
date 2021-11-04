"use strict";

var personas = []; //Función declarada

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

var registrarPersona = function registrarPersona() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value; //Construir objeto

  var objPersona = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email
  }; //console.table(objPersona);
  //Añadir el objeto al arreglo

  personas.push(objPersona);
  listarPersonas();
  console.log(personas);
};
/********************************************
*Ejercicio:
*Listar el arreglo 'personas' en la tabla
********************************************/
//Luis Eduardo Arcila Trujillo


var listarPersonas = function listarPersonas() {
  var cuerpo = document.getElementById('cuerpoTabla');
  var texto = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = personas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var objPersona = _step.value;
      texto += "<tr>\n                    <td>".concat(objPersona.nombre, "</td>\n                    <td>").concat(objPersona.apellido, "</td>\n                    <td>").concat(objPersona.telefono, "</td>\n                    <td>").concat(objPersona.email, "</td>\n                    <td> <button onclick =\"btnEditar('").concat(objPersona.nombre, "','").concat(objPersona.apellido, "','").concat(objPersona.telefono, "','").concat(objPersona.email, "')  \"> Editar </button>\n                    <button onclick=\"eliminarPersonas ('").concat(objPersona.email, "')\"> Eliminar </button>\n                    \n                    </td>\n                    \n                </tr> ");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  cuerpo.innerHTML = texto;
};

var eliminarPersonas = function eliminarPersonas(email) {
  var personasTempo = personas.filter(function (objPersona) {
    return objPersona.email != email;
  }); //sobreescribir arreglo

  personas = personasTempo;
  listarPersonas();
};

var btnEditar = function btnEditar(nombre, apellido, telefono, email) {
  document.getElementById("nombre").value = nombre;
  document.getElementById("apellido").value = apellido;
  document.getElementById("telefono").value = telefono;
  document.getElementById("email").value = email;
};

var limpiar = function limpiar() {
  document.getElementById("nombre").value = "e";
  document.getElementById("apellido").value = "e";
  document.getElementById("telefono").value = "e";
  document.getElementById("email").value = "e";
};

var btnActualizar = function btnActualizar() {
  var objPersona = getDatos();
  limpiar();
  personas.map(function (element) {
    if (element.email == objPersona.email) {
      element.nombre = objPersona.nombre;
      element.apellido = objPersona.apellido;
      element.telefono = objPersona.telefono;
    }
  });
};

var getDatos = function getDatos() {
  var objPersona = {
    nombre: nombre,
    apllido: apllido,
    telefono: telefono,
    email: email
  };
  return objPersona;
};