/* HEADER */
const header  = document.getElementById("header");
const items = document.querySelectorAll(".show");

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

