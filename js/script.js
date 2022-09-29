let menu = document.getElementById("menu")

function mostrarMenu() {
  if (window.getComputedStyle(menu).display != 'flex') {
    menu.style.display = 'flex'
  } else {
    menu.style.display = 'none'
  }
  //event.preventDefault()
}




function mostrarMenuJquery(){
    $("#menu").toggle()
}




// DOM : document object model (manipula elementos da pagina)
function renderizarProdutos() {
    let secaoProdutos = document.getElementById("secao_produtos")

    let listaProdutos = [
        {
            nome: "Mouse Gamer RGB",
            imagem: "./img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Teclado Mecânico Gamer RGB",
            imagem: "./img/T1 1.png",
            descricao: "Esse teclado possui Switches Blue",
            preco: 229.90
        },
        {
            nome: "Headset Gamer RGB",
            imagem: "./img/T1 1.png",
            descricao: "Esse headset possui microfone integrado de ótima qualidade",
            preco: 199.90
        },
        {
            nome: "Mousepad Gamer RGB",
            imagem: "./img/T1 1.png",
            descricao: "Esse mousepad é do tipo Speed e possui RGB nas laterais",
            preco: 129.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "./img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "./img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "./img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "./img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        }        
    ]

    // Template Strings, usa crase como separador = ``
    let template = ""

    for(let index = 0; index < listaProdutos.length; index++) {
        template = template + `
        <div class="card">
            <img src="${ listaProdutos[index].imagem }" alt="">
            <h3>${ listaProdutos[index].nome }</h3>
            <p>${ listaProdutos[index].descricao }</p>
            <p>R$${ listaProdutos[index].preco }</p>
            <a href="#">Comprar</a>
        </div>
        `
    }

    secaoProdutos.innerHTML = template
}

$(document).ready(function() {
    
    let listaSlides = ["banner-f1","banner-cs", "banner-lol"]
    let slideAtual = 1

    function mudarSlide() {
        console.log(slideAtual)


        //remover slide anterior
        if (slideAtual > 0) {
            $(".banner").removeClass(listaSlides[slideAtual - 1])
        } else{
            $(".banner").removeClass(listaSlides[(listaSlides.length - 1)])
        }


        //mostra o slide atual da lista de slides
        $(".banner").addClass(listaSlides[slideAtual])


        //incrementa a variavel slideAtual
        slideAtual++

        if (slideAtual > (listaSlides.length - 1) ) {
            slideAtual = 0
        }
    }

    setInterval(mudarSlide, 2000)

})