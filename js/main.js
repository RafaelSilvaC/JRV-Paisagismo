
/* =========================================================
   JRV PAISAGISMO
   Arquivo principal: js/main.js
========================================================= */


/* =========================================================
   1. DADOS DA EMPRESA
   ATENÇÃO: substitua pelos dados reais da empresa.
========================================================= */

const CONFIG = {
    whatsapp: '5571900000000',
    telefone: '(71) 90000-0000',
    email: 'contato@exemplo.com',
    endereco: 'Salvador - BA',
    instagram: 'https://instagram.com/'
};


/* =========================================================
   2. PORTFÓLIO
   Imagens ilustrativas hospedadas no Unsplash.
========================================================= */

const PROJETOS = [

    {
        t: 'Jardim residencial',
        c: 'Residenciais',
        img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85',
        alt: 'Jardim residencial com plantas e vegetação'
    },

    {
        t: 'Jardim empresarial',
        c: 'Empresariais',
        img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85',
        alt: 'Paisagismo com vegetação ornamental'
    },

    {
        t: 'Áreas verdes de condomínio',
        c: 'Condomínios',
        img: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85',
        alt: 'Vegetação verde e plantas ornamentais'
    },

    {
        t: 'Revitalização de canteiros',
        c: 'Revitalização',
        img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85',
        alt: 'Plantas e folhagens ornamentais'
    },

    {
        t: 'Jardim de entrada',
        c: 'Residenciais',
        img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=85',
        alt: 'Jardim com vegetação natural'
    },

    {
        t: 'Paisagismo de fachada',
        c: 'Empresariais',
        img: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=1000&q=85',
        alt: 'Paisagismo e composição de plantas'
    }

];


/* =========================================================
   3. COMPARAÇÕES ANTES E DEPOIS
   Imagens ilustrativas para demonstração.
========================================================= */

const COMPARACOES = [

    {
        t: 'Exemplo de jardim residencial',

        antes: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85',

        depois: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=85'
    },

    {
        t: 'Exemplo de área verde',

        antes: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85',

        depois: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85'
    },

    {
        t: 'Exemplo de paisagismo',

        antes: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=1200&q=85',

        depois: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=85'
    }

];


/* =========================================================
   4. NAVEGAÇÃO
========================================================= */

const PAGINAS = [

    ['index.html', 'Início'],
    ['sobre.html', 'Sobre'],
    ['servicos.html', 'Serviços'],
    ['portfolio.html', 'Portfólio'],
    ['antes-depois.html', 'Antes e depois'],
    ['contato.html', 'Contato']

];


/* =========================================================
   5. FUNÇÕES AUXILIARES
========================================================= */

const atual =
    location.pathname.split('/').pop() || 'index.html';


