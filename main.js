const respostas = [
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
        "myVar = var;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "# Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário"
      ],
      correta: 0
    },
    {
      pergunta: "Como acessar o primeiro elemento de um array em JavaScript?",
      respostas: [
        "array[0]",
        "array.first()",
        "array.getElement(0)",
        "array[1]"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar um elemento ao HTML",
        "Adicionar um ouvinte de eventos a um elemento",
        "Adicionar um estilo ao documento",
        "Adicionar uma função ao código"
      ],
      correta: 1
    },
    {
      pergunta: "Como realizar um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i < 10; i++)",
        "for (i = 0; i < 10)",
        "while (i < 10; i++)",
        "for (i < 10; i++)"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Um tipo de laço de repetição",
        "Uma forma de elevar um elemento na página",
        "A elevação de declarações para o topo do contexto de execução",
        "Um método de animação"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos são iguais",
        "'===' compara apenas os valores, '==' compara os valores e os tipos",
        "'==' compara apenas os valores, '===' compara os valores e os tipos",
        "'==' é usado apenas para strings, '===' para outros tipos de dados"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o objeto 'document' em JavaScript?",
      respostas: [
        "Um objeto que representa o documento HTML",
        "Um objeto para criar documentos de texto",
        "Um objeto para acessar o sistema de arquivos",
        "Um objeto para manipulação de imagens"
      ],
      correta: 0
    },
    {
      pergunta: "Como é possível evitar o vazamento de memória em JavaScript?",
      respostas: [
        "Utilizando a palavra-chave 'leak'",
        "Usando apenas variáveis globais",
        "Removendo referências não utilizadas ou definindo-as como null",
        "Aumentando o tamanho da memória do navegador"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é utilizado para realizar requisições HTTP assíncronas em JavaScript?",
      respostas: [
        "fetch()",
        "requestAsync()",
        "httpRequest()",
        "ajax()"
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = respostas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + '   de   ' + totalDePerguntas
  
  //loop ou reptição
  for(const item of respostas) {
  
    //clonando o item da variavel e a usando
    const quizitem = template.content.cloneNode(true)
  
    //procura as perguntas
    quizitem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
  
      //achando o dt
      const dt = quizitem.querySelector('dl dt').cloneNode(true)
  
      //atribuir ao dt as respostas escolhidas
      dt.querySelector('span').textContent = resposta
  
      //atribuir o input as respostas
      dt.querySelector('input').setAttribute('name', 'pergunta-' + respostas.indexOf(item))
  
      //ajustar o valor ou indice de cada resposta 
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      //saber se o valor escolhido está correto ao clicar na resposta
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta //true ou false
  
        //caso eu acerte duas questões, mais eu acabe mudando de opinião o numero de acertos cai 1
        corretas.delete(item)
  
        //se eu acertei
        if(estaCorreta) {
          //caso esteja correta ele ira adicionar o item
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
      }
  
      quizitem.querySelector('dl').appendChild(dt)
    }
  
    //remover
    quizitem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizitem)
  }
