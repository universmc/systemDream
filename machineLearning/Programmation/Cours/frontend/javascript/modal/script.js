// Données JSON simulées
const itemsData = {
    "categories": [
        {
            "nom": "Catégorie 1",
            "items": ["Item 1", "Item 2", "Item 3"]
        },
        {
            "nom": "Catégorie 2",
            "items": ["Item 4", "Item 5"]
        }
        // Ajoutez d'autres catégories et items selon le besoin
    ]
};
// Sélection des éléments du DOM
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-btn");
const itemsContainer = document.getElementById("itemsContainer");

// Fonction pour ouvrir la modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
    afficherItems(); // Appelle la fonction pour afficher les items
};

// Fonction pour fermer la modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
};

// Fonction pour afficher les items dans la modal
function afficherItems() {
    itemsContainer.innerHTML = ""; // Nettoie le conteneur
    itemsData.categories.forEach(cat => {
        let catDiv = document.createElement("div");
        catDiv.innerHTML = `<h3>${cat.nom}</h3>`;
        cat.items.forEach(item => {
            catDiv.innerHTML += `<p>${item}</p>`;
        });
        itemsContainer.appendChild(catDiv);
    });
}

// Ferme la modal si l'utilisateur clique en dehors de celle-ci
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};