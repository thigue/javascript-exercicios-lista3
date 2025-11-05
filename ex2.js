function unfold(seed, f) {
    let res = f(seed);

    if (res === null) return []; 

    let [novoSeed, valor] = res;
    return [valor].concat(unfold(novoSeed, f)); 
}

function exibirSequencia() {
    let ul = document.createElement("ul");

    let valores = unfold(1, (n) => {
        if (n > 1024) return null;
        return [n * 2, n];
    });

    valores.forEach((valor) => {
        let li = document.createElement("li");
        li.textContent = valor;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}