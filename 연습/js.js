const pic = document.querySelectorAll(".imagebox .pic");
const lightbox = document.querySelector("#lightbox");

for (i=0; i<pic.length; i++){
    pic[i].addEventListener("click", showbox);
}