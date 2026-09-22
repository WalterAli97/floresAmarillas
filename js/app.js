const openButton = document.getElementById("openBtn");

const inicio = document.getElementById("inicio");
const sorpresa = document.getElementById("sorpresa");

const flowersContainer =
    document.getElementById("flowers-container");

let flowerInterval = null;


openButton.addEventListener("click", () => {

    inicio.classList.remove("active");
    sorpresa.classList.add("active");

    startFlowers();

});


function createFlower() {

    const flower = document.createElement("div");

    flower.className = "falling-flower";

    const flowers = [
        "🌻",
        "🌼",
        "🌻",
        "🌻",
        "🌼"
    ];

    flower.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left =
        Math.random() * 100 + "%";

    flower.style.fontSize =
        (20 + Math.random() * 25) + "px";

    flower.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    flower.style.animationDelay =
        (Math.random() * 1.5) + "s";

    flowersContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 10000);

}


function startFlowers() {

    if (flowerInterval) {
        return;
    }

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {
            createFlower();
        }, i * 150);

    }

    flowerInterval = setInterval(() => {

        createFlower();

    }, 450);

}