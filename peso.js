let usuario = document.getElementById("pesoTierra");
let lugar = document.getElementById("num_lugar");
let boton = document.getElementById("botoncito");
const teclas = {
  ENTER: 13
};

boton.addEventListener("click", pesoPorClick);
usuario.addEventListener("keyup", pesoPorEnter);

const g_sol = 274;
const g_mercurio = 3.7;
const g_venus = 8.87;
const g_tierra = 9.8;
const g_luna = 1.62;
const g_marte = 3.71;
const g_jupiter = 24.79;
const g_saturno = 10.44;
const g_urano = 8.69;
const g_neptuno = 11.15;
const g_pluton = 0.62;

function pesoPorEnter(evento)
{
    switch(evento.keyCode)
  {
    case teclas.ENTER:
    pesoPorClick()
  }
}

function pesoPorClick()
{
  let planeta = parseInt(lugar.value);
  let peso = parseInt(usuario.value);
  let peso_final;
  let nombre;

  if (planeta == 1)
  {
    peso_final = peso * g_sol / g_tierra;
    nombre = "el Sol";
  }
  else if (planeta == 2)
  {
    peso_final = peso * g_mercurio / g_tierra;
    nombre = "Mercurio";
  }
  else if (planeta == 3)
  {
    peso_final = peso * g_venus / g_tierra;
    nombre = "Venus";
  }
  else if (planeta == 4)
  {
    peso_final = peso * g_luna / g_tierra;
    nombre = "la Luna";
  }
  else if (planeta == 5)
  {
    peso_final = peso * g_marte / g_tierra;
    nombre = "Marte";
  }
  else if (planeta == 6)
  {
    peso_final = peso * g_jupiter / g_tierra;
    nombre = "Jupiter";
  }
  else if (planeta == 7)
  {
    peso_final = peso * g_saturno / g_tierra;
    nombre = "Saturno";
  }
  else if (planeta == 8)
  {
    peso_final = peso * g_urano / g_tierra;
    nombre = "Urano";
  }
  else if (planeta == 9) {
    peso_final = peso * g_neptuno / g_tierra;
    nombre = "Neptuno";
  }

  else if (planeta == 10)
  {
    peso_final = peso * g_pluton / g_tierra;
    nombre = "Pluton";
  }

  else
  {
    peso_final = 10000000000000;
    nombre = "Krypton";
  }


  peso_final = parseInt(peso_final);
  document.getElementById('resultado').innerHTML = "Tu peso en <strong>" + nombre +"<strong/> es <strong>" + peso_final + " Kilos<strong/>.";
}
