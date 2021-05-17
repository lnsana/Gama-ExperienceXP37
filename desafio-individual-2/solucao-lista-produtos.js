let listaProdutos = require('./produtos.json')

// (1) :)

function total_itens_estoque(listaProdutos) {
    let estoque = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        estoque = estoque + produto.qtdEstoque
    }

    console.log("A quantidade total de estoque em estoque é de: ", estoque)
    return estoque
}

total_itens_estoque(listaProdutos)

// (2)

function total_itens_destaque(listaProdutos) {
    let destaques = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        if (produto.emDestaque == "sim") {
            destaques = destaques + 1
        }
    }

    console.log("A quantidade de produtos em destques é: ", destaques)

}

total_itens_destaque(listaProdutos)

// (3)

function quantidade_itens_disponiveis(listaProdutos) {
    let disponiveis = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        if (produto.disponivel == "sim") {
            disponiveis = disponiveis + 1
        }
    }

    console.log("A quantidade de itens disponiveis é: ", disponiveis)
}

quantidade_itens_disponiveis(listaProdutos)

// (4)

function total_inventario(listaProdutos) {
    let totalInventario = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        totalInventario = totalInventario + (produto.preco * produto.qtdEstoque)
    }

    console.log("O total do valor no inventario é: ", totalInventario)
    return totalInventario
}

total_inventario(listaProdutos)

// (5)

function total_itens_departamento(listaProdutos) {
    let departamentoAtual = ""
    let itensAtual = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        if (departamentoAtual == produto.departamento.nomeDepto) {
            itensAtual = itensAtual + 1
        } else {
            if (departamentoAtual != "") {
                console.log(`A quantidade de intens no departamento ${departamentoAtual} é de ${itensAtual}`)
            }
            departamentoAtual = produto.departamento.nomeDepto
            itensAtual = 1
        }
    }
}

total_itens_departamento(listaProdutos)

// (6)

function total_inventario_por_departamento(listaProdutos) {
    let departamentoAtual = ""
    let totalInventario = 0;
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        let departamentoProduto = produto.departamento.nomeDepto

        if (departamentoAtual == departamentoProduto) {
            totalInventario = totalInventario + (produto.preco * produto.qtdEstoque)
        } else {
            if (departamentoAtual != "") {
                console.log(`O total do departamento  ${departamentoAtual}, é de: ${totalInventario} `)
            }
            departamentoAtual = departamentoProduto
            totalInventario = (produto.preco * produto.qtdEstoque)
        }
    }
}

total_inventario_por_departamento(listaProdutos)

// (7)

function ticket_medio(listaProdutos) {
    let valorTotal = 0
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        valorTotal = valorTotal + (produto.preco * produto.qtdEstoque)

    }

    let ticketMedio = valorTotal / listaProdutos.length

    console.log("O ticket médio é: ", ticketMedio.toFixed(2))

}

ticket_medio(listaProdutos)

function ticket_medio_reutilizado(listaProdutos) {
    let valorTotal = total_inventario(listaProdutos)
    let ticket_medio = valorTotal / listaProdutos.length
    console.log("O ticket médio é: ", ticket_medio.toFixed(2))

}

//  ticket_medio_reutilizado(listaProdutos)

// (8)

function ticket_medio_por_departamento(listaProdutos) {
    let departamentoAtual = ""
    let valorTotalDepartamento = 0
    let quantidadeItensDepartamento = 0
    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        let departamentoProduto = produto.departamento.nomeDepto
        if (departamentoAtual == departamentoProduto) {
            valorTotalDepartamento = valorTotalDepartamento + produto.preco * produto.qtdEstoque
            quantidadeItensDepartamento = quantidadeItensDepartamento + 1
        } else {
            if (departamentoAtual != "") {
                let ticketMedioDepartamento = valorTotalDepartamento / quantidadeItensDepartamento
                console.log("O ticket médio por departamento é:", ticketMedioDepartamento.toFixed(2))
            }
            departamentoAtual = departamentoProduto
            valorTotalDepartamento = (produto.preco * produto.qtdEstoque)
            quantidadeItensDepartamento = 1
        }
    }
}

ticket_medio_por_departamento(listaProdutos)

// (9)

function departamento_mais_valioso(listaProdutos) {
    let nomeDepartamentoValioso
    let valorDepartamentoValioso = 0

    let nomeDepartamentoAtual
    let valorDepartamentoAtual = 0

    for (let i = 0; i < listaProdutos.length; i++) {
        let produtoAtual = listaProdutos[i]
        let nomeDepartamentoProduto = produtoAtual.departamento.nomeDepto

        if (nomeDepartamentoAtual == nomeDepartamentoProduto) {
            valorDepartamentoAtual = valorDepartamentoAtual + (produtoAtual.preco * produtoAtual.qtdEstoque)
        } else {
            if (valorDepartamentoAtual > valorDepartamentoValioso) {
                valorDepartamentoValioso = valorDepartamentoAtual
                nomeDepartamentoValioso = nomeDepartamentoAtual
            }

            nomeDepartamentoAtual = nomeDepartamentoProduto
            valorDepartamentoAtual = produtoAtual.preco * produtoAtual.qtdEstoque
        }
    }

    console.log(`O departamento mais valioso é: ${nomeDepartamentoValioso} e seu valor é de: ${valorDepartamentoValioso}`)


}

departamento_mais_valioso(listaProdutos)


// (10)

function produto_mais_caro(listaProdutos) {
    let valorProdutoMaisCaro = 0;
    let produtoMaisCaro

    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        if (produto.preco > valorProdutoMaisCaro) {
            produtoMaisCaro = produto
            valorProdutoMaisCaro = produto.preco
        }
    }

    console.log(`O produto mais caro é: ${produtoMaisCaro.descricao} cujo o valor é: ${produtoMaisCaro.preco}, do departamento ${produtoMaisCaro.departamento.nomeDepto}`)

}

produto_mais_caro(listaProdutos)

// (11)

function produto_mais_barato(listaProdutos) {
    let valorProdutoMaisBarato = Infinity
    let produtoMaisBarato

    for (let i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]
        if (produto.preco < valorProdutoMaisBarato) {
            produtoMaisBarato = produto
            valorProdutoMaisBarato = produto.preco
        }
    }

    console.log(`O produto mais barato é: ${produtoMaisBarato.descricao} cujo valor é: ${produtoMaisBarato.preco}, do departamento ${produtoMaisBarato.departamento.nomeDepto}`)
}

produto_mais_barato(listaProdutos)







