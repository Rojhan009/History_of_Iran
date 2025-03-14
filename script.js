// انتخاب دکمه و تغییر دارک مود
const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "🌞"; // خورشید برای روشنایی
    } else {
        darkModeBtn.textContent = "🌙"; // ماه برای دارک مود
    }
});
