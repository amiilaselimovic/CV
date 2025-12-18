const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else {
  root.setAttribute("data-theme", "dark");
}

updateIcon();

themeToggle.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");

  if (currentTheme === "light") {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }

  updateIcon();
});

function updateIcon() {
  const isLight = root.getAttribute("data-theme") === "light";
  if (isLight) {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
}
