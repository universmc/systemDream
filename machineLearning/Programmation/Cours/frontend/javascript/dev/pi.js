function afficherPi(decimales) {
    let piString = Math.PI.toFixed(decimales);
    console.log(`Valeur de π avec ${decimales} décimales : ${piString} 🥧`);
}

afficherPi(49); // Affiche la valeur de π avec 5 décimales