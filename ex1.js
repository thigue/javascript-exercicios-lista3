function aplicarCores(listaCores) {
    let li = document.querySelectorAll('li');

    listaCores.map((cor, i) => {
        if(listaCores[i]) {
            li[i].style.backgroundColor = cor;
        }
    })
}