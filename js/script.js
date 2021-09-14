function insert(n) {
    let tela = document.getElementById("tela-digitos").innerHTML;
    document.getElementById("tela-digitos").innerHTML = tela + n;
    console.log(tela)
};

function apagar() {
    let tela = document.getElementById("tela-digitos");
    tela.innerHTML = "";
};

function calcular() {
    let tela = document.getElementById("tela-digitos").innerHTML;
    if (tela) {
        document.getElementById("tela-digitos").innerHTML = eval(tela);
    };
};

function clearLast() {
    let tela = document.getElementById("tela-digitos").innerHTML;
    document.getElementById("tela-digitos").innerHTML = tela.substring(0, tela.length - 1);
};
/* .substring() method: Dado um valor inicial e final, ele retorna a parte que está entre estes valores. */