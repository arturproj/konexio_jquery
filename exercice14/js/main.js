btn = document.querySelector("button");
btn.addEventListener("click", function() {
    btn.textContent ="button clicked";
    document.querySelector("h1").classList.add("highlight");
});