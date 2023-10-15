const themeToggle = document.getElementById('themeToggle');

// Set theme based on localStorage or default to light
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    const currentIcon = document.querySelector('.theme-toggle i');
    if (currentTheme === 'dark-mode') {
        currentIcon.classList.remove('fas', 'fa-moon');
        currentIcon.classList.add('fas', 'fa-sun');
    } else {
        currentIcon.classList.remove('fas', 'fa-sun');
        currentIcon.classList.add('fas', 'fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const currentIcon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        currentIcon.classList.remove('fas', 'fa-moon');
        currentIcon.classList.add('fas', 'fa-sun');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        currentIcon.classList.remove('fas', 'fa-sun');
        currentIcon.classList.add('fas', 'fa-moon');
        localStorage.setItem('theme', 'light-mode');
    }
});
