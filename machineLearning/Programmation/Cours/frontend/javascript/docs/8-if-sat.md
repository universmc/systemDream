# 📙 Section 8 : Logique Conditionnelle en JavaScript

## Introduction à la Logique Conditionnelle
La logique conditionnelle permet d'exécuter différents blocs de code en fonction de certaines conditions. Les instructions if...else et les opérateurs logiques tels que && (ET logique), || (OU logique), et ! (NON logique) sont couramment utilisés pour construire ces conditions.

### Scénario de Communication
Imaginons un scénario où une antenne parabolique 📡 et un satellite 🛰 doivent tous deux être opérationnels pour établir une communication et obtenir un signal fort 📶. Si l'une de ces conditions n'est pas remplie, la communication échoue, indiquée par 📵.

- Exemple de Conditionnelle
*javascript
<pre>
<code class="js-commit">// Déclaration des états opérationnels</code>
<code class="js-color">let antenneParabolique = true;</code><code class="js-commit"> // 📡 est opérationnel</code>
<code class="js-color">let satellite = true; // 🛰 est opérationnel</code>
<code class="js-color"></code>
<code class="js-commit">// Test des conditions avec if...else</code>
<code class="js-color">if (antenneParabolique && satellite) {</code>
<code class="js-color">    console.log("✅ Signal fort établi 📶");</code><code class="js-commit"> // Les deux sont opérationnels</code>
<code class="js-color">} else {</code>
<code class="js-color">    console.log("❌ Échec de la communication 📵"); // Au moins un n'est pas opérationnel</code>
<code class="js-color">}</code>
</pre>

- Exploration des Conditions

* - Condition de Signal Fort : Quand 📡 et 🛰 sont tous les deux true, cela signifie que la communication est établie avec succès, résultant en un signal fort 📶.

* - Condition de Signal Faible ou Absent : Si 📡 ou 🛰 est false, cela indique un problème dans la chaîne de communication, menant à une absence de signal 📵.

- Opérateurs Logiques Complémentaires

1. OU Logique (||) : Utilisé pour vérifier si au moins une des conditions est true.
2. NON Logique (!) : Utilisé pour inverser la valeur de vérité d'une condition.
Exercices Pratiques
3. Multiple Conditions : Écrire des instructions if...else qui testent différentes combinaisons de conditions opérationnelles pour 📡 et 🛰, en utilisant des opérateurs logiques pour combiner les conditions.
4. Utilisation de OU Logique : Créer un scénario où un signal faible est possible si soit l'antenne parabolique 📡 soit le satellite 🛰 est opérationnel, mais pas les deux.
5. Inversion de Conditions : Utiliser l'opérateur NON logique pour inverser des conditions et explorer des scénarios où l'absence d'un composant (comme 📡 ou 🛰) cause un échec de communication.