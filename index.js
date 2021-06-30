//muda o background de acordo com a hora do sistema
function background() {
  let hora = new Date().getHours()
  
  let body = document.body
  
  if(hora <= 12) {
    body.style.background = "url('res/img/manhã.jpeg')"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "1500px"
  }
  if(hora >= 13 || hora === 18) {
    body.style.background = "url('res/img/tarde.jpeg')"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "1500px"
  }
  if(hora >= 19) {
    body.style.background = "url('res/img/noite.jpeg')"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "1500px"
  }
}

function comandos() {
  window.open("sobrecmd.html")
}
function sobre() {
  window.open("sobre.html")
}

//função que serve pra indentificar os comandos e mostrar
function start() {
  
  let comando = document.getElementById('cmd')
  
  let texto = (comando.value)
  
  let resultado = document.getElementById('resultado')
  
  var resposta = '';
  
  //ações
  switch(texto) {
    case "olá":
      resposta = " Olá Qual Seu Comando? "
      break;
       case "data": 
         let data = new Date().getDate()
         let mês = new Date().getMonth()
         let ano = new Date().getFullYear()
      
         resposta = data + "-" + mês + "-" + ano
         break;
       case "horas":
         let hr = new Date().getHours()
         let mnt = new Date().getMinutes()
         let sec = new Date().getSeconds()
         
         resposta = hr + " horas " + mnt + " minutos e " + sec + " segundos "
         break;
       case "calcular":
         let visi = document.getElementById('calculadora')
         visi.style.display = "block"
         
         let cmc = document.getElementById('clc')
         cmc.addEventListener('click', calculadora)
        
         resposta = " executando calculadora... "
         break;
       case "idade":
         let i = document.getElementById('idade')
         idade.style.display = "block"
         
         let btn2 = document.getElementById('btn2')
         btn2.addEventListener('click', adivinharidade)
         
         resposta = " executando adivinhador de idade... "
        break;
  }    
    
  
  if((comando.value.length) === 0) {
    resposta = " O Texto Esta Vazio Tente Novamente "
  }
  
  //aqui e onde aparece a resposta definida no switch
  resultado.innerHTML = resposta
}
//função da calculadora
function calculadora() {
  let txt1 = document.getElementById('sp1')
  let txt2 = document.getElementById('sp2')
  
  let operador = document.getElementById('op')
 
  let número = document.getElementById('res')
  
  t1 = parseInt(txt1.value)
  t2 = parseInt(txt2.value)
  
  op = (operador.value)
  
  var resultado = '';
  
  switch(op) {
    case "+":
      let soma = (t1 + t2) 
      resultado = soma
      break;
    case "-":
      let menos = (t1 - t2) 
      resultado = menos
      break;
    case "*":
      let multiplicar = (t1 * t2)
      resultado = multiplicar
      break;
    case "/":
      let dividir = (t1 / t2)
      resultado = dividir
  }
  
 número.innerHTML = " resultado: " + resultado 

}
function fecharclc() {
  let tela = document.getElementById('calculadora')
  tela.style.display = "none"
  
  let resposta = document.getElementById('resultado')
  resposta.innerHTML = " calculadora fechada "
} 
//função que adivinha sua idade
function adivinharidade() {
  let ano = new Date().getFullYear()
  
  let aparecer = document.getElementById('idade')
   aparecer.style.display = "block"
 
   let nas = document.getElementById('nas')
   
   let id = parseInt(nas.value)
   
   if(id > ano) {
     
     alert(" Ano Inválido ")
     return;
   }
   let idtl = (ano - id)
   let resl = document.getElementById('resu')
   
   resl.innerHTML = " idade: " + idtl
} 
function fecharid() {
  let f = document.getElementById('idade')
  f.style.display = "none"
  
  let resposta = document.getElementById('resultado')
  
  resposta.innerHTML = " adivinhador de idade fechado "
}
function htmled() {
  
}