function tocaSom (seletorAudio) { //Função para executar o som.
    const elemento = document.querySelector(seletorAudio); //Seleciona o ID do áudio e guarda na constante 'elemento'.

    if (elemento !== null && elemento.localName === 'audio') { //Verifica se o elemento não é nulo e se é uma tag 'áudio'.
        elemento.play(); //Executa o play do áudio.
    } else { //Se não.
        console.log('Elemento não encontrado ou seletor inválido!'); //Retorna mensagem no console.
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //Seleciona todas as classes que chamam 'tecla' (botões) e retorna-o como Array. 
//Essa info é armazenada em 'listaDeTeclas'.

for (let i = 0; i < listaDeTeclas.length; i++) { //Itera por todo o Array até o comprimento.

    const tecla = listaDeTeclas[i]; //Retorna a linha do código com o índice i (Iteração atual do laço for).
    const instrumento = tecla.classList[1]; //Identifica o instrumento selecionado e retorna o classList (Nome da classe identificadora).
    const seletorAudio = `#som_${instrumento}`; //Seleciona o nome da classe (id) correta concatenando os nomes para localizá-lo na TAG áudio.

    tecla.onclick = function () { //Chama a função anônima ao clicar no botão.
        tocaSom(seletorAudio); //Toca o som de acordo com a const 'seletorAudio'.
    }

    tecla.onkeydown = function (event) { //Chama a função anônima ao pressionar qualquer tecla do teclado.
        if (event.code === "Space" || event.code === "Enter") { //Se a tecla pressionada for "Space" ou "Enter".
            tecla.classList.add('ativa'); //Adiciona a class 'ativa' no botão.
        }
    }

    tecla.onkeyup = function () { //Chama a função anônima ao soltar qualquer tecla do teclado.
        tecla.classList.remove('ativa'); //Remove a class 'ativa' ao botão.
    }
}