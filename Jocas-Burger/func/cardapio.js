const nomeRestaurante = "JocasBurger"
const urlAPI = `https://tech4produtos.fly.dev/produtos/restaurante=${nomeRestaurante}`

const imagemPadrao = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000"

async function buscarProdutosRestaurante() {
    const resposta = await fetch(urlAPI)
    const dados = await resposta.json()
    const produtos = Array.isArray(dados) ? dados : dados.value || []

    return produtos.filter(item => item.restaurante === nomeRestaurante)
}

async function carregarCardapio() {
    const listaProdutos = document.getElementById("lista-produtos")

    if (!listaProdutos) return

    const meusProdutos = await buscarProdutosRestaurante()
    listaProdutos.innerHTML = ""

    if (meusProdutos.length === 0) {
        listaProdutos.innerHTML = "<p>Nenhum produto encontrado para este restaurante.</p>"
        return
    }

    meusProdutos.forEach(item => {
        const imagem = item.imagem || imagemPadrao

        listaProdutos.innerHTML += `
            <a href="detalhes.html#${item.id}" class="link">
                <div class="card" style="width: 18rem;">
                    <img src="${imagem}" class="card-img-top cd" alt="${item.produto}">
                    <div class="card-body">
                        <h5 class="card-title">${item.produto}</h5>
                        <p class="card-text">${item.descricao}</p>
                    </div>
                </div>
            </a>
        `
    })
}

async function carregarDestaques() {
    const container = document.getElementById("destaques-api")

    if (!container) return

    const produtos = await buscarProdutosRestaurante()
    container.innerHTML = ""

    const destaques = produtos.slice(0, 3)

    if (destaques.length === 0) {
        container.innerHTML = "<p>Nenhum destaque disponível no momento.</p>"
        return
    }

    destaques.forEach(item => {
        const imagem = item.imagem || imagemPadrao

        container.innerHTML += `
            <a href="detalhes.html#${item.id}" class="link">
                <div class="card" style="width: 18rem;">
                    <img src="${imagem}" class="card-img-top cd" alt="${item.produto}">
                    <div class="card-body">
                        <h5 class="card-title">${item.produto}</h5>
                        <p class="card-text">${item.descricao}</p>
                        <p class="card-text">★★★★★</p>
                    </div>
                </div>
            </a>
        `
    })
}

carregarCardapio()
carregarDestaques()
