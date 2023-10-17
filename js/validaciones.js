export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    // if(validadores[tipoDeInput]){
    //     validadores[tipoDeInput](input)
    // };
    console.log(input.parentElement);

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
    }else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio.",
        patternMismatch: "Máximo 40 caracteres"
    },
    mensajeEmail: {
        valueMissing: "Escribe tu mensaje",
        patternMismatch: "Máximo 120 caracteres",
    },
    email: {
        valueMissing: "Este campo no puede estar vacio.",
        typeMismatch: "El correo no es valido",
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La contraseña debe contener al menos 6 caracteres, máximo 12, una letra minuscula, una mayuscula y un número",
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es: xxx-xxx-xxxx ; 10 números",
    },
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}