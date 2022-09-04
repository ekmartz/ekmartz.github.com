/*
console.log("hola mundo desde javascript");
*/


//DOM
/*
let container = document.querySelector(".container");
console.log(container);
*/

/*
let table = document.querySelector(".table");
console.log(table);
*/

/*
let enlace = document.querySelectorAll("a");

    enlace.forEach(function(enlace){
        
    console.log(enlace);
});
*/

/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
});
*/

// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

// Recorrerlos
links.forEach(function(link){

// Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

// Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

// Agregar clases para animar su salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "../index.html";
        },600);
        
        return false;
    });
});


/*
let icons = document.querySelectorAll(".star");

icons.forEach(function(icons){
    icons.classList.remove("star");
})
*/