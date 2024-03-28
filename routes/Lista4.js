const express = require('express')
const router = express.Router()

router.post('/ex1', function(req, res) {
    const { numeros } = req.body;

    const arrayNumeros = numeros.map(num => Number(num));

    let soma = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i];
    }

    const media = soma / arrayNumeros.length;

    res.json({ media });
});

router.post('/ex2', function(req, res) {

    const { valores } = req.body;

    let maior = valores[0];
    let menor = valores[0];

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i];
        }
        if (valores[i] < menor) {
            menor = valores[i];
        }
    }
    res.json({ maior, menor });
});

router.get('/ex3', function(req, res) {

    let numeros = [];
    for (let i = 1; i <= 10; i++) {
      numeros.push(i);
    }
    res.send(numeros);
  });

  router.get('/ex4', function(req, res) {

  let numeros = [];
  for (let i = 10; i >= 1; i--) {
    numeros.push(i);
  }
  res.send(numeros);
});

router.get('/ex5', function(req, res) {

let numeros = [];
  let count = 0;
  let num = 101;

  while (count < 10) {
    numeros.push(num);
    num++;
    count++;
  }
  
  res.send(numeros);
});

router.post('/ex6', function(req, res) {
    const { valores } = req.body;

    if (!Array.isArray(valores) || valores.length !== 10) {
        return res.status(400).json({ error: 'Forneça um array de 10 números.' });
    }
    const soma = valores.reduce((somaAtual, valorAtual) => somaAtual + valorAtual, 0);

    res.json({ soma });
});

router.post('/ex7', function(req, res) {

const { n } = req.body;

    const numerosPares = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }
    res.json({ numerosPares });
});

router.post('/ex8', function(req, res) {
const { valores } = req.body;

    let negativos = 0;
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0) {
            negativos++;
        }
    }
    res.json({ negativos });
});

router.post('/ex9', function(req, res) {

    const { valores } = req.body;

    const negativos = valores.filter(valor => valor < 0);

    res.json({ negativos });
});

router.post('/ex10', function(req, res) {
const { valores } = req.body;

    let dentroIntervalo = 0;
    let foraIntervalo = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= 10 && valores[i] <= 20) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }

    res.json({ dentroIntervalo, foraIntervalo });
});

router.post('/ex11', function(req, res) {
const { valores } = req.body;

    const soma = valores.reduce((somaAtual, valorAtual) => somaAtual + valorAtual, 0);
    const media = soma / valores.length;

    res.json({ media });

});
router.post('/ex12', function(req, res) {
const { valores } = req.body;

    const soma = valores.reduce((somaAtual, valorAtual) => somaAtual + valorAtual, 0);
    const media = soma / valores.length;

    res.json({ media });
});

router.post('/ex13', function(req, res) {
    const { valores } = req.body;
    const triplos = [];

    for (let i = 0; i < valores.length; i++) {
        triplos.push(valores[i] * 3);
    }
    res.json({ triplos });
});

router.post('/ex14', function(req, res) {
const { numeros } = req.body;
    const dobros = [];

    for (let i = 0; i < numeros.length; i++) {
        dobros.push(numeros[i] * 2);
    }
    res.json({ dobros });
});

router.post('/ex15', function(req, res) {
    const { numeros } = req.body;
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 40) {
            soma += numeros[i];
        }
    }
    res.json({ soma });
});

router.post('/ex16', function(req, res) {
const { numeroTotalMercadorias, valoresMercadorias } = req.body;
    let valorTotalEstoque = 0;

    for (let i = 0; i < valoresMercadorias.length; i++) {
        valorTotalEstoque += valoresMercadorias[i];
    }

    const mediaValorMercadorias = valorTotalEstoque / numeroTotalMercadorias;

    res.json({ valorTotalEstoque, mediaValorMercadorias });
});

router.post('/ex17', function(req, res) {
    const { inicio, fim } = req.body;
    let soma = 0;
    const numerosImpares = [];

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            numerosImpares.push(i);
            soma += i;
        }
    }

    res.json({ numerosImpares, soma });
});

