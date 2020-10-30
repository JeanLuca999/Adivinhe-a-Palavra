const containerPalavraSecreta = document.getElementById('container-palavra-secreta')
const btnVerificar = document.getElementById('verificar')
const btnNovaPalavra = document.getElementById('nova-palavra')
const btnTemaFrutas = document.getElementById('tema-frutas')
const btnTemaTecnologia = document.getElementById('tema-tecnologia')
const acertosDiv = document.getElementById('acertos')
const tentativasDiv = document.getElementById('tentativas')

let palavras = [    'abacate', 'abacaxi', 'açaí', 'acerola', 'amora', 'banana', 'cajá', 'cereja',
                    'goiaba', 'jaca', 'kiwi', 'laranja', 'limão', 'maçã', 'manga', 'mamão', 'caju'
                ]

let palavraSecreta = gerarPalavra()
let acertos = 0, tentativas = 0


btnVerificar.addEventListener('click', ()=>{
    let tentarPalavra = document.getElementById('tentar-palavra').value

    if(tentarPalavra == ''){
        window.alert('Digite uma palavra ou letra!')
        return
    }

    if(tentarPalavra == palavraSecreta){ //verificação da palavra inteira
        for(let i = 0; i < palavraSecreta.length; i++){
            document.getElementsByClassName('letraEscondida')[i].innerHTML = palavraSecreta[i]
        }
        acertosDiv.innerHTML = `Acertos: ${++acertos}`
        tentativasDiv.innerHTML = `Tentativas: ${++tentativas}`
        containerPalavraSecreta.innerHTML = ''
        palavraSecreta = gerarPalavra() 
        esconderPalavra(palavraSecreta)
        return
    }

    for(let i = 0; i < palavraSecreta.length; i++){ //verificação da letra
        if(tentarPalavra == palavraSecreta[i]){
            document.getElementsByClassName('letraEscondida')[i].innerHTML = palavraSecreta[i]
        }
    }
    if(verificaAcerto()){
        acertosDiv.innerHTML = `Acertos: ${++acertos}`
        containerPalavraSecreta.innerHTML = ''
        palavraSecreta = gerarPalavra() //uma nova palavra é gerada ao acertar
        esconderPalavra(palavraSecreta)
    }
    tentativasDiv.innerHTML = `Tentativas: ${++tentativas}`
})


btnNovaPalavra.addEventListener('click', ()=>{
    containerPalavraSecreta.innerHTML = ''
    palavraSecreta = gerarPalavra()
    esconderPalavra(palavraSecreta)
})


btnTemaFrutas.addEventListener('click', ()=>{
    containerPalavraSecreta.innerHTML = ''
    palavras = [   'abacate', 'abacaxi', 'açaí', 'acerola', 'amora', 'banana', 'cajá', 'cereja',
                    'goiaba', 'jaca', 'kiwi', 'laranja', 'limão', 'maçã', 'manga', 'mamão', 'caju'
                ]
    palavraSecreta = gerarPalavra()
    esconderPalavra(palavraSecreta)
})


btnTemaTecnologia.addEventListener('click', ()=>{
    containerPalavraSecreta.innerHTML = ''
    palavras = [   'celular', 'tv', 'rádio', 'fone', 'monitor', 'computador', 'camera',
                    'laser', 'gravador', 'mouse', 'teclado', 'dvd', 'drone', 'cpu'
                ]
    palavraSecreta = gerarPalavra()
    esconderPalavra(palavraSecreta)
})



function gerarPalavra(){
    return palavras[Math.floor( (Math.random() * palavras.length) )]
}

function verificaAcerto(){
    for(let i = 0; i < palavraSecreta.length; i++){
        if(document.getElementsByClassName('letraEscondida')[i].innerHTML == ''){
            return false
        }
    }
    return true
}

function esconderPalavra(palavra){
    for(let i = 0; i < palavra.length; i++){
        let letraEscondida = document.createElement('div')
        letraEscondida.setAttribute('class', 'letraEscondida')
        containerPalavraSecreta.appendChild(letraEscondida)
    }
}

esconderPalavra(palavraSecreta)