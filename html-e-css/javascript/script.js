/*
        Declarando variáveis
        var nome;
        nome = 'Ameinda e Marry';
        var idade;
        idade = 29;
        var peso = 61.4
        alert("Hello World! " + nome + " sua idade é: " + idade);
        alert("Peso: " + peso);
        alert(10 + 4);*/
        function exibirAlerta() {
            alert("Eiiiiiie povo!");
        }
        function soma(a , b) { 
            var a = parseInt(prompt("Informe um valor: "));  //Entrada
            var b = parseInt(prompt("Informe um valor:"));
            var soma = a + b;

            alert(soma);
        }

        function imc(){
            var peso;
            var altura;

            peso = parseFloat(prompt("Informe o peso: "));
            altura = parseFloat(prompt("Informe a altura:"));

            var imc = peso/(altura * altura);

            alert("Seu imc é: + imc")
        }

        function eMaior(){
            var idade = parseInt(prompt("Informe sua idade: "));

            if (idade > 17) {
                alert("Maior de idade");
            }else {
                alert("Menor de idade");
            }    
            
        }

        function tipoFruta() {
            var fruta = prompt("Informe alguma fruta: ")

            switch (fruta) {
                case 'laranja':
                    alert('Essa fruta é cítrica');
                    break;

                case 'mamao':
                    alert("Essa fruta é doce")
                    break;    
                default:
                    alert('Fruta não cadastro');
                    break;
            }
        }

        function conteAte10(){
            var num = 0;
                while(num < 11) {
                    alert(num)
                    num++;
                }
        }

        function contaAte10_2() {
            var num = 0;
            do {
                alert(num);
            num++; 
        }while (num < 10) {
        }
        }

        function desejaContinuar() {
            var resposta;

            do{
                soma();
                resposta = prompt("Deseja continuar? ");
            } while (resposta == "sim");
        }

        function contaAte10_3() {
            for(var num = 0; num < 11; num++){
                alert(num);
            }
        }

        function calculadora(){
            var operacao = prompt("Deseja fazer qual operação?");
            var num1 = parseFloat(prompt("Informe o primeiro número: "));
            var num2 = parseFloat(prompt("Informe o segundo número: "));

            if(operacao == "soma") {
                alert(num1 + num2);
            } else {
                if (operacao == 'subtracao'){
                    alert(num1 - num2);
                } else {
                    if (operacao == 'multiplicacao'){
                        alert(num1 * num2);
                    } else {
                        if (operacao == 'divisao'){
                            alert(num1/num2);
                        } else {
                            alert('Operação inválida');
                        }        
                }   }
            }
        }


        function calculadora2() {
            var operacao = prompt("Deseja fazer qual operação?");
            var num1 = parseFloat(prompt("Informe o primeiro número: "));
            var num2 = parseFloat(prompt("Informe o segundo número: "));

            switch (operacao) {
                case 'soma':
                    alert(num1 + num2);
                    break;
                case 'subtracao':
                    alert(num1 - num2);
                    break;
                case 'multiplicacao':
                    alert(num1 * num2);
                    break;
                case 'divisao':
                    alert(num1/num2);
                    break;                
            
                default:
                    alert("Operação Inválida");
                    break;
            }
        }
        
        function vetor(){
            var vertorNum = [1,2,3]
            /*
            1. Inicia o contador
            2. Condição de parada
            3. Incremento de contador
            */
            var soma = 0;
            for (var cont = 0;cont < vertorNum.length; cont++){
                soma += vertorNum[cont];
            }
            
            alert("soma de " + vertorNum.length + " elementos: " + soma)
        }
        
        function lervetor() {
            do{
                var vetor = []
                var valor = parseInt(prompt("Informe o valor: "));
                vetor.push(valor);
            }while (valor != -1);

            return vetor;
        }

        function ultimaposicaovetor() {
            var a = lervetor();
            alert(a[a.lenght - 2]);
        }

        function tabuada7(){
            var cont = 0; // variavel contadora
            while(cont < 11){
                var multiplicacao = 7 * cont;
                alert('7 x ' + cont + ' = ' + multiplicacao);
                cont++;
            }
        }

        function tabuada(valor){
            //tabuada generica usando DO...WHILE
            var cont = 0;
            do {
                 var multiplicacao = cont * valor;
                alert(valor + ' x ' + cont + ' = ' + multiplicacao);
                cont++;
            } while(cont < 11);
        }

        function testeTabuada(){
            tabuada(parseInt(prompt("Informe um valor: ")));
        }

        function exibeFrutas(){
            var frutas = ["manga", "maça", "laranja"];
            for(var cont = 0; cont < frutas.length; cont++){
                alert(frutas[cont]);
            }
        }

        function inverteVetor(){
            var vetorInvertido = [];

            for(cont = vetor.length - 1; cont > -1; cont--){
                vetorInvertido.push(vetor[cont]);
            }
            return vetorInvertido;
        }

        function testeInverteVetor(){
            var vetor = [1,2,3,4,5,6,7,8,9,10];
            var vetorInvertido = inverteVetor(vetor);
            for(var cont = 0; cont < vetor.lenght; cont++){
                alert(vetorInvertido[cont]);
            }

        }

        function testeInverteVeto2(){
            var vetor = ["banana", "maça", "pera"];
            vetor.reverse();
            for(var cont = 0; cont < vetor.lenght - 1; cont++){
                alert(vetor[cont]);
            }
        }

        function alteraValorH1(){
            //var valorTag = document.getElementById("titulo").innerHTML;
            //alert(valrTag);

            document.getElementById("titulo").innerHTML = "Cabeçalho Alterado"
        }