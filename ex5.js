let exibirAprovados = () => {
    let alunos = [
        { nome: "Ana", nota: 9 },
        { nome: "Bruno", nota: 6 },
        { nome: "Carla", nota: 7.5 },
        { nome: "Diego", nota: 4 }
    ];

    let aprovados = alunos.filter(aluno => aluno.nota >= 7);

    let lista = document.createElement("ul");

    aprovados.forEach(aluno => {
        let li = document.createElement("li");
        li.textContent = aluno.nome;
        lista.appendChild(li);
    });

    document.body.appendChild(lista);
};