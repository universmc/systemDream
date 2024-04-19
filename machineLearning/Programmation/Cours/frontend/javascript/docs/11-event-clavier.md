# 📂 Exercice : Développer un Contrôleur de Clavier

## Structure HTML (index.html)
- * html
<pre>
<code class="html-color"><!DOCTYPE html></code>
<code class="html-color"><html lang="en"></code>
<code class="html-color"><head></code>
<code class="html-color">    <meta charset="UTF-8"></code>
<code class="html-color">    <title>Contrôleur de Clavier</title></code>
<code class="html-color">    <link rel="stylesheet" href="style.css"></code>
<code class="html-color"></head></code>
<code class="html-color"><body></code>
<code class="html-color">    <div id="keyboardModal" class="modal"></code>
<code class="html-color">        <div class="modal-content"></code>
<code class="html-color">            <span class="close-btn">&times;</span></code>
<code class="html-color">            <p id="keyPressed">Appuyez sur une touche...</p></code>
<code class="html-color">        </div></code>
<code class="html-color">    </div></code>
<code class="html-color">
<code class="html-color">    <button id="openModalBtn">Ouvrir le Contrôleur de Clavier 🔹</button></code>
<code class="html-color">
<code class="html-color">    <script src="keyboardController.js"></script></code>
<code class="html-color"></body></code>
<code class="html-color"></html></code>
</pre>

- * Style CSS (style.css)

* css
<pre>
<code class="css-color">.modal {</code>
<code class="css-color">    display: none;</code>
<code class="css-color">    position: fixed;</code>
<code class="css-color">    z-index: 1;</code>
<code class="css-color">    left: 0;</code>
<code class="css-color">    top: 0;</code>
<code class="css-color">    width: 100%;</code>
<code class="css-color">    height: 100%;</code>
<code class="css-color">    overflow: auto;</code>
<code class="css-color">    background-color: rgba(0,0,0,0.4);</code>
<code class="css-color">}
<code class="css-color">
<code class="css-color">.modal-content {</code>
<code class="css-color">    background-color: #fefefe;</code>
<code class="css-color">    margin: 15% auto;</code>
<code class="css-color">    padding: 20px;</code>
<code class="css-color">    border: 1px solid #888;</code>
<code class="css-color">    width: 50%;</code>
<code class="css-color">}</code>
<code class="css-color"></code>
<code class="css-color">.close-btn {</code>
<code class="css-color">    color: #aaa;</code>
<code class="css-color">    float: right;</code>
<code class="css-color">    font-size: 28px;</code>
<code class="css-color">    font-weight: bold;</code>
<code class="css-color">}</code>
<code class="css-color"></code>
<code class="css-color">.close-btn:hover,</code>
<code class="css-color">.close-btn:focus {</code>
<code class="css-color">    color: black;</code>
<code class="css-color">    cursor: pointer;</code>
<code class="css-color">}</code>
</pre>


- * Logique JavaScript (keyboardController.js)
* javascript

<pre>
<code>
const modal = document.getElementById("keyboardModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close-btn")[0];
const keyPressedDisplay = document.getElementById("keyPressed");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("keydown", function(event) {
    const keyMap = {
        "0": "0️⃣",
        "1": "1️⃣",
        // Ajoutez d'autres mappages de touches ici
        "Enter": "↩️",
        "ArrowUp": "⬆️",
        "ArrowDown": "⬇️",
        "ArrowLeft": "⬅️",
        "ArrowRight": "➡️",
        // Ajoutez d'autres flèches et commandes spéciales ici
    };

    let emoji = keyMap[event.key];
    if (emoji) {
        keyPressedDisplay.textContent = `Touche pressée : ${emoji}`;
    } else {
        keyPressedDisplay.textContent = `Touche pressée : ${event.key}`;
    }
});
</code>
</pre>

### Fonctionnalité

1. Modal: Une fenêtre modale s'ouvre en appuyant sur le bouton "Ouvrir le Contrôleur de Clavier". Elle affichera l'emoji ou le caractère correspondant à la touche pressée sur le clavier.
2. Contrôleur de Clavier: Lorsqu'une touche est pressée, l'application vérifie si cette touche correspond à une des touches définies dans keyMap et affiche l'emoji correspondant. Si la touche n'est pas mappée, elle affiche simplement le caractère de la touche pressée.

## Conclusion
Cet exercice permet de pratiquer la gestion des événements de clavier en JavaScript et de voir comment afficher dynamiquement des informations dans une interface utilisateur en réponse à ces événements. Il illustre également l'utilisation des modales pour fournir un feedback interactif à l'utilisateur.