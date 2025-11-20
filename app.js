const THEME_KEY = "akash-portfolio-theme";
const root = document.documentElement;
const chips = document.querySelectorAll(".theme-chip");
const yearLabel = document.querySelector("#year");

const setTheme = (theme) => {
  root.dataset.theme = theme;
  chips.forEach((chip) => chip.classList.toggle("active", chip.dataset.theme === theme));
  localStorage.setItem(THEME_KEY, theme);
};

chips.forEach((chip) =>
  chip.addEventListener("click", () => {
    setTheme(chip.dataset.theme);
  })
);

const storedTheme = localStorage.getItem(THEME_KEY);
if (storedTheme) {
  setTheme(storedTheme);
} else {
  setTheme("daylight");
}

if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}

