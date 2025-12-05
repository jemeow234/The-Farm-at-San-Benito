const menuBtn = document.getElementById("menuButton");
const menu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});
