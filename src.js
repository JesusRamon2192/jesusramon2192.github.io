let pc = aleatoriedad(1, 3);
let jugador = prompt("Elije: \n 1 para piedra \n 2 para papel \n 3 para tijera");
//alert("Elejiste " + jugador)
function aleatoriedad(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccionjug(){
if(jugador == 1){
    alert("Elejiste piedra ✊🏻")
}
else if(jugador == 2){
    alert("Elejiste papel ✋🏻")
}
else if(jugador == 3){
    alert("Elejiste tijera ✌🏻")
}
else{
    alert("Elejiste perder")
}
}
function eleccionpc(){
if(pc == 1){
    alert("PC eligio piedra ✊🏻")
}
else if (pc == 2){
    alert("PC eligio papel ✋🏻")
}
else if(pc == 3){
    alert("PC eligio tijera ✌🏻")
}
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

eleccionjug()
eleccionpc()
combate()