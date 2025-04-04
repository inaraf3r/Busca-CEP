function ColetarCep() {
    let cep = document.querySelector("#cep").value
    console.log(cep)
    Dados(cep)
}

async function Dados(cep) {
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
    console.log(dados)
    dadosTela(dados)
}

//Permuta dos dados ne tela 

function dadosTela(dados) {
    document.querySelector("#endereco").innerHTML = dados.logradouro
    document.querySelector("#bairro").innerHTML = dados.bairro
    document.querySelector("#cidade").innerHTML = dados.localidade
    document.querySelector("#estado").innerHTML = dados.estado
    document.querySelector("#regiao").innerHTML = dados.regiao
}
