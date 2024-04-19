## Exercice : Création d'une Modal pour Documenter des Items par Catégorie

### Étape 1 : Structure HTML
Commencez par définir la structure HTML de base, incluant un bouton pour ouvrir la modal et la structure de la modal elle-même, qui sera initialement cachée.

* html
<pre>
<code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple de Modal</title>
    <link rel="stylesheet" href="style.css"> <!-- Assurez-vous de lier votre fichier CSS ici -->
</head>
<body>

<button id="openModalBtn">Ouvrir la Modal 📂</button>

<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Items par Catégorie 📚</h2>
        <div id="itemsContainer"></div>
    </div>
</div>

<script src="script.js"></script> <!-- Assurez-vous de lier votre fichier JavaScript ici -->
</body>
</html>
</code>
</pre>

### Étape 2 : Style CSS
Ajoutez du CSS pour styliser la modal. Assurez-vous que la modal est initialement cachée et qu'elle apparaît de manière appropriée lorsque le bouton est cliqué.

* css
<pre>
.modal {
    display: none; /* La modal est cachée par défaut */
    position: fixed; /* Reste en place même lors du défilement */
    z-index: 1; /* Se situe au-dessus du contenu */
    left: 0;
    top: 0;
    width: 100%; /* Largeur complète */
    height: 100%; /* Hauteur complète */
    overflow: auto; /* Permet le défilement si nécessaire */
    background-color: rgba(0,0,0,0.4); /* Couleur de fond */
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% du haut et centré horizontalement */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Peut être ajusté */
}

.close-btn {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close-btn:hover,
.close-btn:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</code>
</pre>

### Étape 3 : Logique JavaScript
Le JavaScript gérera l'ouverture de la modal au clic du bouton, la fermeture de la modal lorsque l'utilisateur clique sur le bouton de fermeture, et le remplissage de la modal avec des données JSON.

* javascript
<pre>
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
</code>
</pre>

## Conclusion

Cet exercice montre comment créer une interface utilisateur interactive avec une modal qui s'ouvre en cliquant sur un bouton et affiche des informations structurées en catégories à partir de données JSON. Les styles CSS assurent une présentation claire et attrayante, tandis que le JavaScript gère la logique d'interaction.