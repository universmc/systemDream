# 📗 Section 3 : Les formats de données en JavaScript
- Introduction aux formats de données
Les formats de données jouent un rôle crucial dans le développement web, notamment dans le stockage de données, les communications réseau et la configuration. Choisir le bon format de données peut affecter la performance, la lisibilité et la facilité de manipulation des données.

## Markdown (.md)
### Définition : 
- Un langage de balisage léger avec une syntaxe de formatage de texte brut. Souvent utilisé pour la documentation, les fichiers README, et les forums en ligne comme GitHub.
Utilisation en JavaScript : Généralement, le contenu Markdown est converti en HTML pour l'affichage dans les navigateurs. Des bibliothèques JavaScript comme marked permettent de parse et de convertir le Markdown.

- Exemple de syntaxe :
* markdown
<pre>
<code>### <h3>Titre h3<h3></code>
<code>**Gras**, *Italique*, `Code`</code>
</pre>

## JSON (.json)
### Définition : 
- JavaScript Object Notation, un format léger d'échange de données, facile à lire et à écrire pour les humains, et facile à parser et à générer pour les machines.
Utilisation en JavaScript : Natif en JavaScript. Utilisé pour la configuration, les API web, et le stockage de données.

- Exemple de syntaxe :
*json
<pre>
<code>{
<code>  "name": "mike",</code>
<code>  "age": 35,</code>
<code>  "isStudent": false</code>
<code>}</code>
</pre>

### Méthodes associées : 
- JSON.parse() pour convertir une chaîne JSON en objet JavaScript, et JSON.stringify() pour convertir un objet JavaScript en chaîne JSON.

## XML (.xml)
### Définition : 
- eXtensible Markup Language, un langage de balisage qui définit un ensemble de règles pour encoder des documents de manière à la fois lisible par l'homme et par la machine.
### Utilisation en JavaScript : 
- Bien que moins populaire que JSON dans les nouveaux projets web, XML est toujours utilisé dans de nombreuses applications d'entreprise et pour les configurations.

- Exemple de syntaxe :
* xml
<pre>
<code><person></code>
<code>  <name>John</name></code>
<code>  <age>30</age></code>
<code>  <isStudent>false</isStudent></code>
<code></person></code>
</pre>

## CSV (.csv)
### Définition : 
- Comma-Separated Values, un format de fichier utilisé pour stocker des données tabulaires, où chaque ligne du fichier est un enregistrement de données, et chaque champ est séparé par une virgule.

### Utilisation en JavaScript : 
- Utilisé pour l'importation et l'exportation de données dans des applications comme les feuilles de calcul. Les bibliothèques JavaScript comme PapaParse facilitent le parsing et la conversion de CSV.

- Exemple de syntaxe :
* csv
<pre>
<code>name,age,isStudent</code>
<code>Mike,35,false</code>
</pre>

## Exercices pratiques

### Conversion Markdown en HTML : 
- Utiliser une bibliothèque JavaScript pour convertir le contenu Markdown en HTML.
### Manipulation de JSON : 
- Charger, parser, modifier et sauvegarder des données JSON.
### Parsing XML :
- Utiliser le DOM Parser pour lire et manipuler des données XML en JavaScript.
Importation et exportation de CSV : Parser un fichier CSV pour en extraire des données, et convertir des données en JavaScript en un fichier CSV.