
# Joca Burger

Um site moderno para uma hamburgueria artesanal fictícia chamada **Joca Burger**, desenvolvido com foco em experiência visual, navegação intuitiva e apresentação dinâmica dos produtos.

O projeto conta com três páginas principais: início, cardápio e detalhes dos produtos. Os dados são obtidos dinamicamente por meio de uma API externa, utilizando JavaScript e operações assíncronas.

---

## Funcionalidades

- Página inicial com carousel de banners.
- Exibição dinâmica de produtos em destaque.
- Cardápio carregado automaticamente por meio de uma API.
- Filtragem de produtos pelo nome do restaurante.
- Página individual de detalhes dos produtos.
- Navegação entre páginas utilizando o ID dos produtos.
- Contagem regressiva até a meia-noite para ofertas.
- Formulário de inscrição para receber novidades e promoções.
- Cards interativos com efeitos de hover.
- Menu de navegação adaptável com Bootstrap.
- Imagem padrão para produtos sem imagem cadastrada.

---

## Tecnologias Utilizadas

- **HTML5:** estruturação das páginas.
- **CSS3:** estilização, animações e adaptações de layout.
- **Bootstrap 5:** componentes, carousel, navegação e grid responsivo.
- **JavaScript:** lógica e interatividade do projeto.
- **Fetch API:** comunicação com a API externa.
- **Async/Await:** gerenciamento de operações assíncronas.
- **Google Fonts:** utilização da fonte Bebas Neue.

### API utilizada

O projeto utiliza a API `tech4produtos` para consultar os produtos cadastrados no restaurante `JocasBurger`.

- Busca de produtos: `/produtos/restaurante=JocasBurger`
- Busca de detalhes individuais: `/produtos/{id}`

---

## Estrutura do Projeto

```bash
Jocas-Burger/
│
├── PgHome/
│   ├── index.html
│   ├── cardapio.html
│   ├── detalhes.html
│   ├── style.css
│   └── Screenshot_5.png
│
└── func/
    ├── index.js
    ├── cardapio.js
    └── detalhes.js
```

### Organização dos arquivos JavaScript

- `index.js`: controla a contagem regressiva das ofertas.
- `cardapio.js`: consulta a API, carrega os produtos no cardápio e exibe os destaques na página inicial.
- `detalhes.js`: identifica o ID do produto pela URL e apresenta suas informações individuais.

---

## Design

O projeto utiliza uma identidade visual inspirada em hamburguerias artesanais, com:

- Paleta de cores em tons dourados e vermelhos.
- Tipografia Bebas Neue.
- Cards personalizados com efeitos de interação.
- Carousel de imagens.
- Layout construído com componentes do Bootstrap.
- Animações e transições em CSS.

---

## Responsividade

A interface utiliza recursos do Bootstrap 5 e CSS para adaptar seus componentes a diferentes tamanhos de tela.

Entre os recursos utilizados estão:

- Media Queries.
- Flexbox.
- Bootstrap Grid System.
- Navbar responsiva.

---

## Como Executar

1. Faça o download ou clone este repositório.
2. Acesse a pasta `Jocas-Burger/PgHome`.
3. Abra o arquivo `index.html` no navegador.

Para utilizar todas as funcionalidades, é necessário ter conexão com a internet, pois o projeto utiliza uma API externa, Bootstrap CDN e Google Fonts.

---

## Melhorias Futuras

- [ ] Integração com backend.
- [ ] Implementação de um sistema de pedidos funcional.
- [ ] Carrinho de compras.
- [ ] Integração com banco de dados.
- [ ] Sistema de autenticação de usuários.
- [ ] Integração com WhatsApp.

---

## Autor

Desenvolvido por **Joaquim de Almeida**.

---

## Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.
