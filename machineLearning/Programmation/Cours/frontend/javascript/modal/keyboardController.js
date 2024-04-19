const modal = document.getElementById("keyboardModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close-btn")[0];
const keyPressedDisplay = document.getElementById("keyPressed");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("keydown", function(event) {
    const keyMap = {
        "0": "0️⃣",
        "1": "1️⃣",
        "2": "2️⃣",
        "3": "3️⃣",
        "4": "4️⃣",
        "5": "5️⃣",
        "6": "6️⃣",
        "7": "7️⃣",
        "8": "8️⃣",
        "9": "9️⃣",
        // Ajoutez d'autres mappages de touches ici
        "Enter": "↩️",
        "ArrowUp": "⬆️",
        "ArrowDown": "⬇️",
        "ArrowLeft": "⬅️",
        "ArrowRight": "➡️",
        // Ajoutez d'autres flèches et commandes spéciales ici
    };

    let emoji = keyMap[event.key];
    if (emoji) {
        keyPressedDisplay.textContent = `Touche pressée : ${emoji}`;
    } else {
        keyPressedDisplay.textContent = `Touche pressée : ${event.key}`;
    }
});