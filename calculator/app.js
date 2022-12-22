// Colorful theme
document.querySelector("#Colorful").addEventListener("click", function () {
    document.querySelector("body").classList.add("Colorful");
    document.getElementById("calculator").style.background = "#85cdca"
    for (let i = 0; i < document.querySelectorAll(".calc-button").length; i++) {
        document.querySelectorAll(".calc-button")[i].style.background = "#E8A87C"
    }

    document.querySelector("body").classList.remove("Bright")
    document.querySelector("body").classList.remove("Natural")
    document.querySelector("body").classList.remove("Fresh")
});

// Bright theme
document.querySelector("#Bright").addEventListener("click", function () {
    document.querySelector("body").classList.add("Bright");
    document.getElementById("calculator").style.background = "#242582"
    for (let i = 0; i < document.querySelectorAll(".calc-button").length; i++) {
        document.querySelectorAll(".calc-button")[i].style.background = "#F64C71"
    }

    document.querySelector("body").classList.remove("Colorful")
    document.querySelector("body").classList.remove("Natural")
    document.querySelector("body").classList.remove("Fresh");
});

// Natural Theme
document.querySelector("#Natural").addEventListener("click", function () {
    document.querySelector("body").classList.add("Natural");
    document.getElementById("calculator").style.background = "#659EBC"
    for (let i = 0; i < document.querySelectorAll(".calc-button").length; i++) {
        document.querySelectorAll(".calc-button")[i].style.background = "#BD986B"
    }

    document.querySelector("body").classList.remove("Colorful")
    document.querySelector("body").classList.remove("Bright")
    document.querySelector("body").classList.remove("Fresh")
});

// Fresh theme
document.querySelector("#Fresh").addEventListener("click", function () {
    document.querySelector("body").classList.add("Fresh");
    document.getElementById("calculator").style.background = "#05396B"
    for (let i = 0; i < document.querySelectorAll(".calc-button").length; i++) {
        document.querySelectorAll(".calc-button")[i].style.background = "#EDF5E0"
    }

    document.querySelector("body").classList.remove("Colorful")
    document.querySelector("body").classList.remove("Bright")
    document.querySelector("body").classList.remove("Natural")
});

// input 
document.querySelector("#calculator-input").placeholder = "0";

// add
let add = document.getElementById("add").addEventListener("click", add);
function add(num1, num2) {
    var sum = num1 + num2;
}

document.querySelector("#calculator-input").placeholder = sum;