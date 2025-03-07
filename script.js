// انتخاب دکمه و بدنه سایت
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// بررسی اینکه آیا دارک مود قبلاً فعال بوده یا نه
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
}

// افزودن قابلیت تغییر دارک مود
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    // ذخیره وضعیت دارک مود در مرورگر
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
