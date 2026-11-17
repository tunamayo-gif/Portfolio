const btn = document.querySelector("#but1")
btn.addEventListener("mouseenter", () => {
    btn.classList.add("but1");
})

btn.addEventListener("mouseleave", () => {
    btn.classList.remove("but1");
})