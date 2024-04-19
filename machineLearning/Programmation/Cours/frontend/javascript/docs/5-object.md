# 📗 Section 4 : Les Objets en JavaScript
## Introduction aux Objets
- Les objets en JavaScript peuvent être vus comme des conteneurs pour des valeurs nommées, appelées propriétés ou méthodes. Chaque propriété d'un objet est une association entre une clé (ou un nom) et une valeur. Cette valeur peut être un type de données simple (comme une chaîne de caractères ou un nombre), un autre objet, ou une fonction.

* Création d'Objets
Les objets peuvent être créés en utilisant la syntaxe littérale d'objet, qui est la plus commune et la plus pratique.

- Exemple :

* javascript
<pre>
<code class="js-color">let device = {</code>
<code class="js-color">  type: "📱",</code>
<code class="js-color">  brand: "BrandName",</code>
<code class="js-color">  model: "ModelName",</code>
<code class="js-color">  specifications: {</code>
<code class="js-color">    screenSize: "6 inches",</code>
<code class="js-color">    storage: "128GB"</code>
<code class="js-color">  }</code>
<code class="js-color">};</code>
</pre>

### Accès aux Propriétés d'Objets
Vous pouvez accéder aux propriétés d'un objet en utilisant la notation par points ou la notation par crochets.

- Notation par points :

* javascript
<pre>
<code class="console">console.log(device.type);</code><code class="js-commit"> // Affiche "📱"</code>
</pre>

- Notation par crochets :

* javascript
<pre>
<code class="console">console.log(device["brand"]);</code><code class="js-commit"> // Affiche "BrandName"</code>
</pre>

### Modification d'Objets
Les objets en JavaScript sont modifiables, ce qui signifie que vous pouvez ajouter, modifier ou supprimer des propriétés après la création de l'objet.

- Ajout d'une nouvelle propriété :

*javascript
<pre>
<code class="js-color">device.color = "Black";</code>
</pre>
- Modification d'une propriété existante :

* javascript
<pre>
<code class="js-color">device.specifications.storage = "256GB";</code>
</pre>

- Suppression d'une propriété :

* javascript
<pre>
<code class="js-color">delete device.model;</code>
</pre>

### Méthodes d'Objets
Les méthodes sont des fonctions stockées en tant que propriétés d'un objet. Elles sont utilisées pour définir un comportement pour l'objet.

- Exemple de méthode :

* javascript
<pre>
<code class="js-color">device.displayInfo = function() {</code>
<code class="js-color">  console.log(`Type: ${this.type}, Brand: ${this.brand}`);</code>
<code class="js-color">};</code>
<code class="js-color"></code>
<code class="console">device.displayInfo();</code><code class="js-commit"> // Affiche "Type: 📱, Brand: BrandName"</code>
</pre>

### Parcourir les Propriétés d'Objets
Pour parcourir toutes les propriétés d'un objet, vous pouvez utiliser une boucle for...in.

- Exemple :

* javascript
<pre>
<code class="js-color">for (let key in device) {</code>
<code class="js-color">  console.log(`${key}: ${device[key]}`);</code>
<code class="js-color">}</code>
</pre>

### Exercices Pratiques

1. Création d'Objets : Définir un objet représentant un appareil électronique, en utilisant des emojis pour illustrer les types d'appareils.
2. Manipulation d'Objets : Ajouter, modifier, et supprimer des propriétés pour simuler différentes configurations d'appareils.
3. Méthodes d'Objets : Écrire des méthodes pour afficher des informations sur l'appareil ou pour effectuer des actions spécifiques (par exemple, allumer/éteindre l'appareil).