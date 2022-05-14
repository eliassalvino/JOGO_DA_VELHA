var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor');
var quadrados = document.getElementsByClassName('quadrado');
var jogadorX = null;
var jogadorO = null;
var parada = false;

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function () {
    location.reload();
});



mudarJogador('X');



function escolherQuadrado(id) {
    console.log('clicou no botao ' + id);

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }
    if(parada === true){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogadorX = jogadorX + 1;
        var winner = checaVencedor(jogadorX, 'X');
        if(winner === true){
            parada = true;
            return;
        }else {
            jogador = 'O';
        }
    } else {
        jogadorO = jogadorO + 1;
        var winner = checaVencedor(jogadorO, 'O');
        if(winner === true){
            parada = true;d
            return;
        } else{
            jogador = 'X';
        }
    }
    mudarJogador(jogador);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}


function checaVencedor(score, P) {
    var ganhou = false;
    if (score >= 3 && P === 'X') {   /*Se o jogador X fizer 3 pontos ou mais, o jogo vai verificar se ele já ganhou*/
        if (document.getElementById('1').innerHTML === 'X' && document.getElementById('2').innerHTML === 'X' && document.getElementById('3').innerHTML === 'X') {
            console.log('Jogador X venceu!');
            mudacorQuadrado(1, 2, 3);
            mudarVencedor('X');
            alert('Jogador X venceu!');
            ganhou = true;
        }
        else if (document.getElementById('4').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && document.getElementById('6').innerHTML === 'X') {
            console.log('Jogador X venceu!');
            mudacorQuadrado(4, 5, 6);
            mudarVencedor('X');
            alert('Jogador X venceu!');
            ganhou = true;
        }
        else if (document.getElementById('7').innerHTML === 'X' && document.getElementById('8').innerHTML === 'X' && document.getElementById('9').innerHTML === 'X') {
            console.log('Jogador X venceu!');
            mudacorQuadrado(7, 8, 9);
            mudarVencedor('X');
            alert('Jogador X venceu!');
            ganhou = true;
        }
        else if (document.getElementById('1').innerHTML === 'X' && document.getElementById('4').innerHTML === 'X' && document.getElementById('7').innerHTML === 'X') {
            console.log('Jogador X venceu!');
            mudacorQuadrado(1, 4, 7);
            mudarVencedor('X');
            alert('Jogador X venceu!');
            ganhou = true;
        }
        else if (document.getElementById('2').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && document.getElementById('8').innerHTML === 'X') {
            console.log('Jogador X venceu!');
            mudacorQuadrado(2, 5, 8);
            mudarVencedor('X');
            alert('Jogador X venceu!');
            ganhou = true;
        }
        else if (document.getElementById('3').innerHTML === 'X' && document.getElementById('6').innerHTML === 'X' && document.getElementById('9').innerHTML === 'X') {
            console.log('Jogador X venceu!');
            mudacorQuadrado(3, 6, 9);
            mudarVencedor('X');
            alert('Jogador X venceu!');
            ganhou = true;
        }
        else if (document.getElementById('1').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && document.getElementById('9').innerHTML === 'X') {
            console.log('Jogador X venceu!');
            mudacorQuadrado(1, 5, 9);
            mudarVencedor('X');
            alert('Jogador X venceu!');
            ganhou = true;
        }
        else if (document.getElementById('3').innerHTML === 'X' && document.getElementById('5').innerHTML === 'X' && document.getElementById('7').innerHTML === 'X') {
            console.log('Jogador X venceu!');
            mudacorQuadrado(3, 5, 7);
            mudarVencedor('X');
            alert('Jogador X venceu!');
            ganhou = true;
        }

    } else if (score >= 3 && P === 'O') {  /*Se o jogador O fizer 3 pontos ou mais, o jogo vai verificar se ele já ganhou*/
        if (document.getElementById('1').innerHTML === 'O' && document.getElementById('2').innerHTML === 'O' && document.getElementById('3').innerHTML === 'O') {
            console.log('Jogador O venceu!');
            mudacorQuadrado(1, 2, 3);
            mudarVencedor('O');
            alert('Jogador O venceu!');
            ganhou = true;
        }
        else if (document.getElementById('4').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && document.getElementById('6').innerHTML === 'O') {
            console.log('Jogador O venceu!');
            mudacorQuadrado(4, 5, 6);
            mudarVencedor('O');
            alert('Jogador O venceu!');
            ganhou = true;
        }
        else if (document.getElementById('7').innerHTML === 'O' && document.getElementById('8').innerHTML === 'O' && document.getElementById('9').innerHTML === 'O') {
            console.log('Jogador O venceu!');
            mudacorQuadrado(7, 8, 9);
            mudarVencedor('O');
            alert('Jogador O venceu!');
            ganhou = true;
        }
        else if (document.getElementById('1').innerHTML === 'O' && document.getElementById('4').innerHTML === 'O' && document.getElementById('7').innerHTML === 'O') {
            console.log('Jogador O venceu!');
            mudacorQuadrado(1, 4, 7);
            mudarVencedor('O');
            alert('Jogador O venceu!');
            ganhou = true;
        }
        else if (document.getElementById('2').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && document.getElementById('8').innerHTML === 'O') {
            console.log('Jogador O venceu!');
            mudacorQuadrado(2, 5, 8);
            mudarVencedor('O');
            alert('Jogador O venceu!');
            ganhou = true;
        }
        else if (document.getElementById('3').innerHTML === 'O' && document.getElementById('6').innerHTML === 'O' && document.getElementById('9').innerHTML === 'O') {
            console.log('Jogador O venceu!');
            mudacorQuadrado(3, 6, 9);
            mudarVencedor('O');
            alert('Jogador O venceu!');
            ganhou = true;
        }
        else if (document.getElementById('1').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && document.getElementById('9').innerHTML === 'O') {
            console.log('Jogador O venceu!');
            mudacorQuadrado(1, 5, 9);
            mudarVencedor('O');
            alert('Jogador O venceu!');
            ganhou = true;
        }
        else if (document.getElementById('3').innerHTML === 'O' && document.getElementById('5').innerHTML === 'O' && document.getElementById('7').innerHTML === 'O') {
            console.log('Jogador O venceu!');
            mudacorQuadrado(3, 5, 7);
            mudarVencedor('O');
            alert('Jogador O venceu!');
            ganhou = true;
        }
    }
    return ganhou;
}

function mudacorQuadrado(quad1, quad2, quad3){
    document.getElementById(quad1).style.background = '#0f0';
    document.getElementById(quad2).style.background = '#0f0';
    document.getElementById(quad3).style.background = '#0f0';
}

function mudarVencedor(venceuu){
    vencedorSelecionado.innerHTML = venceuu;
}