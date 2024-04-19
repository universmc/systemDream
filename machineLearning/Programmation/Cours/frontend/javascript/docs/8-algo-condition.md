# 📙 Section 8 : Logique Conditionnelle en JavaScript
## Introduction à la Logique Conditionnelle
La logique conditionnelle est utilisée pour exécuter différents blocs de code en fonction de si une condition, ou un ensemble de conditions, est vraie ou fausse. Les instructions if...else et les opérateurs logiques permettent de créer des structures de contrôle complexes et flexibles.

### Utilisation des Instructions if...else
Les instructions if...else permettent de tester une condition et d'exécuter un bloc de code si la condition est vraie (true), et un autre bloc si elle est fausse (false).

- Exemple simple :
* javascript
<pre>
<code class="js-color">if (condition) {</code>
<code class="js-color">  // Bloc de code à exécuter si la condition est vraie</code>
<code class="js-color">} else {</code>
<code class="js-color">  // Bloc de code à exécuter si la condition est fausse</code>
<code class="js-color">}</code>
</pre>

### Opérateurs Logiques pour Tester Plusieurs Conditions
Les opérateurs logiques permettent de combiner plusieurs conditions simples en une condition complexe.

* AND (&&) : Toutes les conditions doivent être vraies pour que le résultat global soit vrai.
* OR (||) : Au moins une des conditions doit être vraie pour que le résultat global soit vrai.
* NOT (!) : Inverse la vérité d'une condition.

## * Exemples avec Opérateurs Logiques
## ** Utilisation de && (AND) :

*javascript
<pre>
<code class="js-color">if (condition1 && condition2) {</code>
<code class="js-commiis">  // Exécuté si condition1 ET condition2 sont vraies</code>
<code class="js-color">}</code>
</pre>

## ** Utilisation de || (OR) :

javascript
<pre>
<code class="js-color">if (condition1 || condition2) {</code><code class="js-commit">  // Exécuté si condition1 OU condition2 est vraie</code>
<code class="js-color">}</code>
</pre>
## **Utilisation de ! (NOT) :

* javascript
<pre>
<code class="js-color">if (!condition) {</code><code class="js-commit">// Exécuté si condition est fausse</code>
<code class="js-color">}</code>
</pre>
### Exercices Pratiques
1. Test Simple : Écrire des instructions if...else pour tester des conditions simples et afficher des messages appropriés.
2. Conditions Combinées : Utiliser des opérateurs logiques pour combiner plusieurs conditions dans une instruction if...else et déterminer quel bloc de code doit être exécuté.
3. Logique Inversée : Expérimenter avec l'opérateur NOT (!) pour inverser la logique des conditions et comprendre son impact sur le flux de contrôle.
Approfondissement
4. else if pour Plusieurs Conditions : En plus de if et else, else if peut être utilisé pour tester plusieurs conditions distinctes les unes après les autres.
5. Opérateur Ternaire : Le ternaire condition ? expr1 : expr2 offre une syntaxe concise pour exécuter l'une des deux expressions en fonction de la condition.