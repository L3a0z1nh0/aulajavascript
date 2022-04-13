

/*function clicou(){
	document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar</b>";

	//console.log(document.getElementById('agradecimento'));
	//alert("Obrigado por clicar");
}
*/

function redirecionar(){
	window.open("https://developer.mozilla.org/pt-BR/");				 // abre em outra janela	
	window.location.href = "https://developer.mozilla.org/pt-BR/";		// abre na mesma janela
}

/*
function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	elemento.innerHTML = "Obrigado por passar o mouse"
	//alert ("trocar texto");
}


function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
	alert("pagina carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}

/*function soma(n1, n2){
	return n1 + n2;
}

function validaIdade(idade){
	var validar;
	if (idade >= 18){
		validar = true
	}else{
		validar = false
	}
	return validar;
}
	var idade = prompt("Qual sua idade");
	console.log(validaIdade(idade));
*/

/*
function soma(n1, n2){
	return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace('Vai Japao', "Japao", "Brasil"));
*/


/*var var1 = "Simplicity is the ultimate sophistication.";
var var2 = "Leonardo da Vinci:"
console.log(var1 + var2 + 1425 + "-" + 1519);
*/

/*	Trabalhando com datas
var d = new Date();
//alert(d.); 					// traz a data completa
//alert(d.getMonth()+1);		// traz o mes exato
//alert(d.getMinutes());		// traz o minuto exato
//alert(d.getDay());			// traz o dia exato
alert(d.getHours());			// traz a hora exata
*/


/*
var count;
for(count=0; count <= 5; count++){		// FOR pemite fazer estrutura de repetição
	alert(count);
};
*/


/*
var count = 0;
while (count <= 5) {	// WHILE pemite fazer estrutura de repetição
	console.log(count);
	//count = count + 1;
	alert(count);
	count ++;
};
*/


/* Condicionais
var idade = prompt('Qual sua idade'); //com ajuda do PROMPT coletamos a informação necessaria e dai fazer a comparação
//var idade = 18;
if(idade >= 18){					// IF usada para condidicional
	alert('maior de idade');
}else{
	alert('menor de idade');
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maça", "pera", "laranja"];
//console.log(lista[1]);
//alert(lista[1]);
//lista.push("uva"); 	// .PUSH adiciona um elemento
//console.log(lista);
//lista.pop();  		//.POP retira o ultimo elemento da lista
//console.log(lista);


//console.log(lista.length); 			 // length mostra a quantidade de elementos que temos na lista
//console.log(lista.reverse()); 		// reverse traz os elementos ao contrario na lista
//console.log(lista[0]); 				// imprime o primeiro elemento "maça"
//console.log(lista.toString()[0]); 	// imprime o primeiro elemento da string "m"
//console.log(lista.join(" - ")); 		// .JOIN alem de transformar em string ajuda a colocar caracteres que desejamos
//console.log(lista.join(" | ")); 		// .JOIN alem de transformar em string ajuda a colocar caracteres que desejamos


/*
var nome = "Fanny Tejada";
var idade = 5;
var idade2 = 3;
var frase = "Japao é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade * idade2);
console.log(frase);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase.replace("Japao", "Brasil"));
alert(frase.replace("Japao", "Brasil"));
*/