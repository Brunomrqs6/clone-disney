document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]'); //variavel para pegar todos os botões
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })
    
    //Seção de atrações, programação das abas
    for  (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) { //adicionando o evento ao clique dos botões
            const abaAlvo = botao.target.dataset.tabButton; //pegando a aba que o botão está linkado pelo id
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();//aciona a função de remover as abas
            aba.classList.add('shows__list--is--active');//adiciona a classe ativa para a aba ativa
            removeBotaoAtivo(); //aciona a função para remover o botao
            botao.target.classList.add('shows__tabs__button--is--active'); //adiciona a classe ativa ao botao
        })
    }

    //Seção FAQ, Accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function ocultaElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta (elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() { //função para remover o botao ativo
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function escondeTodasAbas() { //função para remover as abas
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i ++) {
        tabsContainer[i].classList.remove('shows__list--is--active')
    }
}