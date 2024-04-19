### Structure de l'Exercice

## Front-end

- * index.html

* html
<pre>
<code class="html-color">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajout de Contenu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form id="dataForm">
        <label for="dataInput">Nouvelle Donnée 📝:</label>
        <input type="text" id="dataInput" name="dataInput">
        <button type="submit">Ajouter ➕</button>
    </form>
    <div id="dataList"></div>

    <script src="form.js"></script>
</body>
</html>
</code>
</pre>

- * style.css

* css
<pre>
<code class="css-color">
body {
    font-family: Arial, sans-serif;
}

#dataForm {
    margin-bottom: 20px;
}

#dataList {
    margin-top: 20px;
}
</code>
</pre>
Back-end

- * form.js (Gestion du formulaire et intégration avec les fonctions CRUD)

* javascript
<pre>
<code class="js-color">
document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let newData = document.getElementById('dataInput').value;
    if (newData) {
        createData(newData); // Fonction à définir dans srv-json.js
        document.getElementById('dataInput').value = ''; // Réinitialiser le champ de formulaire
    }
});
</code>
</pre>

- * srv-json.js (Gestion des interactions avec le fichier JSON)

* javascript
<pre>
<code class="js-color">
function createData(dataContent) {
    // Utiliser AJAX ou fetch API pour envoyer les données au serveur
    console.log(`Création de données : ${dataContent} ✨`);
    // Ajouter ici la logique pour mettre à jour le fichier data-id.json
}
</code>
</pre>

- * request-json.js (Requêtes spécifiques pour manipuler data-id.json)

* javascript
<pre>
<code class="js-color">
// Exemple de fonction pour lire les données
function readData() {
    console.log("Lecture des données 📖");
    // Implémenter la logique pour lire les données du fichier data-id.json
}

// Note: Ajouter des fonctions similaires pour Update et Delete
</code>
</pre>

### Fonctionnalités CRUD

1. Create : Ajout de nouvelles données via le formulaire.
2. Read : Affichage des données existantes (peut être implémenté via une fonction qui charge les données au chargement de la page).
3. Update : Modification des données existantes (nécessite un mécanisme d'identification de l'élément à modifier, par exemple un bouton d'édition à côté de chaque élément de données).
4. Delete : Suppression des données existantes (similaire à Update, nécessite un bouton de suppression pour chaque élément).

## Conclusion

Cet exercice guide la création d'une application web simple permettant d'ajouter et de gérer des données dans un fichier JSON. Les utilisateurs peuvent interagir avec l'application via un formulaire front-end, tandis que la logique back-end gère les opérations CRUD sur les données. Les emojis sont utilisés pour améliorer visuellement l'expérience utilisateur en illustrant les actions clés.