router.post('/ex18', function(req, res) {
    const { valores } = req.body;

    let maiorValor = valores[0];
    let menorValor = valores[0];
    let soma = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > maiorValor) {
            maiorValor = valores[i];
        }
        if (valores[i] < menorValor) {
            menorValor = valores[i];
        }
        soma += valores[i];
    }

    const media = soma / valores.length;

    res.json({ maiorValor, menorValor, media });
});

router.post('/ex19', function(req, res) {
    const { dadosAlunos } = req.body;

    let numAlunosPorCurso = {
        "Sistemas de Informação": 0,
        "Ciência da Computação": 0,
        "Engenharia Civil": 0
    };
    let numAlunosEntre20e25PorCurso = {
        "Sistemas de Informação": 0,
        "Ciência da Computação": 0,
        "Engenharia Civil": 0
    };
    let somaIdadesPorCurso = {
        "Sistemas de Informação": 0,
        "Ciência da Computação": 0,
        "Engenharia Civil": 0
    };
    
    for (let aluno of dadosAlunos) {
        numAlunosPorCurso[aluno.curso]++;
        somaIdadesPorCurso[aluno.curso] += aluno.idade;
        
        if (aluno.idade >= 20 && aluno.idade <= 25) {
            numAlunosEntre20e25PorCurso[aluno.curso]++;
        }
    }
    
    let mediaIdadePorCurso = {};
    for (let curso in numAlunosPorCurso) {
        mediaIdadePorCurso[curso] = somaIdadesPorCurso[curso] / numAlunosPorCurso[curso];
    }

    let menorMediaIdadeCurso = Object.keys(mediaIdadePorCurso)[0];
    for (let curso in mediaIdadePorCurso) {
        if (mediaIdadePorCurso[curso] < mediaIdadePorCurso[menorMediaIdadeCurso]) {
            menorMediaIdadeCurso = curso;
        }
    }

    res.json({ 
        numAlunosPorCurso, 
        numAlunosEntre20e25PorCurso, 
        menorMediaIdadeCurso 
    });
});

router.get('/ex20', function(req, res) {
    let tabuadas = {};

    for (let i = 1; i <= 10; i++) {
        let tabuada = [];
        for (let j = 1; j <= 10; j++) {
            tabuada.push(i * j);
        }
        tabuadas[i] = tabuada;
    }

    res.json(tabuadas);
});

router.post('/ex21', function(req, res) {
    const { dadosPesquisa } = req.body;

    let quantidadeNotas10 = 0;
    let somaIdades = 0;
    let quantidadePessoas = dadosPesquisa.length;
    let quantidadeNotas5ouMenos = 0;
    let pessoaMaisVelha = null;
    let maiorIdade = -1;

    for (let pessoa of dadosPesquisa) {
        if (pessoa.nota === 10) {
            quantidadeNotas10++;
        }

        somaIdades += pessoa.idade;

        if (pessoa.nota <= 5) {
            quantidadeNotas5ouMenos++;
        }

        if (pessoa.idade > maiorIdade) {
            pessoaMaisVelha = pessoa.nome;
            maiorIdade = pessoa.idade;
        }
    }

    let mediaIdade = somaIdades / quantidadePessoas;

    let percentagemNotas5ouMenos = (quantidadeNotas5ouMenos / quantidadePessoas) * 100;

    res.json({ 
        quantidadeNotas10, 
        mediaIdade, 
        percentagemNotas5ouMenos, 
        pessoaMaisVelha 
    });
});

router.post('/ex22', function(req, res) {
    const { produtos } = req.body;

    let maiorPreco = -Infinity;
    let somaPrecos = 0;

    for (let produto of produtos) {
        if (produto.preco > maiorPreco) {
            maiorPreco = produto.preco;
        }
        somaPrecos += produto.preco;
    }

    const mediaPrecos = somaPrecos / produtos.length;

    res.json({ maiorPreco, mediaPrecos });
});


module.exports = router