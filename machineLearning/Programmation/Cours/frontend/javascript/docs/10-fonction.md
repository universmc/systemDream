# 📙 Section 10 : Les Fonctions en JavaScript
## 🧩 Introduction aux Fonctions
Une fonction 📝 est un bloc de code organisé pour une tâche spécifique. Elle est exécutée quand on l'appelle.

### Déclaration de Fonction :

* javascript
<pre>
<code class="js-commit">// 📝 Déclare une fonction pour saluer</code>
<code class="js-color">function saluer(nom) {</code>
<code class="js-color">  return `Bonjour, ${nom} ! 👋`;</code>
<code class="js-color">}</code>
</pre>

### 📌 Paramètres et Arguments de Fonction
Les fonctions peuvent prendre des paramètres 🏷️, qui agissent comme des entrées pour la fonction. Les arguments sont les valeurs réelles passées à ces paramètres.

- Exemple avec paramètres :

* javascript
<pre>
<code class="js-commit">// 🧮 Additionne deux nombres</code>
<code class="js-color">function additionner(a, b) {</code>
<code class="js-color">  return a + b; </code><code class="js-commit">// ➕</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-color">let somme = additionner(5, 3);</code><code class="js-commit"> // Appel de la fonction avec 5 et 3 comme arguments</code>
</pre>

### 🔄 Retourner un Résultat
Les fonctions peuvent renvoyer des résultats 📤 à l'aide du mot-clé return.

- Exemple de retour de valeur :

* javascript
<pre>
<code class="js-commit">// 📏 Calcule la surface d'un rectangle</code>
<code class="js-color">function calculerSurface(longueur, largeur) {</code>
<code class="js-color">  return longueur * largeur;</code><code class="js-commit"> // 📐</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-color">let surface = calculerSurface(10, 5);</code><code class="js-commit"> // Surface est 50</code>
</pre>

### 🚀 Fonctions Avancées

* - Fonctions Fléchées ➡️ : Offrent une syntaxe concise pour écrire des fonctions. Elles sont particulièrement utiles pour les fonctions anonymes courtes.

* javascript
<pre>
<code class="js-color">const direAuRevoir = nom => `Au revoir, ${nom} ! 👋`;
</pre>

* - Fonctions Anonymes 🤫 : Fonctions sans nom, souvent utilisées comme arguments.

* javascript
<pre>
<code class="js-color">setTimeout(function() {</code>
<code class="js-color">  console.log("Message affiché après 2 secondes ⏲️");</code>
<code class="js-color">}, 2000);</code>
</pre>

* - Fonctions de Rappel (Callbacks) 🔄 : Une fonction passée à une autre fonction, qui sera exécutée après un certain événement.

* javascript
<pre>
<code class="js-color">function processusUtilisateur(id, callback) {</code>
<code class="js-color">  const utilisateur = { id: id, nom: "John Doe" };</code><code class="js-commit"> // 🧑‍💼 Simule la récupération d'un utilisateur</code>
<code class="js-color">  callback(utilisateur);</code><code class="js-commit"> // 📞 Appelle la fonction de rappel</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-color">processusUtilisateur(5, utilisateur => {</code>
<code class="js-color">  console.log(`Utilisateur: ${utilisateur.nom} 📇`);</code>
<code class="js-color">});</code>
</pre>

### 🎯 Exercices Pratiques
Création de Fonctions Basiques : Développer des fonctions pour effectuer des calculs simples ou manipuler des chaînes de caractères, en utilisant des emojis pour représenter les opérations.
Exploration de Fonctions Avancées : S'essayer aux fonctions fléchées, anonymes, et de rappel pour découvrir comment elles peuvent rendre le code plus propre et plus expressif.
Paramètres et Opérateurs Avancés : Utiliser des paramètres par défaut et l'opérateur Rest pour gérer des listes d'arguments de manière flexible dans les fonctions.

* javascript

<pre>
<code class="js-color"></code>
<code class="js-commit">// Fonction pour afficher un emoji en fonction du choix de l'utilisateur</code>
<code class="js-color">function afficherEmoji() {</code>
<code class="js-color">  // Liste des emojis disponibles</code>
<code class="js-color">  const emojis = {</code>
<code class="js-color">    sourire: "😊",</code>
<code class="js-color">    triste: "😢",</code>
<code class="js-color">    coeur: "❤️",</code>
<code class="js-color">    pizza: "🍕",</code>
<code class="js-color">    chat: "🐱"</code>
<code class="js-color">  };</code>
<code class="js-color"></code>
<code class="js-commit">  // Demande à l'utilisateur de choisir un emoji</code>
<code class="js-color">  let choix = prompt("Entrez le nom de l'emoji que vous souhaitez afficher (sourire, triste, coeur, pizza, chat):");</code>
<code class="js-color"></code>
<code class="js-commit">  // Vérifie si le choix correspond à un emoji disponible</code>
<code class="js-color">  if (choix in emojis) {</code>
<code class="js-commit">    // Affiche l'emoji correspondant au choix</code>
<code class="js-color">    alert(`Voici votre emoji : ${emojis[choix]}`);</code>
<code class="js-color">  } else {</code>
<code class="js-commit">    // Informe l'utilisateur si le choix n'est pas valide</code>
<code class="js-color">    alert("Désolé, cet emoji n'est pas disponible.");</code>
<code class="js-color">  }</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-commit">// Appel de la fonction</code>
<code class="js-color">afficherEmoji();</code>
</pre>