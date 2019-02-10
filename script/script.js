const checkboxFrame = document.querySelectorAll(".checkbox__rectangle");
const checkboxInside = document.querySelectorAll(".checkbox__rectangle__inside");

for (let i = 0; i < checkboxFrame.length; i++) {
    checkboxFrame[i].addEventListener("click", function () {
        checkboxInside[i].classList.toggle("on");
    })
}