const wa = (
    txt = 'Olá! Gostaria de solicitar um orçamento.'
) => {

    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(txt)}`;

};


const $ = s => document.querySelector(s);


/* =========================================================
   6. CABEÇALHO E MENU PRINCIPAL
========================================================= */

const topo = $('#topo');

if (topo) {

    topo.innerHTML = `

        <header>

            <div class="wrap nav">

                <a
                    class="logo"
                    href="index.html"
                    aria-label="JRV Paisagismo, página inicial"
                >
                    JRV
                </a>


                <button
                    class="burger"
                    aria-expanded="false"
                    aria-controls="menu"
                    aria-label="Abrir menu"
                    type="button"
                >
                    ☰
                </button>


                <nav aria-label="Principal">

                    <ul id="menu">

                        ${PAGINAS.map(([h, t]) => `

                            <li>

                                <a
                                    href="${h}"
                                    ${h === atual ? 'aria-current="page"' : ''}
                                >
                                    ${t}
                                </a>

                            </li>

                        `).join('')}

                    </ul>

                </nav>

            </div>

        </header>

    `;

}


/* =========================================================
   7. RODAPÉ E CONTATO
========================================================= */

const rodape = $('#rodape');

if (rodape) {

    rodape.innerHTML = `

        <footer>

            <div class="wrap duas">

                <div>

                    <strong style="color:#fff">
                        JRV Paisagismo
                    </strong>

                    <br>

                    Paisagismo e manutenção de áreas verdes.

                    <br>

                    ${CONFIG.endereco}

                </div>


                <div>

                    <a href="tel:${CONFIG.telefone.replace(/\D/g, '')}">
                        ${CONFIG.telefone}
                    </a>

                    <br>

                    <a href="mailto:${CONFIG.email}">
                        ${CONFIG.email}
                    </a>

                    <br>

                    <a
                        href="${CONFIG.instagram}"
                        target="_blank"
                        rel="noopener"
                    >
                        Instagram
                    </a>

                </div>

            </div>


            <p
                class="wrap"
                style="margin-top:24px;font-size:.85rem"
            >
                © ${new Date().getFullYear()} JRV Paisagismo.
                Todos os direitos reservados.
            </p>

        </footer>


        <a
            class="wa"
            href="${wa()}"
            target="_blank"
            rel="noopener"
            aria-label="Falar pelo WhatsApp"
        >
            💬
        </a>

    `;

}


/* =========================================================
   8. LINKS DO WHATSAPP
========================================================= */

document.querySelectorAll('[data-wa]').forEach(a => {

    a.href = wa();

});


/* =========================================================
   9. MENU RESPONSIVO
========================================================= */

const burger = $('.burger');

const menu = $('#menu');


if (burger && menu) {

    burger.onclick = () => {

        const aberto = menu.classList.toggle('open');

        burger.setAttribute(
            'aria-expanded',
            String(aberto)
        );

        burger.setAttribute(
            'aria-label',
            aberto ? 'Fechar menu' : 'Abrir menu'
        );

    };


    menu.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            menu.classList.remove('open');

            burger.setAttribute('aria-expanded', 'false');

            burger.setAttribute('aria-label', 'Abrir menu');

        });

    });

}


/* =========================================================
   10. PORTFÓLIO COM FILTROS E LIGHTBOX
========================================================= */

const gal = $('#galeria');


if (gal) {

    const filtros = $('#filtros');

    const lb = $('#lb');

    const cats = [

        'Todos',

        ...new Set(PROJETOS.map(p => p.c))

    ];


    /* Criação dos filtros */

    filtros.innerHTML = cats.map((c, i) => `

        <button
            type="button"
            aria-pressed="${i === 0}"
        >
            ${c}
        </button>

    `).join('');


    /* Exibição dos projetos */

    const mostrar = filtro => {

        const projetos = PROJETOS.filter(p => {

            return filtro === 'Todos' || p.c === filtro;

        });


        gal.innerHTML = projetos.map(p => `

            <figure>

                <button
                    type="button"
                    data-src="${p.img}"
                    aria-label="Ampliar: ${p.t}"
                >

                    <img
                        loading="lazy"
                        src="${p.img}"
                        alt="${p.alt || p.t}"
                    >

                </button>


                <figcaption>

                    ${p.t}

                    <small>
                        ${p.c}
                    </small>

                </figcaption>

            </figure>

        `).join('');

    };


    mostrar('Todos');


    /* Funcionamento dos filtros */

    filtros.onclick = e => {

        const botao = e.target.closest('button');

        if (!botao) return;


        filtros.querySelectorAll('button').forEach(b => {

            b.setAttribute(
                'aria-pressed',
                String(b === botao)
            );

        });


        mostrar(botao.textContent.trim());

    };


    /* Ampliação das fotografias */

    gal.onclick = e => {

        const botao = e.target.closest('[data-src]');

        if (!botao || !lb) return;


        const imagem = lb.querySelector('img');

        imagem.src = botao.dataset.src;

        imagem.alt = botao.getAttribute('aria-label') || 'Foto ampliada';

        lb.showModal();

    };


    /* Fechamento da imagem ampliada */

    if (lb) {

        lb.onclick = e => {

            if (e.target === lb) {

                lb.close();

            }

        };

    }

}


/* =========================================================
   11. COMPARADOR ANTES E DEPOIS
========================================================= */

const cmp = $('#comparacoes');


if (cmp) {

    cmp.innerHTML = COMPARACOES.map(c => `

        <div class="cmp">

            <h3>
                ${c.t}
            </h3>


            <div class="ba">

                <div class="cam depois">

                    <img
                        loading="lazy"
                        src="${c.depois}"
                        alt="${c.t}: depois"
                    >

                </div>


                <div class="cam antes">

                    <img
                        loading="lazy"
                        src="${c.antes}"
                        alt="${c.t}: antes"
                    >

                </div>


                <div class="barra"></div>


                <input
                    type="range"
                    min="0"
                    max="100"
                    value="50"
                    aria-label="Comparar antes e depois de ${c.t}"
                >

            </div>

        </div>

    `).join('');


    /* Controle deslizante */

    cmp.addEventListener('input', e => {

        if (e.target.matches('input[type="range"]')) {

            const comparador = e.target.closest('.ba');

            comparador.style.setProperty(
                '--p',
                e.target.value + '%'
            );

        }

    });

}


/* =========================================================
   12. FORMULÁRIO DE CONTATO
========================================================= */

const f = $('#f');


if (f) {

    f.onsubmit = e => {

        e.preventDefault();


        /* Captura dos valores */

        const v = n => f.elements[n].value.trim();

        const er = {};


        /* Validação do nome */

        if (v('nome').length < 3) {

            er.nome = 'Informe seu nome completo.';

        }


        /* Validação do telefone */

        if (
            v('telefone').replace(/\D/g, '').length < 10
        ) {

            er.telefone = 'Informe o telefone com DDD.';

        }


        /* Validação do e-mail */

        if (
            !/^\S+@\S+\.\S+$/.test(v('email'))
        ) {

            er.email = 'Informe um e-mail válido, como nome@exemplo.com.';

        }


        /* Validação do serviço */

        if (!v('servico')) {

            er.servico = 'Escolha o serviço desejado.';

        }


        /* Validação da mensagem */

        if (v('mensagem').length < 10) {

            er.mensagem = 'Escreva ao menos 10 caracteres.';

        }


        /* Exibição dos erros */

        [

            'nome',
            'telefone',
            'email',
            'servico',
            'mensagem'

        ].forEach(n => {

            const campoErro = $('#e-' + n);

            if (campoErro) {

                campoErro.textContent = er[n] || '';

            }

        });


        /* Resultado da validação */

        const ok = $('#ok');

        const temErros = Object.keys(er).length > 0;


        if (ok) {

            ok.hidden = temErros;

        }


        /* Envio pelo WhatsApp */

        if (!temErros) {

            const mensagem =

                `Olá! Sou ${v('nome')}. ` +

                `Serviço: ${v('servico')}. ` +

                `${v('mensagem')} ` +

                `Contato: ${v('telefone')} | ${v('email')}`;


            window.open(
                wa(mensagem),
                '_blank',
                'noopener'
            );

        }

    };

}


/* =========================================================
   13. PREENCHIMENTO AUTOMÁTICO DO SERVIÇO
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    const parametros = new URLSearchParams(location.search);

    const servico = parametros.get('s');

    const campoServico = $('#servico');


    if (servico && campoServico) {

        const opcao = Array.from(campoServico.options).find(
            option => option.text.trim() === servico
        );

        if (opcao) {

            campoServico.value = opcao.value;

        }

    }

});


/* =========================================================
   FIM DO ARQUIVO MAIN.JS
   JRV PAISAGISMO
========================================================= */
