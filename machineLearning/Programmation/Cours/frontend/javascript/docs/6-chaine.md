# 📙 Section 12 : Chaînes de Caractères en JavaScript

## Introduction aux Chaînes de Caractères
Les chaînes de caractères (ou strings) en JavaScript sont utilisées pour représenter du texte. Elles sont entourées de guillemets simples (' '), doubles (" "), ou de backticks ( ) pour les template literals.

### Encodage et Mémoire
- Unicode : JavaScript utilise l'encodage Unicode 🔣 pour représenter les chaînes de caractères, ce qui lui permet de couvrir une vaste gamme de symboles et de langues.
- Optimisation de la Mémoire : Les chaînes en JavaScript sont immuables, ce qui signifie que chaque modification crée une nouvelle chaîne, affectant la gestion de la mémoire 🧠.


- Exemples de Chaînes de Caractères Avancées avec Console Log

## Pi (π) avec Math.PI.
Utiliser Math.PI pour obtenir la valeur de π et la formater en chaîne de caractères avec un nombre spécifique de décimales.

* javascript
<pre>
<code class="js-color">function afficherPi(decimales) {</code>
<code class="js-color">    let piString = Math.PI.toFixed(decimales);</code>
<code class="js-color">    console.log(`Valeur de π avec ${decimales} décimales : ${piString} 🥧`);</code>
<code class="js-color">}</cpde>
<code class="js-color"></code>
<code class="js-color">afficherPi(5);</code><code class="js-commit"> // Affiche la valeur de π avec 5 décimales</code>
</pre>

## Suite de Fibonacci (Φ).
Générer une chaîne de caractères représentant les premiers éléments de la suite de Fibonacci.

* javascript
<pre>
<code class="js-color">function afficherFibonacci(n) {</code>
<code class="js-color">    let fibo = [0, 1];</code>
<code class="js-color">    for (let i = 2; i <= n; i++) {</code>
<code class="js-color">        fibo[i] = fibo[i - 1] + fibo[i - 2];</code>
<code class="js-color">    }</code>
<code class="js-color">    let fiboString = fibo.join(", ");</code>
<code class="js-color">    console.log(`Les ${n} premiers nombres de Fibonacci : ${fiboString} 🌀`);</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-color">afficherFibonacci(7);</code><code class="js-commit"> // Affiche les 7 premiers nombres de la suite de Fibonacci</code>
</pre>

## Constante d'Avogadro
Représenter la constante d'Avogadro sous forme de chaîne et l'afficher.

* javascript
<pre>
<code class="js-color">function afficherAvogadro() {</code>
<code class="js-color">    let avogadroString = "6.02214076e+23";</code>
<code class="js-color">    console.log(`Constante d'Avogadro : ${avogadroString} ⚛️`);</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-color">afficherAvogadro(); // Affiche la constante d'Avogadro</code>
</pre>

## Cryptage SHA-256
Simuler le cryptage d'un message en utilisant SHA-256 et afficher le résultat sous forme de chaîne.

* javascript
<pre>
<code class="js-color">function afficherHashSHA256(message) {</code>
<code class="js-color">    let hash = `sha256(${message})`;</code><code class="js-commit"> // Simule le résultat du cryptage SHA-256</code>
<code class="js-color">    console.log(`Hash SHA-256 du message "${message}" : ${hash} 🔒`);</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-color">afficherHashSHA256("Message secret");</code><code class="js-commit"> // Affiche le hash SHA-256 simulé d'un message</code>
</pre>

## RDF et Web Sémantique
Illustrer l'utilisation des chaînes de caractères pour définir des ressources RDF.

* javascript
<pre>
<code class="js-color">function afficherRessourceRDF(ressource) {</code>
<code class="js-color">    console.log(`Ressource RDF : <${ressource}> 🌐`);</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-color">afficherRessourceRDF("http://exemple.org/ressource");</code><code class="js-commit"> // Affiche une ressource RDF</code>
</pre>

## SEO et Balisage <META>
Simuler l'utilisation des chaînes de caractères dans les balises <meta> pour le SEO.

* javascript
<pre>
<code class="js-color">function afficherMetaDescription(description) {</code>
<code class="js-color">    console.log(`<meta name="description" content="${description}"> 🔍`);</code>
<code class="js-color">}</code>
<code class="js-color"></code>
<code class="js-color">afficherMetaDescription("Ceci est une description de page pour le SEO.");</code><code class="js-commit"> // Affiche une balise meta description</code>
</pre>
- Ces fonctions fournissent des exemples concrets de la façon dont les chaînes de caractères peuvent être utilisées en JavaScript pour représenter et manipuler des données de divers domaines, tout en illustrant les sorties attendues à l'aide de console.log et des emojis pour rendre les exemples plus visuels et engageants.


- Ce chapitre vise à offrir une compréhension approfondie des chaînes de caractères en JavaScript, leur importance dans divers contextes de développement, et comment elles peuvent être manipulées et utilisées efficacement dans des scénarios avancés, tout en illustrant les concepts avec des emojis pour un apprentissage plus interactif et visuel.