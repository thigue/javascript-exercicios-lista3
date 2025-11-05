let calcularEstoque = () => {
    let produtos = [
        { nome: "Caneta", preco: 2, quantidade: 10 },
        { nome: "Caderno", preco: 15, quantidade: 3 },
        { nome: "Lápis", preco: 1.5, quantidade: 20 },
        { nome: "Mochila", preco: 80, quantidade: 2 }
    ];

    let filtrados = produtos.filter(produto => produto.quantidade > 5);

    let total = filtrados.reduce(
        (soma, produto) => soma + produto.preco * produto.quantidade,
        0
    );

    let p = document.createElement("p");
    p.textContent = `Valor total do estoque: R$ ${total.toFixed(2)}`;

    document.body.appendChild(p);
};