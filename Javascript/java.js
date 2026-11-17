const btn = document.querySelector("#but")
btn.addEventListener("mouseenter", () => {
    btn.classList.add("but");
})

btn.addEventListener("mouseleave", () => {
    btn.classList.remove("but");
})