const offerBtn = document.querySelector(".offer--btn");
const annuallyPrices = document.querySelectorAll("[data-annually]");
const monthlyPrices = document.querySelectorAll("[data-monthly]");

    offerBtn.addEventListener("click", function () {
        // Alternar las clases para cambiar la visibilidad
        offerBtn.classList.toggle("move-right");
        annuallyPrices.forEach(price => price.classList.toggle("show-annually"));
        monthlyPrices.forEach(price => price.classList.toggle("show-monthly"));
    });