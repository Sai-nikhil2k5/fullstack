var a = document.querySelector("#bulb")
var b = document.querySelector("button")


var flag = true

b.addEventListener("click", function () {
    if (flag) {
        a.style.backgroundColor = "blue"
        flag = !flag;
    }
    else {
        a.style.backgroundColor = "black"
        flag = !flag;
    }
})

