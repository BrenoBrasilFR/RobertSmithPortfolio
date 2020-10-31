/* HEADER */
const header  = document.getElementById("header");
const items = document.querySelectorAll(".show");
const image = document.querySelector("#showcase");
const mainItem = document.querySelector(".showOnLoad");
var x = window.matchMedia("(max-width: 736px)")

window.onscroll = function () {
    if (window.pageYOffset > 50) {
        header.style.background = "black";
        header.style.boxShadow = "0px 0px 20px black";
    } else if (x.matches) {
        header.style.background = "black";
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
const menu = document.querySelector(".menuToggle");
const menuTextCurrent = document.getElementById("current");
const menuToggle = document.querySelector(".menuToggle1");
const menuText = document.querySelectorAll(".a");
const header0 = document.querySelector("#header");
let menuBtnStatus = true;

function toggleMenu(e) {
    e.preventDefault();
    var i;

    if (menuBtnStatus == false) {
        for (i = 0; i < menuText.length; i++) {
            menuText[i].style.color = "transparent";
        }
        menuToggle.style.marginTop = "0px";
        menuToggle.style.backgroundColor = "transparent";
        menuTextCurrent.style.borderBottom = "transparent solid 2px";
        header0.style.borderBottom = "transparent solid 1px";
        menuBtnStatus = true;
    } else if (menuBtnStatus = true) {
        for (i = 0; i < menuText.length; i++) {
            menuText[i].style.color = "white";
        }
        menuToggle.style.marginTop = "80px";
        menuToggle.style.backgroundColor = "black";
        menuTextCurrent.style.borderBottom = "lightgray solid 2px";
        header0.style.borderBottom = "lightgray solid 1px";
        menuBtnStatus = false;
    }
}

menu.onclick = toggleMenu;