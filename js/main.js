/* HEADER */
const header  = document.getElementById("header");
const items = document.querySelectorAll(".show");

window.onscroll = function () {
    if (window.pageYOffset > 50) {
        header.style.background = "black";
        header.style.boxShadow = "0px 4px 15px black";
    } else {
        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }
}

/* SHOW ITEMS */
const appearOptions = {
    threshold: 0.6,
};

const appearOnScroll = new IntersectionObserver 
(function(entries, appearOnScroll) {
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