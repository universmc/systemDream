# 📗 Section 1 : Variables en JavaScript
## Introduction aux variables
- Les variables sont des conteneurs pour stocker des données. En JavaScript, on les utilise pour conserver des valeurs qui peuvent être des nombres, des chaînes de caractères, des tableaux, des objets, et bien plus encore. Utiliser des variables rend le code réutilisable et facile à lire.

* Types de déclaration

### <code class="js-color"><span class="var">var</span></code> :

- Portée : Globale ou fonctionnelle. Les variables déclarées avec var sont accessibles partout dans la fonction qui les contient, ou globalement si elles ne sont pas dans une fonction.
- Hoisting : Les déclarations var sont "hisées" au sommet de leur contexte d'exécution, ce qui signifie que vous pouvez référencer une variable avant qu'elle ne soit déclarée.
javascript
<pre>
<code class="js-color">console.log(myVar);</code></code> <code class="js-commit">// undefined, pas d'erreur car hoisting s'applique
<code class="js-color"><span class="var">var</span> myVar = 5;</code>
</pre>

### <span class="let">let</span> :

- Portée : De bloc. Les variables déclarées avec let ne sont accessibles que dans le bloc où elles ont été déclarées.
- Hoisting : Moins sujet au hoisting de manière visible. Si vous tentez d'accéder à une variable let avant sa déclaration, vous obtiendrez une erreur.
javascript
<pre>
<code class="js-color"><span class="let">let</span> myLet = 5;</code>
<code class="console">>> console.log(myLet);</code><code class="js-commit"> // Erreur: Cannot access 'myLet' before initialization</code>
</pre>

### <span class="const">const</span> :

- Portée : De bloc, similaire à let.
Valeur constante : Les variables déclarées avec const doivent être initialisées au moment de la déclaration et leur valeur ne peut pas être modifiée par la suite.
javascript
<pre>
<code class="js-color"><span class="const">const</span> myConst = 10;</code>
<code class="console">>> myConst = 20;</code><code class="js-commit"> // Erreur: Assignment to constant </code>
</pre>

### variable.

- Pratique : Exercices sur les variables
- Exercice de déclaration : Déclarer une variable avec var, let, et const, et essayer de les modifier ou de les réutiliser dans différents blocs de code pour observer leur comportement.
- Exercice de portée : Créer une fonction et déclarer des variables à l'intérieur avec var, let, et const, puis tenter d'y accéder à l'extérieur de la fonction pour comprendre la portée.

### Optimisation des tableaux (Arrays)
Les arrays en JavaScript peuvent être manipulés et parcourus à l'aide de diverses méthodes. Trois méthodes clés pour travailler efficacement avec des arrays sont map, filter, et reduce.

- map : Transforme les éléments d'un array en appliquant une fonction à chacun d'eux.

* javascript
<pre>
<code class="js-color"><span class="const">const</span> numbers = [1, 2, 3, 4];</code>
<code class="js-color"><span class="const">const</span> squares = numbers.map(x => x * x); </code><code class="js-commit">// [1, 4, 9, 16]</code>
</pre>
- filter : Crée un nouveau array avec tous les éléments qui passent le test implémenté par la fonction fournie.

* javascript
<pre>
<code class="js-color"><span class="const">const</span> numbers = [1, 2, 3, 4];</code>
<code class="js-color"><span class="const">const</span> even = numbers.filter(x => x % 2 === 0);</code><code class="js-commit"> // [2, 4]</code>
</pre>

- reduce : Applique une fonction qui est un "accumulateur" et qui traite chaque valeur d'une liste (de la gauche vers la droite) pour la réduire à une seule valeur.

* javascript
<pre>
<code class="js-color"><span class="const">const</span> numbers = [1, 2, 3, 4];</code>
<code class="js-color"><span class="const">const</span> sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);</code><code class="js-commit"> // 10</code>
</pre>

- Pratique : Exercices sur les arrays
Exercice avec map : Créer un array de nombres et utiliser map pour doubler chaque valeur de l'array.
- Exercice avec filter : À partir d'un array de nombres, utiliser filter pour extraire seulement les nombres impairs.
- Exercice avec reduce : Utiliser reduce pour calculer la somme des éléments d'un array de nombres.