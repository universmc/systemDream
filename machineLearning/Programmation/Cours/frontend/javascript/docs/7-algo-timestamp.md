# ⏱ Section 6 : Opérations Arithmétiques et Gestion du Temps en JavaScript
## Introduction aux Opérations Arithmétiques
Les opérations arithmétiques de base en JavaScript incluent l'addition, la soustraction, la multiplication, et la division. Ces opérations peuvent être utilisées pour manipuler des nombres, y compris des valeurs de temps.

### Boucles et Temps
Les boucles sont des structures de contrôle qui répètent un bloc de code plusieurs fois. Les boucles peuvent être utilisées en JavaScript pour effectuer des opérations répétitives, comme afficher une séquence d'heures ou effectuer des calculs à intervalles réguliers.

- Exemple avec boucle for :
* javascript
<pre>
<code class="js-color">let hours = [🕐, 🕑, 🕒, 🕓, 🕔, 🕕, 🕖, 🕗, 🕘, 🕙, 🕚, 🕛, 🕜, 🕝, 🕞, 🕟, 🕠, 🕡, 🕢, 🕣, 🕤, 🕥, 🕦, 🕧];</code>
<code class="js-color">for (let i = 0; i < hours.length; i++) {</code>
<code class="js-color">  console.log(`L'heure actuelle est ${hours[i]}`);</code>
<code class="js-color">}</code>
</pre>

### Gestion du Temps avec les Timestamps Unix
Un timestamp Unix représente le nombre de secondes écoulées depuis le 1er janvier 1970 à minuit UTC, aussi connu sous le nom d'Epoch Unix. En JavaScript, les timestamps sont généralement manipulés en millisecondes.

- Obtenir le timestamp actuel :

* javascript
<pre>
<code class="js-color">let now = Date.now(); // Retourne le timestamp actuel en millisecondes</code>
<code class="js-color">console.log(`Le timestamp actuel est ${now} ⌛️`);</code>
</code>

- Convertir un timestamp en date et heure :

*javascript
<pre>
<code class="js-color">let date = new Date(now);</code><code class="js-commit"> // Convertit le timestamp en objet Date</code>
<code class="js-color">console.log(`La date et l'heure actuelles sont ${date.toString()} ⏳`);</code>
</pre>

### Opérations avec les Timestamps
Les opérations arithmétiques peuvent être utilisées pour ajouter ou soustraire des intervalles de temps à un timestamp, permettant de calculer des dates futures ou passées.

- Ajouter un jour à un timestamp :

*javascript
<pre>
<code class="js-color">let tomorrow = new Date(now + 24 * 60 * 60 * 1000);</code><code class="js-commit"> // Ajoute 24 heures au timestamp actuel</code>
<code class="js-color">console.log(`Demain sera le ${tomorrow.toString()} ⏳`);</code>
</pre>
### Exercices Pratiques
1. Utilisation de Boucles : Écrire un script qui utilise une boucle pour afficher une séquence d'heures en utilisant des emojis.
2. Manipulation de Timestamps : Travailler avec des timestamps Unix pour calculer des dates passées et futures, en affichant les résultats avec des emojis représentant des sabliers.
3. Calculs Temporels : Effectuer des opérations arithmétiques sur des timestamps pour trouver des intervalles de temps spécifiques, comme le nombre d'heures ou de jours entre deux timestamps.