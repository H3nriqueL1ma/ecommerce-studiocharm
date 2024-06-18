document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname !== "/home") {
      window.location.replace("/home");
    }
});

const divSearch = document.querySelector("#div-search");
const divItems = document.querySelector("#div-items");
const rowMenu = document.querySelector("#row-menu");
const navbarLogo = document.querySelector("#logo");

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1245 && window.innerWidth <= 1269) {
        rowMenu.classList.remove("justify-content-between");
        rowMenu.classList.add("justify-content-around");
        divSearch.classList.remove("col-lg-5");
        divSearch.classList.add("col-lg-6");
    } else if (window.innerWidth >= 1270) {

        rowMenu.classList.remove("justify-content-around");
        rowMenu.classList.add("justify-content-between");
    } else {
        rowMenu.classList.remove("justify-content-between");
        rowMenu.classList.add("justify-content-around");
        divSearch.classList.remove("col-lg-6");
        divSearch.classList.add("col-lg-5");
    }
});

const signInButton = document.querySelector("#sign-in");

signInButton.addEventListener("click", () => {
    location.assign("/sign-in")
});