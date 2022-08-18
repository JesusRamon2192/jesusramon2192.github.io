let pc = aleatoriedad(1, 3);
let jugador = prompt("Elije: \n 1 para piedra ✊🏻 \n 2 para papel ✋🏻 \n 3 para tijera ✌🏻");
//alert("Elejiste " + jugador)
function aleatoriedad(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
     let resultado = ""   
    if(jugada == 1){
        resultado = "Piedra ✊🏻"
    }
    else if(jugada == 2){
        resultado = "Papel ✋🏻"
    }
    else if(jugada == 3){
        resultado = "Tijera ✌🏻"
    }
    else{
        resultado = "Mal elegido"
    }
    return resultado

}
function combate(){
// Combate
if(jugador == pc){
    alert("Empate")
}
// Casos para jugador piedra
else if(jugador == 1 && pc ==3){
    alert("Ganaste")
}
else if(jugador ==1 && pc == 2){
    alert("Perdiste")
}
// Casos para jugador papel
else if(jugador == 2 && pc == 1){
    alert("Ganaste")
}
else if(jugador == 2 && pc == 3){
    alert("Perdiste")
}
// Casos para jugador tijera
else if(jugador == 3 && pc == 2){
    alert("Ganaste")
}
else if(jugador == 3 && pc == 3){
    alert("Perdiste")
}
}

alert("Tu eliges: " + eleccion(jugador))
alert("PC elige: " + eleccion(pc))

combate()