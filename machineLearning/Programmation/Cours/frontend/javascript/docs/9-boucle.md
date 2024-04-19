# 📒 Section 9 : Les Boucles en JavaScript
## Introduction aux Boucles
Les boucles permettent d'exécuter un bloc de code plusieurs fois. JavaScript offre plusieurs types de boucles pour gérer différents scénarios d'itération.

### La Boucle for
La boucle for est utilisée pour répéter un bloc de code un nombre déterminé de fois. Elle est particulièrement utile lorsque vous savez à l'avance combien de fois le code doit être exécuté.

- Syntaxe :

* javascript
<pre>
<code class="js-color">for (initialisation; condition; incrémentation) {</code>
<code class="js-commit">  // Bloc de code à exécuter</code>
<code class="js-color">}</code>
</pre>

- Exemple avec un tableau :

* javascript
<pre>
<code class="js-color">let devices = ["📱", "💻", "🖥"];</code>
<code class="js-color">for (let i = 0; i < devices.length; i++) {</code>
<code class="js-color">  console.log(devices[i]);</code><code class="js-commit"> // Itère sur chaque élément du tableau</code>
<code class="js-color">}</code>
</pre>

### La Boucle while
La boucle while continue de répéter un bloc de code tant qu'une condition spécifiée est vraie. Elle est utile lorsque le nombre d'itérations n'est pas connu à l'avance.

- Syntaxe :

* javascript
<pre>
<code class="js-color">while (condition) {</code>
<code class="js-commit">  // Bloc de code à exécuter</code>
<code class="js-color">}</code>
</pre>

- Exemple :

*javascript
<pre>
<code class="js-color">let i = 0;</code>
<code class="js-color">while (i < devices.length) {</code>
<code class="js-color">  console.log(devices[i]);</code><code class="js-commit"> // Itère sur chaque élément du tableau</code>
<code class="js-color">  i++;</code>
<code class="js-color">}</code>
</pre>

### La Méthode forEach pour les Tableaux
La méthode forEach est utilisée pour exécuter une fonction sur chaque élément d'un tableau. Elle simplifie le processus d'itération sur les tableaux.

- Syntaxe :

* javascript
<pre>
<code class="js-color">array.forEach(function(element, index) {</code>
<code class="js-commit">  // Bloc de code à exécuter</code>
<code class="js-color">});</code>
</pre>

- Exemple :

* javascript
<pre>
<code class="js-color">devices.forEach(device => {</code>
<code class="js-color">  console.log(device);</code><code class="js-commit"> // Affiche chaque élément du tableau</code>
<code class="js-color">});</code>
</pre>



### Conditions dans les Boucles
Les boucles peuvent également intégrer des logiques conditionnelles pour contrôler l'exécution de certaines parties du bloc de code.

- Exemple avec condition :

* javascript
<pre>
<code class="js-color">for (let i = 0; i < devices.length; i++) {</code>
<code class="js-color">  if (devices[i] === "💻") {</code>
<code class="js-color">    console.log("Found a laptop!");</code><code class="js-commit"> // Condition spécifique pour le laptop</code>
<code class="js-color">  } else {</code>
<code class="js-color">    console.log(devices[i]);</code>
<code class="js-color">  }</code>
<code class="js-color">}</code>
</pre>


### Exercices Pratiques
1. Utilisation de for : Écrire une boucle for pour itérer sur un tableau de valeurs et afficher chaque élément.
2. Exploration de while : Utiliser une boucle while pour répéter une invite à l'utilisateur jusqu'à ce qu'une condition spécifique soit remplie.
3. Application de forEach : Utiliser la méthode forEach pour exécuter une fonction qui affiche ou modifie chaque élément d'un tableau.

Ce chapitre vise à fournir une compréhension solide des différentes structures de boucle en JavaScript et de la manière de les utiliser pour automatiser les tâches répétitives. En utilisant des exemples pratiques et des illustrations avec des emojis, le concept de bouclage devient plus accessible et engageant pour les apprenants.