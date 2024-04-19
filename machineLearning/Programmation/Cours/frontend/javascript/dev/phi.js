function afficherFibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    let fiboString = fibo.join(", ");
    console.log(`Les ${n} premiers nombres de Fibonacci : ${fiboString} 🌀`);
}

afficherFibonacci(2000); // Affiche les 7 premiers nombres de la suite de Fibonacci