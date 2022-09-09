const navLinks = document.querySelectorAll(".list");

navLinks.forEach((link) => {
    link.addEventListener("click", active);
});

function active() {
    navLinks.forEach((link) => {
        link.classList.remove("active");
        this.classList.add("active");
    });
}