function actionToggle(){
    var action = document.querySelector('.toggle-menu');
    action.classList.toggle('active')
};

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

AOS.init({
    duration: 1200
});

let span = document.querySelector(".up-btn");

window.onscroll = function () {
if (this.scrollY >= 1000) {
span.classList.add("show");
} else {
span.classList.remove("show");
}
};