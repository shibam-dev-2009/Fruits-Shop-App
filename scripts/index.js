const hamburgerbutt = document.getElementById("hamburger");
const hamenu = document.querySelector(".hammenu");
const addtocart = document.querySelectorAll(".add-to-cart");
const cartdisplay = document.querySelector("#totalCart");
const top2 = document.getElementById("top");
const heroDiv = document.querySelector(".nav");

hamburgerbutt.addEventListener("click", () => {
    hamenu.style.display = (hamenu.style.display === "flex") ? "none" : "flex";
});


top2.addEventListener("click", () => {
    heroDiv.scrollIntoView({ behavior: "smooth" });
});
// Cart counter
let total = 0;
addtocart.forEach(button => {
    button.addEventListener("click", () => {
        total += 1; // Increment total
        cartdisplay.innerText = total; // Update display
    });
});

