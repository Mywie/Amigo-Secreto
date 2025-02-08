var amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('#nome').value;
    if(nome == ''){
        alert('Por favor insira um nome.');
        return;
    }
    amigos.push(nome);
    console.log(amigos);
    document.querySelector('#nome').value = '';
}

function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoSorteado);
}
function mostrarResultado(){
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = amigoSorteado;
}





