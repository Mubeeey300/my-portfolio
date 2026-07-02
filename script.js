const button = document.getElementById("theme-btn");

button.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

button.innerHTML = '<i class="fa-solid fa-sun"></i>';

}else{

button.innerHTML = '<i class="fa-solid fa-moon"></i>';

}

});