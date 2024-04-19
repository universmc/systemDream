# 📗 Section 7 : Syntaxe et Logique de Programmation en JavaScript
## Introduction aux Opérateurs
Les opérateurs permettent de réaliser des opérations sur des variables et des valeurs. En JavaScript, il existe plusieurs types d'opérateurs, y compris les opérateurs arithmétiques, de comparaison, logiques, et plus encore.

### Opérateurs Arithmétiques
Les opérateurs arithmétiques sont utilisés pour effectuer des opérations mathématiques courantes telles que l'addition, la soustraction, la multiplication, et la division.

- Exemple avec des emojis :
* javascript
<pre>
<code class="js-color">let numbers = [0️⃣, 1️⃣, 2️⃣, 3️⃣, 4️⃣, 5️⃣, 6️⃣, 7️⃣, 8️⃣, 9️⃣, 🔟];</code>
<code class="js-color">let sum = numbers[1️⃣] + numbers[2️⃣]; </code><code class="js-commit">// Utilisation de ➕ pour l'addition</code>
<code class="js-color">let difference = numbers[5️⃣] - numbers[2️⃣];><code class="js-commit"> // Utilisation de ➖ pour la soustraction</code>
<code class="js-color">let product = numbers[3️⃣] ✖️ numbers[4️⃣];</code><code class="js-commit"> // Multiplication</code>
<code class="js-color">let quotient = numbers[9️⃣] ➗ numbers[3️⃣];</code><code class="js-commit"> // Division</code>
</pre>

### Opérateurs de Comparaison
Les opérateurs de comparaison sont utilisés pour comparer deux valeurs et retournent une valeur booléenne, true (✅) ou false (❌).

- Exemple :
* javascript
<pre>
<code class="js-color">let isEqual = numbers[2️⃣] == numbers[3️⃣];</code> 
<code class="js-commit">// Faux (❌), car 2 n'est pas égal à 3</code>
<code class="js-color">let isNotEqual = numbers[5️⃣] != numbers[2️⃣]; </code>
<code class="js-commit">// Vrai (✅), car 5 n'est pas égal à 2</code>
</pre>
### Opérateurs Logiques
Les opérateurs logiques sont utilisés pour combiner plusieurs conditions booléennes. Les plus courants sont AND (&&), OR (||), et NOT (!).

- Exemple :
* javascript

<pre>
<code class="js-color">let isEvenAndGreaterThanFive = (numbers[6️⃣] % 2️⃣ == 0️⃣) && (numbers[6️⃣] > numbers[5️⃣]);</code>
<code class="js-commit"> // Vrai (✅) si le nombre est pair et supérieur à 5</code>
</pre>
### Utilisation des Opérateurs dans les Conditions
Les opérateurs sont souvent utilisés dans des structures de contrôle de flux, comme les instructions if...else, pour exécuter différents blocs de code en fonction de conditions booléennes.

- Exemple :
* javascript
<pre>
<code class="js-color">if (sum == 🔟) {</code>
<code class="js-color">  console.log("La somme est égale à 10 (✅)");</code>
<code class="js-color">} else {</code>
<code class="js-color">  console.log("La somme n'est pas égale à 10 (❌)");</code>
<code class="js-color">}</code>
</pre>

### Exercices Pratiques

1. Opérations Arithmétiques : Créer des expressions utilisant des opérateurs arithmétiques pour calculer des résultats en utilisant des emojis comme valeurs.
2. Comparaisons : Utiliser des opérateurs de comparaison pour comparer différents nombres représentés par des emojis et déterminer la validité des affirmations.
3. Logique Conditionnelle : Écrire des instructions if...else qui utilisent des opérateurs logiques pour tester plusieurs conditions.