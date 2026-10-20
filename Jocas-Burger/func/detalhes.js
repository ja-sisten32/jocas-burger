const urlProdutos = "https://tech4produtos.fly.dev/produtos"

const imagemPadrao = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000"

async function exibirDetalhes() {
    const container = document.getElementById("detalhes-produto")
    const hash = location.hash

    if (!hash) {
        container.innerHTML = `<p class="text-center">Escolha um prato no <a href="cardapio.html">cardápio</a> para ver os detalhes.</p>`
        return
    }

    const id = hash.replace("#", "")

    const resposta = await fetch(`${urlProdutos}/${id}`)
    const produto = await resposta.json()

    if (!produto.produto) {
        container.innerHTML = `<p class="text-center">Produto não encontrado. Volte ao <a href="cardapio.html">cardápio</a>.</p>`
        return
    }

    const imagem = produto.imagem || imagemPadrao

    container.innerHTML = `
        <div class="row my-5">
            <div class="col-md-6">
                <img src="${imagem}" class="img-fluid" alt="${produto.produto}">
            </div>

            <div class="col-md-4">
                <h1>${produto.produto}</h1>

                <p>${produto.descricao}</p>

                <button class="btn btn-warning mt-3">
                    Realizar Pedido
                </button>
            </div>
        </div>
    `
}

exibirDetalhes()
