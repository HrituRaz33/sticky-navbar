const navbarEle = document.querySelector(".navbar");

const bottomContainerEle = document.querySelector(".bottom-container")

window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainerEle.offsetTop - navbarEle.offsetHeight - 50) {
        navbarEle.classList.add("active")
    }
    else {
        navbarEle.classList.remove("active")
    }
})