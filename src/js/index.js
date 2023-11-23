const chaveApi = "b798092f3f9f95ec6dcb70749b496d3c"

const botao_busca = document.querySelector(".btn-busca")

botao_busca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value

    const dados =  await busca_dados_cidade (cidade)   
    
})

async function busca_dados_cidade(cidade) {
    const apiUrl =`https://api.weatherapi.com/v1/current.json?
    key=${chaveApi}&q${cidade}&aqi=no&lang=pt`

    const resposta = await fetch (apiUrl)
    const dados = resposta.json()
    return dados

}

function preencher_dados_tela(dados, cidade) {
    document.getElementById("cidade").textContent = cidade;
    
}