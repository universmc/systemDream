# 📙 Section 14 : Expressions Régulières en JavaScript

## Exemple Interactif d'Utilisation des Expressions Régulières

### Recherche de Motif dans une Chaîne de Caractères
Nous utiliserons prompt pour recevoir une entrée utilisateur et rechercher un motif spécifique à l'aide d'une expression régulière.
Pour illustrer, nous chercherons des mots qui commencent par une lettre spécifique.

* javascript
<pre>
<code class="js-color">
let userInput = prompt("Entrez un texte pour rechercher les mots commençant par la lettre 'a' 🅰️:");
let regexPattern = /\ba\w*/g; // Recherche des mots commençant par 'a'
let foundWords = userInput.match(regexPattern);
console.log("Mots trouvés:", foundWords ? foundWords.join(", ") : "Aucun mot trouvé 🚫.");
</code>
</pre>

### Validation d'un Formulaire
Utilisation d'une expression régulière pour valider le format d'une adresse email saisie par l'utilisateur via prompt.

* javascript
<pre>
<code class="js-color">
let emailInput = prompt("Entrez votre adresse email pour validation 📧:");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple validation d'email
let isValidEmail = emailRegex.test(emailInput);
console.log(`L'adresse email ${emailInput} est ${isValidEmail ? "valide ✅" : "invalide ❌"}.`);
</code>
</pre>

### Remplacement de Texte
Exemple de remplacement d'une certaine chaîne par une autre dans un texte fourni par l'utilisateur.

* javascript
<pre>
<code class="js-color">
let originalText = prompt("Entrez un texte pour remplacer 'JavaScript' par 'JS' 🔄:");
let newText = originalText.replace(/JavaScript/g, "JS");
console.log("Nouveau texte:", newText);
</code>
</pre>

### Application dans le Web Sémantique et SEO
Les expressions régulières peuvent être particulièrement utiles pour extraire et manipuler des données structurées, ce qui est crucial pour le web sémantique et le SEO.

### * Extraction de Données RDF

Par exemple, extraire des titres et des auteurs d'articles à partir d'un texte encodé en RDF.
* javascript
<pre>
<code>
let rdfSnippet = "<titre>Expressions Régulières en JavaScript</titre><auteur>Jean Dupont</auteur>";
let rdfRegex = /<(\w+)>(.*?)<\/\1>/g;
let match;
while ((match = rdfRegex.exec(rdfSnippet)) !== null) {
    console.log(`${match[1]}: ${match[2]} 🌐`);
}
</code>
</pre>

### * Optimisation SEO
Utiliser des expressions régulières pour s'assurer que les balises META et autres éléments HTML importants pour le SEO suivent les meilleures pratiques.

* javascript
<pre>
<code class="js-color">
let metaDescription = "<meta name='description' content='Apprenez à utiliser les expressions régulières en JavaScript pour améliorer vos compétences de développement.'>";
let isValidMeta = /<meta name='description' content='.{15,155}'>/.test(metaDescription);
console.log(`La balise META est ${isValidMeta ? "optimisée pour le SEO ✅" : "non optimisée ❌"}.`);
</pre>
</code>

Ces exemples fournissent une vue d'ensemble pratique sur la façon dont les expressions régulières peuvent être appliquées dans différents scénarios de programmation en JavaScript, y compris leur utilisation dans le cadre du web sémantique et des efforts d'optimisation pour les moteurs de recherche.