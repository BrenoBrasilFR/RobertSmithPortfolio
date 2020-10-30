/* HEADER */
const header  = document.getElementById("header");
const items = document.querySelectorAll(".show");
const image = document.querySelector("#showcase");
const mainItem = document.querySelector(".showOnLoad");
const menuToggle = document.querySelector(".menuToggle1");
const menu = document.querySelector(".menuToggle");
let menuBtnStatus = false;

window.onscroll = function () {
    if (window.pageYOffset > 50) {
        header.style.background = "black";
        header.style.boxShadow = "0px 0px 20px black";
    } else {
        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }
}

/* SHOW ITEMS */
const appearOptions = {
    threshold: 1,
};

const appearOnScroll = new IntersectionObserver
(function showFunction (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('show0');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

items.forEach(item => {
    appearOnScroll.observe(item);
})

/* SHOW ON IMAGE LOAD */
function myFunction() {
    mainItem.classList.add("show1");
}

/* MENU */
function toggleMenu(e) {
    e.preventDefault();

    if (menuBtnStatus == false) {
        menuToggle.style.marginLeft = "0px";
        menuBtnStatus = true;
    } else if (menuBtnStatus = true) {
        menuToggle.style.marginLeft = "736px";
        menuBtnStatus = false;
    }
}

menu.onclick = toggleMenu;