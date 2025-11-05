let concatenarDivs = () => {
    let divs = document.querySelectorAll("div");

    let textoFinal = [...divs].reduce((acum, div) => acum + " " + div.textContent, "");

    let p = document.getElementById("resultado");
    p.textContent = "Resultado final: " + textoFinal.trim();
};