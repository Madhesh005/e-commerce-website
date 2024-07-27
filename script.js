var navbar_mob = document.querySelector(".navbar-mob");

function mob() {
    navbar_mob.style.left = "0%"
}

function closenav() {
    navbar_mob.style.left = "-80%"
}

var enteredtext = ""
var gallery = document.querySelector(".productgallery");
var tosearch = gallery.querySelectorAll("div");
console.log(tosearch);

function check(event) {
    enteredtext = event.target.value.toUpperCase()
    for (var i = 0; i < tosearch.length; i++) {
        if (tosearch[i].textContent.toUpperCase().indexOf(enteredtext) < 0) {
            tosearch[i].style.display = "none"
        }
        else{
            tosearch[i].style.display="block"
        }
    }
}