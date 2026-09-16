const menu = document.querySelector('.menu');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');

const setThemeButtonState = () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    themeToggle?.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle?.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    if (themeIcon) themeIcon.textContent = isDark ? '☀' : '☾';
};

menu?.addEventListener('click', () => {
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', `${!isExpanded}`);
});

themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    setThemeButtonState();
});

setThemeButtonState();