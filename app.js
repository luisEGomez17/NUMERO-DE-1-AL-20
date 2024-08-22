//variables
let numeroSecreto = 12;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
    while(numeroUsuario != numeroSecreto) {
     numeroUsuario = prompt("me indicas un numero entre 1 y 20 por favor");

    console.log(numeroUsuario);
       if (numeroUsuario == numeroSecreto){
        //Acertamos, fue verdadera la condiciòn
        alert(`Acertaste, el número ${numeroUsuario}.lo hisiste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('el nùmero secreto es menor');
        } else{
            alert('el nùmero secreto es mayor');
        }
        //incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
                //La condición no se complió
    //alert('lo siento no acertaste el nùmero');
    }
}  