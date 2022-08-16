// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura do retângulo:"));
  let largura = Number(prompt("Digite a largura do retângulo:"));

  console.log(altura*largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let anoNascimento = Number(prompt("Digite o ano em que nasceu:"));

  console.log(anoAtual-anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return(peso/(altura*altura));
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?");
  const idade = Number(prompt("Qual sua idade?"));
  const email = prompt("Qual seu e-mail?");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cores = [];
  cores[0] = prompt("Digite a sua primeira cor favorita?");
  cores[1] = prompt("Digite a sua segunda cor favorita?");
  cores[2] = prompt("Digite a sua terceira cor favorita?");

  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0];
  const ultimo = array[array.length - 1];

  array[0] = ultimo;
  array[array.length - 1] = primeiro;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  return string1 === string2;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Qual ano estamos?");
  const anoNascimento = prompt("Que ano você nasceu?");
  const anoEmissaoRG = prompt("Qual o ano de emissão da sua CNH?");

  idadePessoa = anoAtual - anoNascimento;
  idadeRG = anoAtual - anoEmissaoRG;

  condicao1 = (idadePessoa <= 20) && (idadeRG >= 5);
  condicao2 = (idadePessoa > 20 && idadePessoa <= 50) && (idadeRG >= 10);
  condicao3 = (idadePessoa > 50) && (idadeRG >= 15);

  console.log(`1: ${condicao1} e 2: ${condicao2} e 3: ${condicao3}`);
  console.log(condicao1 || condicao2 || condicao3);
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ( (ano % 400 === 0) || ((ano % 4 === 0) && (ano % 100 !== 0)) );

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorIdade = prompt("Você tem mais de 18 anos? sim ou nao");
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? sim ou nao");
  const disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim ou nao");

  console.log( (maiorIdade === "sim") && (ensinoMedioCompleto === "sim") && (disponibilidadeHorario === "sim") );
}
