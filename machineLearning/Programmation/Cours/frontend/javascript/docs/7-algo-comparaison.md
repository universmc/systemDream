# Section 7 : Comparaisons en JavaScript

## Introduction aux Opérateurs de Comparaison
Les opérateurs de comparaison en JavaScript permettent de comparer deux valeurs et de retourner un booléen : true (✅) si la comparaison est vraie, et false (❌) si elle est fausse. Les opérateurs de comparaison courants incluent >, <, >=, <=, ==, ===, !=, et !==.

- Exemples de Comparaisons avec Emojis
Nous utiliserons des livres emoji pour représenter différents nombres, en utilisant 📒 pour représenter un nombre plus petit et 📗 pour un nombre plus grand. Nous utiliserons également 🔰 pour symboliser le point de comparaison.

### Comparaison de Supériorité :
*javascript
<pre>
<code class="js-color">let isGreaterThan = 📒 > 📗;</code><code class="js-commit"> // Faux (❌), car 📒 représente un nombre plus petit que 📗</code>
</pre>

### Comparaison d'Infériorité :
* javascript
<pre>
<code class="js-color">let isLessThan = 📒 < 📗;</code><code class="js-commit"> // Vrai (✅), car 📒 est effectivement plus petit que 📗</code>
</pre>

### Utilisation des Opérateurs de Comparaison
Les opérateurs de comparaison sont souvent utilisés dans des structures de contrôle, comme les instructions if...else, pour effectuer différentes actions en fonction du résultat de la comparaison.

- Exemple d'utilisation dans une condition if...else :
* javascript
<ore>
<code class="js-color">if (📒 < 📗) {</code>
<code class="js-color">  console.log("📒 est plus petit que 📗 (✅)");</code>
<code class="js-color">} else {</code>
<code class="js-color">  console.log("📒 n'est pas plus petit que 📗 (❌)");</code>
<code class="js-color">}</code>
</pre>

## Égalité et Inégalité
En plus des comparaisons numériques, JavaScript offre des opérateurs pour tester l'égalité et l'inégalité, tant en valeur (==, !=) qu'en type et en valeur (===, !==).

- Égalité Stricte :

* javascript
<pre>
<code class="js-color">let isEqual = 🔰 == 🔰;</code><code class="js-commit"> // Vrai (✅), car les deux emojis représentent la même valeur</pre>
</pre>

- Inégalité Stricte :

* javascript
<pre>
<code class="js-color">let isNotEqual = 📒 !== 📗;</code><code class="js-commit"> // Vrai (✅), car 📒 et 📗 représentent des valeurs différentes</code>
</pre>

## Exercices Pratiques
1. Comparaisons Simples : Utiliser des emojis pour créer des affirmations de comparaison et déterminer leur validité.
2. Structures de Contrôle : Écrire des instructions if...else utilisant des opérateurs de comparaison pour évaluer différentes conditions et afficher des messages appropriés.
3. Égalité vs Inégalité : Explorer les différences entre == et ===, ainsi que != et !==, en utilisant des exemples avec des emojis.
