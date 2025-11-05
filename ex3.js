function unfold(seed, f) {
    let res = f(seed);
    if (res === null) return []; 

    let [novoSeed, valor] = res;
    return [valor].concat(unfold(novoSeed, f)); 
}

function exibirPares() {
    let ul = document.createElement("ul");

    let numeros = unfold(1, (n) => {
        if (n > 50) return null;   
        return [n + 1, n];         
    });

    let pares = numeros.filter(n => n % 2 === 0);

    pares.forEach(n => {
        let li = document.createElement("li");
        li.textContent = n;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}