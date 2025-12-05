const themeBtn = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");

// Load saved mode on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "🌞";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.textContent = "🌞";
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
