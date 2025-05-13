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
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // ذخیره حالت در localStorage (اختیاری)
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// بررسی حالت ذخیره شده (اگر صفحه رفرش شد)
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}
