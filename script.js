// فعال‌سازی دارک مود
const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // تغییر آیکون ماه/خورشید
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "🌞";
    } else {
        darkModeToggle.textContent = "🌙";
    }
});
