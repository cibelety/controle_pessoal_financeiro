var receitas = document.querySelectorAll(".receita");

for (i = 0; i < receitas.length; i++) {
    if (i == 0) {
        saldoAnterior = 0;
    } else {
        tdSaldoAnterior = receitas[i - 1].querySelector(".info-saldo");
        saldoAnterior = parseFloat(tdSaldoAnterior.textContent);
    }
    var tdValor = receitas[i].querySelector(".info-valor");
    var valor = parseFloat(tdValor.textContent);

    var tdSaldo = receitas[i].querySelector(".info-saldo");
    var saldo = saldoAnterior + valor;
    tdSaldo.textContent = saldo.toFixed(2);

    saldoNegativo(tdSaldo, saldo);

}

var botao_adicionar = document.querySelector("#adicionar-receita");
botao_adicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Clique Aqui!");

    var formulario = document.querySelector("#form_adicionar_receita");

    // var descricao = formulario.descricao.value;
    // var categoria = formulario.categoria.value;
    // var data = formulario.data.value;
    // var valor = formulario.valor.value;

    var receita = { //cria uma array "receita" que carrega os valores preenchidos no formulário
        descricao: formulario.descricao.value,
        categoria: formulario.categoria.value,
        data: formulario.data.value,
        valor: formulario.valor.value
    }
    var tdDescricao = document.createElement("td");
    tdDescricao.textContent = receita.descricao;

    var tdCategoria = document.createElement("td");
    tdCategoria.textContent = receita.categoria;
    tdCategoria.classList.add("info-categoria");

    var tdData = document.createElement("td");
    tdData.textContent = receita.data;
    tdData.classList.add("info-data");

    var tdValor = document.createElement("td");
    tdValor.textContent = parseFloat(receita.valor).toFixed(2);
    tdValor.classList.add("info-valor");

    var tdSaldo = document.createElement("td");
    tdSaldo.textContent = calculaSaldo(receita.valor); //chama a funcao calculaSaldo() com o valor a ser creditado/debitado
    tdSaldo.classList.add("info-saldo");


    var tr = document.createElement("tr");
    tr.classList.add("receita");

    tr.appendChild(tdDescricao);
    tr.appendChild(tdCategoria);
    tr.appendChild(tdData);
    tr.appendChild(tdValor);
    tr.appendChild(tdSaldo);

    var tabela = document.querySelector("#tabela-receitas");
    tabela.appendChild(tr);

    formulario.reset(); //reseta os dados preenchidos nos campos do formulário

});

function calculaSaldo(valor) {
    var receitas = document.querySelectorAll(".receita");
    var tdSaldoAnterior = receitas[receitas.length - 1].querySelector(".info-saldo");
    var saldoAnterior = parseFloat(tdSaldoAnterior.textContent);
    return (saldoAnterior + parseFloat(valor)).toFixed(2);
}

function saldoNegativo(tdSaldo, saldo) {
    if (saldo < 0) {
        // tdSaldo.style.color = "lightcoral";
        tdSaldo.classList.add("receita_negativa");
    }
}


function validaReceita(receita) {
console.log("teste2");
}
