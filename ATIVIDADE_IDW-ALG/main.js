function pontos(vitorias,empates,derrota){
  return (vitorias * 3) + (empates * 1) + (derrota * 0);
}

var pontuacoes = [];
if(localStorage.getItem("pontuacoes") !=null){
  pontuacoes = JSON.parse(localStorage.getItem("pontuacoes"));
  pontuacoes_antigas();
}

function pontuacoes_antigas(){
  var pontuacoes_armazenadas = localStorage.getItem("pontuacoes");
  var converte = JSON.parse(pontuacoes_armazenadas);
  var historico = document.getElementById("historico");
  historico.innerHTML = " "; 

  for(var c=0;c<converte.length;c++){
    var p = document.createElement("p");
    p.innerHTML = `Time: ${converte[c]["time"]}  <br> fez: ${converte[c]["total_pontos"]} pontos`;
    historico.append(p);

  }

}
function pontuar(){
  var vitorias = document.getElementById("vitorias").value;
  var empates = document.getElementById("empates").value;
  var derrota = document.getElementById("derrota").value;
  var time =  document.getElementById("time").value;
  var timeElemento =  document.getElementById("time");
  var vitoriasElemento =  document.getElementById("vitorias");
  var empatesElemento =  document.getElementById("empates");
  var derrotaElemento =  document.getElementById("derrota");

  if(!time){
    timeElemento.style.border = '3px solid red';
    alert('Preencha o campo time.')
    return;
  }else{
    timeElemento.style.border = '3px solid black';
  }

  if(!vitorias){
    vitoriasElemento.style.border = '3px solid red';
    alert('Preencha o campo vitorias.')
    return;
  }else{
    timeElemento.style.border = '3px solid black';
  }

  if(!empates){
    empatesElemento.style.border = '3px solid red';
    alert('Preencha o campo empates.')
    return;
  }else{
    timeElemento.style.border = '3px solid black';
  }

  if(!derrota){
    derrotaElemento.style.border = '3px solid red';
    alert('Preencha o campo derrotas.')
    return;
  }else{
    timeElemento.style.border = '3px solid black';
  }

  var total_pontos = pontos(vitorias,empates,derrota);
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = `O ${time} fez ${total_pontos} pontos`;
  
  
  var pontuacao = {
    "time" : time,
    "vitorias": vitorias,
    "empates": empates,
    "derrota": derrota,
    "total_pontos": total_pontos,
  };

  pontuacoes.push(pontuacao);

  var informacoes_pontuacao = JSON.stringify(pontuacoes);
  localStorage.setItem("pontuacoes", informacoes_pontuacao);
  pontuacoes_antigas();
}
function limpar(){
  localStorage.clear();
}