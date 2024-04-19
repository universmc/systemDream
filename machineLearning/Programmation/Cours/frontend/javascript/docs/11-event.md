# 📙 Section sur les Événements en JavaScript
## Gestion des Événements de Clic
Écouter les événements de clic sur un élément et afficher un message dans la console lorsqu'un clic est détecté.

* javascript
<pre>
<code class="js-color">document.getElementById("boutonClic").addEventListener("click", function() {</code>
<code class="js-color">    console.log("Bouton cliqué! 👆")
<code class="js-color">})
</pre>

## Gestion des Événements Clavier
Configurer des écouteurs pour les touches spécifiques (h, j, k, l) en suivant une norme similaire à celle des interfaces riches (ARIA) pour l'accessibilité.

* javascript
<pre>
<code class="js-color">document.addEventListener("keydown", function(event) {</code>
<code class="js-color">    switch (event.key) {</code>
<code class="js-color">        case "h":</code>
<code class="js-color">            console.log("Touche 'h' pressée ⬅️");</code>
<code class="js-color">            break;</code>
<code class="js-color">        case "j":</code>
<code class="js-color">            console.log("Touche 'j' pressée ⬇️");</code>
<code class="js-color">            break;</code>
<code class="js-color">        case "k":</code>
<code class="js-color">            console.log("Touche 'k' pressée ⬆️");</code>
<code class="js-color">            break;</code>
<code class="js-color">        case "l":</code>
<code class="js-color">            console.log("Touche 'l' pressée ➡️");</code>
<code class="js-color">            break;</code>
<code class="js-color">    }</code>
<code class="js-color">});</code>
</pre>

## Gestion des Événements de Souris
Surveiller les mouvements de la souris sur un élément spécifique et enregistrer ces actions.

* javascript
<pre>
<code class="js-color">document.getElementById("zoneSouris").addEventListener("mousemove", function() {</code>
<code class="js-color">    console.log("Souris en mouvement 🖱️");</code>
<code class="js-color">});</code>
</pre>

## Gestion des Événements sur les Appareils Mobiles
Écouter les événements tactiles sur les appareils mobiles, tels que toucher et glisser.

* javascript
<pre>
<code class="js-colde">document.getElementById("zoneTactile").addEventListener("touchstart", function() {</code>
<code class="js-colde">    console.log("Écran touché 👆");</code>
<code class="js-colde">});</code>
</pre>

## Gestion du Défilement (Scrolling)
Détecter le défilement sur une page ou un élément spécifique et réagir en conséquence.

* javascript
<pre>
<code class="js-colde">window.addEventListener("scroll", function() {</code>
<code class="js-colde">    console.log("Page en défilement 📜");</code>
<code class="js-colde">});</code>
</pre>

## Insertion de Timeline et d'Émojis pour Événements
Incorporer des emojis pour illustrer les actions dans les messages de la console et utiliser des timestamps pour créer une timeline des événements.

javascript
<pre>
<code class="js-color">document.addEventListener("keydown", function(event) {</code>
<code class="js-color">    let now = new Date();</code>
<code class="js-color">    console.log(`[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] Touche '${event.key}' pressée 🕑`);</code>
});</code>
</pre>
Exercices Pratiques

