const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const search = document.querySelector(".search");
const cart = document.querySelector(".cart");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

let img = document.querySelector("#img-carrousel");
let flechaIzq = document.querySelector("#izq");
let flechaDer = document.querySelector("#der");
let imagenes = ["./assets/imagen-uno.jpg", "./assets/imagen-dos.png", "./assets/imagen-tres.jpg", "./assets/imagen-cuatro.jpg", "./assets/imagen-cinco.jpg", "./assets/imagen-uno.jpg"];
let imgIndex = 0;

flechaDer.addEventListener("click", ()=> {
    img.setAttribute("src", imagenes[imgIndex]);
    imgIndex++;
    if(imgIndex > 5){
        imgIndex = 0;
    }
})

let imgIndexRe = 5;
flechaIzq.addEventListener("click", ()=> {
    img.setAttribute("src", imagenes[imgIndexRe]);
    imgIndexRe--;
    if(imgIndexRe < 0){
        imgIndexRe = 5;
    }
})
<<<<<<< HEAD
=======


>>>>>>> rodrigo
