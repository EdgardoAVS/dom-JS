window.onload = inicio;

function inicio() {
  document.querySelectorAll(".button")[0].onclick = text;
  document.querySelectorAll(".button")[1].onclick = image;
  document.querySelectorAll(".button")[2].onclick = add;
  document.querySelectorAll(".button")[3].onclick = delet;


}

function text () {
  document.querySelector("#container").innerHTML = "Hola mundo";
};

function image () {
  document.querySelector("#container").innerHTML = "<img src='https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='Google'>";
}

function add () {
  document.querySelector("#container").insertAdjacentHTML("beforeend", `<button class="button">Botón</button>`);
};

function delet () {
  document.querySelector("#container").innerHTML = "";
}