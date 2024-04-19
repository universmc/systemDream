# 📗 Section 2 : Les types de données en JavaScript
- Introduction aux types de données
JavaScript est un langage de programmation à typage dynamique, ce qui signifie que le type d'une variable est déterminé lors de l'exécution. Les types de données de base en JavaScript comprennent string, number, et boolean, chacun ayant ses propres caractéristiques et méthodes de manipulation.

## Le type string
- Définition : Une chaîne de caractères utilisée pour représenter du texte.

### Déclaration et utilisation :
* javascript
<pre>
<code class="js-color">let greeting = "Bonjour !";</code><code class="js-commit"> // Utilisation de guillemets doubles</code>
<code class="js-color">let name = 'John'; // Ou de guillemets simples</code>
</pre>

### Concaténation et interpolation :
* javascript
<pre>
<code class="js-color">let welcomeMessage = greeting + " " + name + "!";</code><code class="js-commit"> // Concaténation</code>
<code class="js-color">let interpolatedMessage = `${greeting} ${name}!`;</code><code class="js-commit"> // Interpolation avec les template strings</code>
</pre>

* Méthodes courantes : toUpperCase(), toLowerCase(), split(), trim(), etc.

## Le type number
* Définition : Représente à la fois les nombres entiers et les nombres à virgule flottante.
Déclaration et utilisation :

* javascript
<pre>
<code class="js-color">let age = 25;</code><code class="js-commit"> // Nombre entier</code>
<code class="js-color">let price = 99.99;</code><code class="js-commit"> // Nombre à virgule flottante</code>
</pre>

### Opérations arithmétiques : Addition +, soustraction -, multiplication *, division /, etc.
- Particularités : NaN (Not a Number), Infinity.

## Le type boolean
- Définition : Représente une valeur logique qui peut être true ou false.

* Déclaration et utilisation :

* javascript
<pre>
<code class="js-color">let isOpen = true;</code>
<code class="js-color">let isComplete = false;</code>
</pre>

## Utilisation dans les conditions :

* javascript
<pre>
<code class="js-color">if (isOpen) {</code>
<code class="js-color">  console.log("Ouvert");</code>
<code class="js-color">} else {</code>
<code class="js-color">  console.log("Fermé");</code>
<code class="js-color">}</code>
</pre>

### Lien avec TypeScript

- TypeScript étend JavaScript en ajoutant des types statiques. Chaque type de données JavaScript a un équivalent direct en TypeScript, ce qui permet une vérification de type au moment de la compilation et aide à prévenir les erreurs courantes liées au typage dynamique.

* Déclaration des types en TypeScript :

* typescript
<pre>
<code class="js-color">let greeting: string = "Bonjour";</code>
<code class="js-color">let age: number = 35;</code>
<code class="js-color">let isOpen: boolean = true;</code>
</pre>

- Avantages de TypeScript : Fournit une sécurité de type supplémentaire, facilite la maintenance du code, et améliore la collaboration au sein des équipes de développement.

### Exercices pratiques
Manipulation de chaînes : Créer et manipuler des chaînes de caractères, utiliser différentes méthodes pour transformer et analyser le texte.
Calculs avec des nombres : Effectuer diverses opérations arithmétiques, explorer les limites et les particularités des nombres en JavaScript.
Logique booléenne : Utiliser des booléens dans des conditions pour contrôler le flux d'un programme.