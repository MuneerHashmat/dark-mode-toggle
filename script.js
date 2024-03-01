let body = document.querySelector("body");
let toggleBox = document.getElementById("toggle-box");
let circle = document.getElementById("circle");
let flag = false;


toggleBox.addEventListener("click", () => {
    if (flag == false) {
        body.style.backgroundColor = "black";
        toggleBox.style.backgroundColor = "gray";
        circle.classList.add("toggle");
        body.style.color = "white";
        flag = true;
    }
    else {
        body.style.backgroundColor = "white";
        toggleBox.style.backgroundColor = "black";
        circle.classList.remove("toggle");
        body.style.color = "black";
        flag = false;
    }
});
