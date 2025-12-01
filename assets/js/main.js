
/* automatic color scheme handing */
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleThemeChange(event) {
  if (event.matches) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "light");
  }
}
handleThemeChange(darkModeMediaQuery);
darkModeMediaQuery.addEventListener('change', handleThemeChange);
