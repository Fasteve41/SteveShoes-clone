let quantity = document.getElementById("number");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");

i = 0;

plus.onclick = function(){
    if(i < 10){
        i ="0" + i;
    }

    if(i >= 0){
        quantity.innerText = i;
        i++;
    }
}

minus.onclick = function(){
    if(i < 10){
        i ="0" + i;
    }
    if (i >= 0) {
        quantity.innerText = i;
        i--;
    }
}

var subMenu = document.getElementById("subMenu");
var popUp = document.getElementById("popUp");

popUp.addEventListener("click", () => {
    subMenu.classList.toggle("popMenu");
})

