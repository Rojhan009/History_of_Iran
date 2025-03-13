let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const button = document.getElementById('darkModeToggle');
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        button.innerHTML = '🌙';
    } else {
        body.classList.remove('dark-mode');
        button.innerHTML = '🌞';
    }
}
