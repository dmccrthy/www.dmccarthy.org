/**
 * Main js for website
 * @author Dan McCarthy
 */

import "../css/style.css";

document.addEventListener("DOMContentLoaded", function () {
    if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    }

    // Show page now that styles are applied
    document.querySelector("main").classList.remove("hidden");
});

function toggleTheme() {
    if (localStorage.getItem("color-theme") === "dark") {
        localStorage.setItem("color-theme", "light");
        document.documentElement.classList.remove("dark");
    } else {
        localStorage.setItem("color-theme", "dark");
        document.documentElement.classList.add("dark");
    }
}

// Register functions
window.toggleTheme = toggleTheme;
