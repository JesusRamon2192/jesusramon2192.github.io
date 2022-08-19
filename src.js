let jugador = 0;
let pc = 0;
let pcPuntos = 0;
let jugadorPuntos = 0;
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
            empatesPuntos
            alert("Empate")
        }
        // Casos para jugador piedra
        else if(jugador == 1 && pc ==3){
            jugadorPuntos += 1;
            alert("Ganaste")
        }
        else if(jugador ==1 && pc == 2){
            pcPuntos += 1;
            alert("Perdiste")
        }
        // Casos para jugador papel
        else if(jugador == 2 && pc == 1){
            jugadorPuntos += 1;
            alert("Ganaste")
        }
        else if(jugador == 2 && pc == 3){
            pcPuntos += 1;
            alert("Perdiste")
        }
        // Casos para jugador tijera
        else if(jugador == 3 && pc == 2){
            jugadorPuntos += 1;
            alert("Ganaste");
        }
        else if(jugador == 3 && pc == 1){
            pcPuntos += 1;
            alert("Perdiste");
    }
}

for(i=0; i<3; i++){
jugador = prompt("Elije: \n 1 para piedra ✊🏻 \n 2 para papel ✋🏻 \n 3 para tijera ✌🏻");
pc = aleatoriedad(1, 3);
alert("Tu eliges: " + eleccion(jugador))
alert("PC elige: " + eleccion(pc))
combate()
}
if(jugadorPuntos > pcPuntos){
    alert("Ganaste la partida")
}
else if(jugadorPuntos == pcPuntos){
    alert("Perdiste la partida")
}
else{
    alert("Perdiste la partida")
}

console.log("Jugador = " + jugadorPuntos,"PC = " + pcPuntos)