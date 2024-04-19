# 📗 Section 2 : Manipulation des tableaux en JavaScript
Création et initialisation de tableaux
Les tableaux en JavaScript peuvent stocker différents types de données, y compris des chaînes de caractères, des nombres, des objets, et même d'autres tableaux. Ils sont déclarés entre crochets [].

Exemple de déclaration :
javascript
<pre>
<code class="js-color"><span class="let">let</span> <span class="devices">devices</span> = ["📱", "💻", "🖥"];</code><code class="js-commit"> // Tableau de chaînes représentant différents appareils
Accès aux éléments d'un tableau</code>
</pre>
Chaque élément dans un tableau a un index, commençant par 0 pour le premier élément. Vous pouvez accéder à un élément en utilisant sa position dans le tableau.

Exemple d'accès :
javascript
<pre>
<code class="js-color"><span class="let">let </span> <span class="devices">firstDevice</span> = devices[0];</code><code class="js-commit"> // Accède au premier élément: "📱"</code>
<code class="console">>>console.log(firstDevice);</code><code class="js-commit"> // Affiche "📱"</code>
</pre>
Modification d'un tableau
Les tableaux en JavaScript sont des objets mutables, ce qui signifie que vous pouvez modifier leurs éléments et leur taille après leur création.

Ajout d'éléments : Utilisez push pour ajouter des éléments à la fin du tableau ou unshift pour les ajouter au début.

javascript
<pre>
<code class="js-color"><span class="devices">devices</span>.push("⌚"); </code><code class="js-commit">// Ajoute "⌚" à la fin du tableau</code>
<code class="js-color">devices.unshift("🖨"); </code><code class="js-commit">// Ajoute "🖨" au début du tableau</code>
</pre>
Suppression d'éléments : pop retire le dernier élément, tandis que shift retire le premier élément.

javascript
<pre>
<code class="js-color">devices.pop();</code><code class="js-commit"> // Retire le dernier élément "⌚"</code>
<code class="js-color">devices.shift();</code><code class="js-commit"> // Retire le premier élément "🖨"</code>
</pre>
Parcourir un tableau
Il existe plusieurs façons de parcourir un tableau pour traiter ses éléments, y compris les boucles et les méthodes d'itération modernes comme forEach.

Exemple avec forEach :
javascript
<pre>
<code class="js-color">devices.forEach(device => {</code>
<code class="js-color">  console.log(device);</code><code class="js-commit"> // Affiche chaque appareil dans le tableau</code>
<code class="js-color">});</code>
</pre>
Méthodes intégrées pour les tableaux
JavaScript offre une multitude de méthodes pour manipuler des tableaux, y compris mais sans se limiter à map, filter, find, reduce, some, every, etc.

Exemple avec map :
javascript
<pre>
<code class="js-color">let deviceTypes = devices.map(device => {</code>
<code class="js-color">  return `Type: ${device}`;</code>
<code class="js-color">});</code>
<code class="console">>>console.log(deviceTypes); // Affiche ["Type: 📱", "Type: 💻", "Type: 🖥"]</code>
</pre>
Exercices pratiques
Création et manipulation : Créer un tableau de gadgets et ajouter/supprimer des éléments.
Parcours et affichage : Utiliser forEach pour afficher chaque élément avec une description.
Transformation : Utiliser map pour créer un nouveau tableau contenant des descriptions enrichies des éléments.