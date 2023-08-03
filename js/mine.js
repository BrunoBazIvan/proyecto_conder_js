confirm("Adivinaremos que pokemon elegiste a partir de preguntas")


window.onload = function saberPokemon() {
    let pregunta1;
    let pregunta2;
  
    do {
      pregunta1 = prompt("¿Tu Pokémon tiene cola?").toUpperCase();
  
      if (pregunta1 === "SI") {
        pregunta2 = prompt("Tu pokemon tiene colmillos?").toUpperCase();
      } else if (pregunta1 === "NO") {
        alert("Tu Pokémon se llama Bulbasaur");
        break;
      } else {
        alert("Por favor, responde 'SI' o 'NO'.");
      }
    } while (pregunta1 !== "SI" && pregunta1 !== "NO");

    if(pregunta1 !=="NO"){
            do{   
    pregunta3 = prompt("Estas seguro?").toUpperCase();// esta pregunta la tuve que poner sino mi segundo while se hacia un bucle infinito...
    if (pregunta2 === "SI") {
      alert("Tu Pokémon se llama Charmander");
      break;
    } else if (pregunta2 === "NO") {
      alert("Tu Pokémon se llama Squirtle");
      break;
    }else{
        alert("Por favor, responde 'SI' o 'NO'.")
    }
    
    } while (pregunta2 !== "SI" && pregunta2 !== "NO")
    }
  };
  
