
/* JavaScript comum. O mapa inteiro está neste arquivo, junto com o desenho da página. */
/* Dados lidos da planta oficial. Edite com cuidado: cada número precisa continuar no lugar certo. */
var FEIRA = {
  "itens": [
    {
      "id": "p31",
      "numero": "31",
      "titulo": "A influência da tecnologia na criminologia",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Trabalho decente e crescimento econômico, Indústria, Inovação e Infraestrutura e Paz, Justiça e Instituições Eficazes",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "47",
        "47"
      ],
      "x": 329.8,
      "y": 77.6,
      "w": 39.5,
      "h": 28.3,
      "grupo": "barracao",
      "posicao": "Fileira do fundo, 1º à esquerda"
    },
    {
      "id": "p26",
      "numero": "26",
      "titulo": "Complexo 51: Pesquisa Extraterrestre",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Educação de Qualidade e Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "26",
        "26"
      ],
      "x": 373.7,
      "y": 77.8,
      "w": 30.7,
      "h": 30.7,
      "grupo": "barracao",
      "posicao": "Fileira do fundo, 2º"
    },
    {
      "id": "47",
      "numero": "47",
      "titulo": "WEC – Além da velocidade",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "31",
        "31"
      ],
      "x": 406.2,
      "y": 77.4,
      "w": 29.3,
      "h": 30.7,
      "grupo": "barracao",
      "posicao": "Fileira do fundo, 3º"
    },
    {
      "id": "p20",
      "numero": "20",
      "titulo": "Muay Thai: A Arte da Luta",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "20",
        "20"
      ],
      "x": 435.5,
      "y": 76.1,
      "w": 29.7,
      "h": 33.6,
      "grupo": "barracao",
      "posicao": "Fileira do fundo, 4º"
    },
    {
      "id": "p04",
      "numero": "04",
      "titulo": "Facetec – O Futuro da Identificação",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "04",
        "4"
      ],
      "x": 468.4,
      "y": 76.9,
      "w": 22.1,
      "h": 24.8,
      "grupo": "barracao",
      "posicao": "Fileira do fundo, ao lado da Cantina"
    },
    {
      "id": "p03",
      "numero": "03",
      "titulo": "A farmácia da fauna Brasileira",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "03",
        "3"
      ],
      "x": 316.3,
      "y": 104.4,
      "w": 29.3,
      "h": 30.7,
      "grupo": "barracao",
      "posicao": "Coluna da esquerda, em cima"
    },
    {
      "id": "p36",
      "numero": "36",
      "titulo": "Jogo da Vida Real",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Redução da Desigualdade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "36",
        "36"
      ],
      "x": 317,
      "y": 138,
      "w": 30.8,
      "h": 33.6,
      "grupo": "barracao",
      "posicao": "Coluna da esquerda, embaixo"
    },
    {
      "id": "p22",
      "numero": "22",
      "titulo": "Judô: um caminho suave para saúde e bem estar",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "11",
        "11"
      ],
      "x": 358,
      "y": 165.8,
      "w": 27.9,
      "h": 29.7,
      "grupo": "barracao",
      "posicao": "Fileira da frente, 1º à esquerda"
    },
    {
      "id": "p11",
      "numero": "11",
      "titulo": "Da bola ao Var: A Tecnologia que Transformou o Futebol",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "22",
        "22"
      ],
      "x": 391.6,
      "y": 165.1,
      "w": 29.2,
      "h": 29.2,
      "grupo": "barracao",
      "posicao": "Fileira da frente, 2º"
    },
    {
      "id": "p43",
      "numero": "43",
      "titulo": "Projeto Recyclemotor",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "43",
        "43"
      ],
      "x": 424,
      "y": 161.9,
      "w": 31.6,
      "h": 33.6,
      "grupo": "barracao",
      "posicao": "Fileira da frente, 3º"
    },
    {
      "id": "p08",
      "numero": "08",
      "titulo": "Quantus Circus: O espetáculo onde a magia e a física se encontram",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "08",
        "8"
      ],
      "x": 464.7,
      "y": 169.4,
      "w": 24.2,
      "h": 25,
      "grupo": "barracao",
      "posicao": "Fileira da frente, 4º"
    },
    {
      "id": "p35",
      "numero": "35",
      "titulo": "Hawai: Da Terra do Fogo ao Paraíso",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Vida Sobre a Terra",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "35",
        "35"
      ],
      "x": 493.8,
      "y": 156.8,
      "w": 30.7,
      "h": 39.4,
      "grupo": "barracao",
      "posicao": "Fileira da frente, ao lado da manutenção"
    },
    {
      "id": "p02",
      "numero": "02",
      "titulo": "Os dois grandes mistérios do universo",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "02",
        "2"
      ],
      "x": 529.2,
      "y": 130.2,
      "w": 31.2,
      "h": 24.2,
      "grupo": "barracao",
      "posicao": "Acima da área de manutenção"
    },
    {
      "id": "p46",
      "numero": "46",
      "titulo": "Acamp: Técnicas de Sobrevivência",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "46",
        "46"
      ],
      "x": 599.4,
      "y": 87.1,
      "w": 18.2,
      "h": 20.7,
      "grupo": "barracao",
      "posicao": "À direita da Padaria",
      "nota": "O quadrinho é pequeno e fica na borda direita do barracão, colado na Padaria."
    },
    {
      "id": "p39",
      "numero": "39",
      "titulo": "Agroecologia e Agro 4.0 na sustentabilidade e tecnologia no futuro do campo",
      "zona": "externa",
      "lugar": "Pátio",
      "detalhe": "ODS: Consumo e Produção Responsável",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "patio",
        "escada",
        "escadaria",
        "39"
      ],
      "x": 288.4,
      "y": 298.6,
      "w": 54.4,
      "h": 54.4,
      "forma": "ellipse",
      "posicao": "Círculo em frente à escadaria",
      "nota": "O número está no círculo branco do pátio, junto aos degraus do prédio, fora da cobertura dos estandes."
    },
    {
      "id": "horta",
      "titulo": "Horta",
      "zona": "externa",
      "lugar": "Horta",
      "detalhe": "Área da horta, à esquerda do anfiteatro. Sem estande.",
      "tipo": "referencia",
      "x": 36.4,
      "y": 77.2,
      "w": 120,
      "h": 110,
      "palavras": [
        "horta",
        "jardim"
      ]
    },
    {
      "id": "anfiteatro",
      "titulo": "Anfiteatro",
      "zona": "externa",
      "lugar": "Anfiteatro",
      "detalhe": "O anfiteatro está marcado como fechado. Sem estande.",
      "tipo": "fechado",
      "x": 240,
      "y": 76.1,
      "w": 74.6,
      "h": 137.4,
      "citacao": "Fechado",
      "palavras": [
        "anfiteatro",
        "teatro"
      ]
    },
    {
      "id": "barracao",
      "titulo": "Barracão",
      "zona": "externa",
      "lugar": "Barracão",
      "detalhe": "Bloco branco com os estandes numerados da área externa. Cantina, padaria e manutenção ficam neste mesmo bloco.",
      "tipo": "sala",
      "x": 316.1,
      "y": 75.4,
      "w": 285.2,
      "h": 122.2,
      "palavras": [
        "barracao",
        "estandes",
        "feira"
      ]
    },
    {
      "id": "cantina",
      "titulo": "Cantina",
      "zona": "externa",
      "lugar": "Cantina",
      "detalhe": "Cantina em verde, no barracão. O mapa não diz que está fechada.",
      "tipo": "servico",
      "x": 491.5,
      "y": 76.4,
      "w": 54.4,
      "h": 45.7,
      "palavras": [
        "cantina",
        "lanche"
      ]
    },
    {
      "id": "padaria",
      "titulo": "Padaria",
      "zona": "externa",
      "lugar": "Padaria",
      "detalhe": "Padaria marcada como fechada.",
      "tipo": "fechado",
      "x": 545.8,
      "y": 77.5,
      "w": 54.4,
      "h": 44.9,
      "citacao": "Padaria Fechada",
      "palavras": [
        "padaria"
      ]
    },
    {
      "id": "manutencao",
      "titulo": "Manutenção",
      "zona": "externa",
      "lugar": "Manutenção",
      "detalhe": "Área vermelha no barracão, sem estande.",
      "tipo": "fechado",
      "x": 527.7,
      "y": 152.3,
      "w": 75.1,
      "h": 43.4,
      "citacao": "Fechados Manutenção",
      "palavras": [
        "manutencao",
        "fechados"
      ]
    },
    {
      "id": "empresas",
      "titulo": "Empresas",
      "zona": "externa",
      "lugar": "Empresas",
      "detalhe": "Área das empresas, à direita do barracão. Sem número de projeto.",
      "tipo": "referencia",
      "x": 631.4,
      "y": 81.4,
      "w": 102,
      "h": 116.8,
      "palavras": [
        "empresas"
      ]
    },
    {
      "id": "recepcao",
      "titulo": "Recepção",
      "zona": "externa",
      "lugar": "Recepção",
      "detalhe": "Recepção, na parte de baixo do pátio. Sem estande.",
      "tipo": "servico",
      "x": 185.1,
      "y": 445.1,
      "w": 63.5,
      "h": 34.1,
      "palavras": [
        "recepcao",
        "entrada"
      ]
    },
    {
      "id": "bicicletas",
      "titulo": "Bicicletas",
      "zona": "externa",
      "lugar": "Bicicletas",
      "detalhe": "Bicicletário, na lateral esquerda. Sem estande.",
      "tipo": "referencia",
      "x": 37.4,
      "y": 356.9,
      "w": 28.4,
      "h": 108,
      "palavras": [
        "bicicletas",
        "bicicletario"
      ]
    },
    {
      "id": "interditado",
      "titulo": "Interditado",
      "zona": "externa",
      "lugar": "Interditado",
      "detalhe": "Passagem interditada no canto superior direito da área externa.",
      "tipo": "restrito",
      "x": 600,
      "y": 48,
      "w": 62,
      "h": 30,
      "citacao": "INTERDITADO",
      "palavras": [
        "interditado",
        "bloqueado"
      ]
    },
    {
      "id": "p33",
      "numero": "33",
      "titulo": "MONITORIA",
      "zona": "inferior",
      "lugar": "Corredor",
      "detalhe": "Identificador da monitoria, não é um estande, não define projeto",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "33",
        "33"
      ],
      "x": 214,
      "y": 22.3,
      "w": 26.9,
      "h": 31.2,
      
    },
    {
      "id": "p15",
      "numero": "15",
      "titulo": "ORGANIZAÇÃO",
      "zona": "inferior",
      "lugar": "Corredor",
      "detalhe": "Identificador da monitoria, não é um estande, não define projeto",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "15",
        "15"
      ],
      "x": 341.9,
      "y": 19.9,
      "w": 34.7,
      "h": 34.6,
      
    },
    {
      "id": "p07",
      "numero": "07",
      "titulo": "Pragas Agrícolas",
      "zona": "inferior",
      "lugar": "Sala 1",
      "detalhe": "ODS: Fome Zero e Agricultura Sustentável",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "07",
        "7"
      ],
      "x": 393.7,
      "y": 115.2,
      "w": 29.3,
      "h": 27.7,
      "grupo": "sala-1",
      "posicao": "Lado esquerdo da sala"
    },
    {
      "id": "p05",
      "numero": "05",
      "titulo": "Eficiência de Conversão de Energia em mini gerador Eólico",
      "zona": "inferior",
      "lugar": "Sala 1",
      "detalhe": "ODS: Energia limpa e acessível",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "05",
        "5"
      ],
      "x": 478.6,
      "y": 65.9,
      "w": 31.2,
      "h": 33.6,
      "grupo": "sala-1",
      "posicao": "Junto à divisória com a Sala 2, em cima",
      "nota": "O quadrinho encosta na parede entre a Sala 1 e a Sala 2, do lado da Sala 1."
    },
    {
      "id": "p06",
      "numero": "06",
      "titulo": "A Ilusão do Movimento: Praxinoscópio",
      "zona": "inferior",
      "lugar": "Sala 1",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "06",
        "6"
      ],
      "x": 479.8,
      "y": 168.8,
      "w": 30.7,
      "h": 30.8,
      "grupo": "sala-1",
      "posicao": "Junto à divisória com a Sala 2, embaixo",
      "nota": "O quadrinho encosta na parede entre a Sala 1 e a Sala 2, do lado da Sala 1."
    },
    {
      "id": "p25",
      "numero": "25",
      "titulo": "Pilares da Vida Marinha em Perigo",
      "zona": "inferior",
      "lugar": "Sala 2",
      "detalhe": "ODS: Vida na água, Ação Contra a Mudança Global do Clima e Consumo e Produção Responsável",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "25",
        "25"
      ],
      "x": 514.6,
      "y": 86.4,
      "w": 29.4,
      "h": 74.4,
      "grupo": "sala-2",
      "posicao": "Bancada alta à esquerda"
    },
    {
      "id": "p01",
      "numero": "01",
      "titulo": "Marte: Um novo lar?",
      "zona": "inferior",
      "lugar": "Sala 2",
      "detalhe": "ODS: Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "01",
        "1"
      ],
      "x": 597.9,
      "y": 92,
      "w": 30.7,
      "h": 79.9,
      "grupo": "sala-2",
      "posicao": "Bancada alta à direita"
    },
    {
      "id": "p34",
      "numero": "34",
      "titulo": "Nuvem Atômica: Visualizando o comportamento das partículas",
      "zona": "inferior",
      "lugar": "Sala 2",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "34",
        "34"
      ],
      "x": 606.6,
      "y": 243.8,
      "w": 30.7,
      "h": 26.9,
      "grupo": "sala-2",
      "posicao": "Parte de baixo"
    },
    {
      "id": "p40",
      "numero": "40",
      "titulo": "Medicina Popular",
      "zona": "inferior",
      "lugar": "Lab. Física e Biologia",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "40",
        "fisica",
        "biologia",
        "laboratorio"
      ],
      "x": 704.3,
      "y": 47.2,
      "w": 29.7,
      "h": 32.1,
      "grupo": "lab-fisica",
      "posicao": "Parte de cima"
    },

{
     "id": "p41",
      "numero": "41",
      "titulo": "O fogo que muda de cor (teste de chama)",
      "zona": "inferior",
      "lugar": "Lab. Física e Biologia",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "40",
        "fisica",
        "biologia",
        "laboratorio"
      ],
      "x": 649.3,
      "y": 77.2,
      "w": 29.7,
      "h": 32.1,
      "grupo": "lab-fisica",
      "posicao": "Extremidade esquerda do piso",
      "nota": "O PDF não escreve o nome desta sala. Só aparece o número 41."
    },

    {
      "id": "p30",
      "numero": "30",
      "titulo": "Vacinas: Ciências que protege",
      "zona": "inferior",
      "lugar": "Lab. Física e Biologia",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "30",
        "fisica",
        "biologia",
        "laboratorio"
      ],
      "x": 710.8,
      "y": 160.8,
      "w": 30.7,
      "h": 30.7,
      "grupo": "lab-fisica",
      "posicao": "Parte de baixo"
    },
    {
      "id": "lab-quimica",
      "titulo": "Lab. Química",
      "zona": "inferior",
      "lugar": "Lab. Química",
      "detalhe": "Fechado",
      "tipo": "sala",
      "x": 27.5,
      "y": 44,
      "w": 158.9,
      "h": 118,
      "palavras": [
        "laboratorio",
        "quimica"
      ]
    },
    {
      "id": "area-restrita",
      "titulo": "Área restrita",
      "zona": "inferior",
      "lugar": "Área restrita",
      "detalhe": "",
      "tipo": "restrito",
      "x": 28.3,
      "y": 164.9,
      "w": 116.8,
      "h": 35,
      "citacao": "Área Restrita",
      "palavras": [
        "restrita",
        "restrito"
      ]
    },
    {
      "id": "lab-info-3",
      "titulo": "Lab. Info 3",
      "zona": "inferior",
      "lugar": "Lab. Info 3",
      "detalhe": "Laboratório de informática 3 marcado como fechado. Sem estande.",
      "tipo": "fechado",
      "x": 186.4,
      "y": 61.5,
      "w": 98.5,
      "h": 138.2,
      "citacao": "Fechado",
      "palavras": [
        "laboratorio",
        "informatica",
        "info"
      ]
    },
    {
      "id": "sala-maker",
      "titulo": "Sala Maker",
      "zona": "inferior",
      "lugar": "Sala Maker",
      "detalhe": "Fechado",
      
      "x": 283.6,
      "y": 61.5,
      "w": 105.4,
      "h": 138.1,
      "citacao": "Fechado",
      "palavras": [
        "maker",
        "rh",
        "adm",
        "noite"
      ]
    },
    {
      "id": "sala-1",
      "titulo": "Sala 1",
      "zona": "inferior",
      "lugar": "Sala 1",
      "detalhe": "Sala 1 do piso inferior. Reúne os estandes 07, 05 e 06.",
      "tipo": "sala",
      "x": 390.3,
      "y": 61.5,
      "w": 120.8,
      "h": 138.2,
      "palavras": [
        "sala 1"
      ]
    },
    {
      "id": "sala-2",
      "titulo": "Sala 2",
      "zona": "inferior",
      "lugar": "Sala 2",
      "detalhe": "Sala 2 do piso inferior. Reúne os estandes 25, 01 e 34.",
      "tipo": "sala",
      "x": 511.1,
      "y": 61.5,
      "w": 121,
      "h": 138.2,
      "palavras": [
        "sala 2"
      ]
    },
    {
      "id": "lab-fisica",
      "titulo": "Lab. Física e Biologia",
      "zona": "inferior",
      "lugar": "Lab. Física e Biologia",
      "detalhe": "Laboratório de Física e Biologia. Reúne os estandes 40 e 30.",
      "tipo": "sala",
      "x": 632.1,
      "y": 44,
      "w": 121,
      "h": 155.8,
      "palavras": [
        "laboratorio",
        "fisica",
        "biologia"
      ]
    },
    {
      "id": "rampa-inf",
      "titulo": "Rampa",
      "zona": "inferior",
      "lugar": "Rampa",
      "detalhe": "Rampa de acesso ao piso superior, no centro do piso.",
      "tipo": "referencia",
      "x": 197,
      "y": 240.3,
      "w": 405.6,
      "h": 63,
      "citacao": "Rampa de acesso ao piso superior",
      "palavras": [
        "rampa",
        "acesso"
      ]
    },
    {
      "id": "secretaria",
      "titulo": "Secretaria",
      "zona": "inferior",
      "lugar": "Secretaria",
      "detalhe": "Secretaria, na extremidade esquerda. Sem estande.",
      "tipo": "servico",
      "x": 29.8,
      "y": 340,
      "w": 116.6,
      "h": 155.8,
      "palavras": [
        "secretaria"
      ]
    },
    {
      "id": "sala-professores",
      "titulo": "Sala dos professores",
      "zona": "inferior",
      "lugar": "Sala dos professores",
      "detalhe": "Sala dos professores marcada como fechada.",
      "tipo": "fechado",
      "x": 146,
      "y": 376.4,
      "w": 73.6,
      "h": 98.3,
      "citacao": "Fechada",
      "palavras": [
        "professores"
      ]
    },
    {
      "id": "banheiro-restrito",
      "titulo": "Banheiro de professores e funcionários",
      "zona": "inferior",
      "lugar": "Banheiro de professores e funcionários",
      "detalhe": "Banheiro de uso interno.",
      "tipo": "restrito",
      "x": 221.2,
      "y": 376.2,
      "w": 68.8,
      "h": 97.9,
      "citacao": "Banheiro Professores e Funcionários RESTRITO",
      "palavras": [
        "banheiro",
        "professores",
        "funcionarios",
        "restrito"
      ]
    },
    {
      "id": "direcao-e",
      "titulo": "Direção",
      "zona": "inferior",
      "lugar": "Direção",
      "detalhe": "Restrito",
   
      "x": 289.9,
      "y": 376.9,
      "w": 67.3,
      "h": 97.2,
      "palavras": [
        "direcao"
      ],
      "nota": ""
    },
    {
      "id": "direcao-d",
      "titulo": "Direção",
      "zona": "inferior",
      "lugar": "Direção",
      "detalhe": "Restrito",
      
      "x": 359.5,
      "y": 342,
      "w": 63.7,
      "h": 132.1,
      "palavras": [
        "direcao"
      ],
     
    },
    {
      "id": "banheiros-inf",
      "titulo": "Banheiros",
      "zona": "inferior",
      "lugar": "Banheiros",
      "detalhe": "Banheiros em verde no piso inferior. A planta não indica interdição.",
      "tipo": "servico",
      "x": 424.7,
      "y": 340,
      "w": 103.8,
      "h": 134.2,
      "palavras": [
        "banheiro",
        "banheiros",
        "wc"
      ]
    },
    {
      "id": "coordenacao",
      "titulo": "Coordenação",
      "zona": "inferior",
      "lugar": "Coordenação",
      "detalhe": "Coordenação marcada como fechada.",
      "tipo": "fechado",
      "x": 528.3,
      "y": 340.3,
      "w": 103.8,
      "h": 134.2,
      "citacao": "Fechada",
      "palavras": [
        "coordenacao"
      ]
    },
    {
      "id": "biblioteca",
      "titulo": "Biblioteca",
      "zona": "inferior",
      "lugar": "Biblioteca",
      "detalhe": "Biblioteca marcada como fechada.",
      "tipo": "fechado",
      "x": 632.8,
      "y": 340.4,
      "w": 120.8,
      "h": 155.4,
      "citacao": "Fechada",
      "palavras": [
        "biblioteca"
      ]
    },
    
    {
      "id": "p44",
      "numero": "44",
      "titulo": "Fogo: A Ciência em Combustão",
      "zona": "superior",
      "lugar": "Lab. Microbiologia",
      "detalhe": "ODS: Cidades e Comunidades Sustentáveis e Vida Terrestre",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "44",
        "microbiologia",
        "laboratorio"
      ],
      "x": 109.9,
      "y": 110.5,
      "w": 31.2,
      "h": 33.6,
      "grupo": "lab-micro"
    },

 {
      "id": "p42",
      "numero": "42",
      "titulo": "Quando os Ossos Contam a História",
      "zona": "superior",
      "lugar": "Lab. Microbiologia",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "42",
        "microbiologia",
        "laboratorio"
      ],
      "x": 38.7,
      "y": 127.5,
      "w": 31.2,
      "h": 20.6,
      "grupo": "lab-micro"
    },

    
    
    {
      "id": "p13",
      "numero": "13",
      "titulo": "Leite Materno: Pequenas Gotas, Grandes Impactos",
      "zona": "superior",
      "lugar": "Sala 6",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "13",
        "13"
      ],
      "x": 154,
      "y": 102.4,
      "w": 32.1,
      "h": 28.7,
      "grupo": "sala-6"
    },
    {
      "id": "p27",
      "numero": "27",
      "titulo": "Museu do ano 2100",
      "zona": "superior",
      "lugar": "Sala 6",
      "detalhe": "ODS: Ação Contra a Mudança Global no Clima",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "27",
        "27"
      ],
      "x": 239.5,
      "y": 120.4,
      "w": 30.7,
      "h": 30.7,
      "grupo": "sala-6",
      "posicao": "Junto à divisória com a Sala 7",
      "nota": "O quadrinho encosta na parede entre a Sala 6 e a Sala 7, do lado da Sala 6."
    },
    {
      "id": "p18",
      "numero": "18",
      "titulo": "Além das Chamas: A História da Boate Kiss",
      "zona": "superior",
      "lugar": "Sala 7",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "18",
        "18"
      ],
      "x": 271,
      "y": 91.6,
      "w": 26.6,
      "h": 31,
      "grupo": "sala-7",
      "posicao": "Parte de cima"
    },
    {
      "id": "p32",
      "numero": "32",
      "titulo": "Hollywood: O mundo através dos efeitos especiais",
      "zona": "superior",
      "lugar": "Sala 7",
      "detalhe": "ODS: Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "32",
        "32"
      ],
      "x": 364.1,
      "y": 59.5,
      "w": 25.3,
      "h": 19.3,
      "grupo": "sala-7",
      "posicao": "Canto superior direito",
      "nota": "O quadrinho fica no canto superior da Sala 7, quase sobre a divisória com a Sala 8."
    },
    {
      "id": "p28",
      "numero": "28",
      "titulo": "Entre Cliques",
      "zona": "superior",
      "lugar": "Sala 7",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "28",
        "28"
      ],
      "x": 356.4,
      "y": 162.7,
      "w": 30.7,
      "h": 30.7,
      "grupo": "sala-7",
      "posicao": "Parte de baixo"
    },
    {
      "id": "p21",
      "numero": "21",
      "titulo": "Nazismo: Para nunca esquecer",
      "zona": "superior",
      "lugar": "Sala 8",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "21",
        "21"
      ],
      "x": 393.5,
      "y": 90,
      "w": 22.9,
      "h": 39.8,
      "grupo": "sala-8",
      "posicao": "Lado esquerdo"
    },
    {
      "id": "p12",
      "numero": "12",
      "titulo": "Afeganistão: o preço de nascer mulher",
      "zona": "superior",
      "lugar": "Sala 8",
      "detalhe": "ODS: Redução das Desigualdades",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "12",
        "12"
      ],
      "x": 480.8,
      "y": 109.3,
      "w": 29.8,
      "h": 27.9,
      "grupo": "sala-8",
      "posicao": "Lado direito"
    },
    {
      "id": "p29",
      "numero": "29",
      "titulo": "Além do Som",
      "zona": "superior",
      "lugar": "Sala 9",
      "detalhe": "ODS: Educação de Qualidade",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "29",
        "29"
      ],
      "x": 514.3,
      "y": 102.7,
      "w": 29.3,
      "h": 27.4,
      "grupo": "sala-9",
      "posicao": "Parte de cima"
    },
    {
      "id": "p09",
      "numero": "09",
      "titulo": "InovaMed: Seu primeiro atendimento inteligente",
      "zona": "superior",
      "lugar": "Sala 9",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "09",
        "9"
      ],
      "x": 599.5,
      "y": 162.5,
      "w": 27.7,
      "h": 27.7,
      "grupo": "sala-9",
      "posicao": "Parte de baixo"
    },
    {
      "id": "p10",
      "numero": "10",
      "titulo": "Engenharia Biomédica",
      "zona": "superior",
      "lugar": "Sala 9",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "10",
        "10"
      ],
      "x": 599.5,
      "y": 61.7,
      "w": 29.8,
      "h": 31.7,
      "grupo": "sala-9",
      "posicao": "Canto superior direito, junto ao Lab. Info 1",
      "nota": "O quadrinho fica no canto da Sala 9, encostado no Lab. Info 1."
    },
    {
      "id": "p19",
      "numero": "19",
      "titulo": "Som, Vibração e Psicologia",
      "zona": "superior",
      "lugar": "Corredor",
      "detalhe": "ODS: Saúde e Bem-estar, Educação de Qualidade e Cidades e Comunidades Sustentáveis",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "19",
        "19"
      ],
      "x": 691.3,
      "y": 252.8,
      "w": 33.1,
      "h": 30.3,
      "grupo": "corredor-rampa",
      "posicao": "Em frente à rampa"
    },
    {
      "id": "p17",
      "numero": "17",
      "titulo": "Do In Natura ao Ultraprocessado",
      "zona": "superior",
      "lugar": "Junto ao Lab. Alimentos",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "17",
        "17"
      ],
      "x": 107.2,
      "y": 392.2,
      "w": 30.7,
      "h": 32.6,
      "posicao": "Espaço em branco à direita do laboratório",
      "nota": "Não está dentro da área cinza do Lab. Alimentos. Fica na faixa branca entre o laboratório e a Sala 5."
    },
    {
      "id": "p14",
      "numero": "14",
      "titulo": "A Prisão da Mente",
      "zona": "superior",
      "lugar": "Sala 5",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "14",
        "14"
      ],
      "x": 152.4,
      "y": 408,
      "w": 30,
      "h": 46.1,
      "grupo": "sala-5",
      "posicao": "Lado esquerdo"
    },
    {
      "id": "p45",
      "numero": "45",
      "titulo": "Dentro do coração: O que nossas emoções nos ensinam",
      "zona": "superior",
      "lugar": "Sala 5",
      "detalhe": "ODS: Saúde e Bem-estar",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "45",
        "45"
      ],
      "x": 240,
      "y": 403.8,
      "w": 29.8,
      "h": 33.6,
      "grupo": "sala-5",
      "posicao": "Lado direito"
    },
    {
      "id": "p16",
      "numero": "16",
      "titulo": "Titanic",
      "zona": "superior",
      "lugar": "Sala 4",
      "detalhe": "ODS: Indústria, Inovação e Infraestrutura",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "16",
        "16"
      ],
      "x": 280.6,
      "y": 347.6,
      "w": 30.7,
      "h": 26.9,
      "grupo": "sala-4",
      "posicao": "Canto superior, junto à Sala 5",
      "nota": "O quadrinho fica no topo da Sala 4, junto à divisória com a Sala 5."
    },
    {
      "id": "p24",
      "numero": "24",
      "titulo": "Moda: A História de Vivienne Westwood",
      "zona": "superior",
      "lugar": "Sala 4",
      "detalhe": "ODS: Consumo e Produção Responsável e Ação Contra a Mudança Global do Clima",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "24",
        "24"
      ],
      "x": 275.8,
      "y": 449.1,
      "w": 28.3,
      "h": 28.3,
      "grupo": "sala-4",
      "posicao": "Canto inferior, junto à Sala 5",
      "nota": "O quadrinho fica do lado da Sala 4, junto à divisória com a Sala 5 — não dentro da Sala 5."
    },
    {
      "id": "p23",
      "numero": "23",
      "titulo": "Horizon 2030: Existe um Planeta B?",
      "zona": "superior",
      "lugar": "Sala 4",
      "detalhe": "ODS: Ação contra a mudança global do clima",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "23",
        "23"
      ],
      "x": 357.5,
      "y": 441.6,
      "w": 30.7,
      "h": 30.7,
      "grupo": "sala-4",
      "posicao": "Lado direito"
    },
   
    {
      "id": "p37",
      "numero": "37",
      "titulo": "A guerra de Troia: Disputas Territoriais e estratégias Psicológicas",
      "zona": "superior",
      "lugar": "Sala 3",
      "detalhe": "ODS: Paz, Justiça e Instituições Eficazes",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "37",
        "37"
      ],
      "x": 517.1,
      "y": 388,
      "w": 26.9,
      "h": 61.1,
      "grupo": "sala-3",
      "posicao": "Lado esquerdo"
    },
    {
      "id": "p38",
      "numero": "38",
      "titulo": "Césio-137: A emergência radioativa de Goiânia",
      "zona": "superior",
      "lugar": "Sala 3",
      "detalhe": "ODS: Energia Limpa e Acessível",
      "tipo": "projeto",
      "palavras": [
        "projeto",
        "estande",
        "bancada",
        "38",
        "38"
      ],
      "x": 593.3,
      "y": 438.8,
      "w": 33.9,
      "h": 36.3,
      "grupo": "sala-3",
      "posicao": "Parte de baixo"
    },
    {
      "id": "lab-micro",
      "titulo": "Lab. Microbiologia",
      "zona": "superior",
      "lugar": "Lab. Microbiologia",
      "detalhe": "Laboratório de Microbiologia. Contém o estande 44.",
      "tipo": "sala",
      "x": 29.2,
      "y": 41.2,
      "w": 56.9,
      "h": 154.2,
      "palavras": [
        "sala",
        "41"
      ]
    },
    {
      "id": "lab-micro",
      "titulo": "Lab. Microbiologia",
      "zona": "superior",
      "lugar": "Lab. Microbiologia",
      "detalhe": "Laboratório de Microbiologia. Contém o estande 44.",
      "tipo": "sala",
      "x": 86.1,
      "y": 41.1,
      "w": 64,
      "h": 116.5,
      "palavras": [
        "laboratorio",
        "microbiologia",
        "microbio"
      ]
    },
    {
      "id": "vao-micro",
      "titulo": "Corredor de acesso ao lab de microbiologia",
      "zona": "superior",
      "lugar": "Corredor de acesso ao lab de microbiologia",
      "detalhe": "lab de microbiologia",
      "tipo": "referencia",
      "x": 86.1,
      "y": 157.7,
      "w": 64.3,
      "h": 38.6,
      "palavras": [
        "vao",
        "microbiologia"
      ]
    },
    {
      "id": "sala-6",
      "titulo": "Sala 6",
      "zona": "superior",
      "lugar": "Sala 6",
      "detalhe": "Sala 6. Reúne os estandes 13 e 27.",
      "tipo": "sala",
      "x": 150.1,
      "y": 58.3,
      "w": 121,
      "h": 138.1,
      "palavras": [
        "sala 6"
      ]
    },
    {
      "id": "sala-7",
      "titulo": "Sala 7",
      "zona": "superior",
      "lugar": "Sala 7",
      "detalhe": "Sala 7. Reúne os estandes 18, 32 e 28.",
      "tipo": "sala",
      "x": 271,
      "y": 58.3,
      "w": 120.8,
      "h": 138.1,
      "palavras": [
        "sala 7"
      ]
    },
    {
      "id": "sala-8",
      "titulo": "Sala 8",
      "zona": "superior",
      "lugar": "Sala 8",
      "detalhe": "Sala 8. Reúne os estandes 21 e 12.",
      "tipo": "sala",
      "x": 391.9,
      "y": 58.3,
      "w": 121,
      "h": 138.1,
      "palavras": [
        "sala 8"
      ]
    },
    {
      "id": "sala-9",
      "titulo": "Sala 9",
      "zona": "superior",
      "lugar": "Sala 9",
      "detalhe": "Sala 9. Reúne os estandes 29, 10 e 09.",
      "tipo": "sala",
      "x": 512.8,
      "y": 58.3,
      "w": 121,
      "h": 138.1,
      "palavras": [
        "sala 9"
      ]
    },
    {
      "id": "lab-info-1",
      "titulo": "Lab. Info 1",
      "zona": "superior",
      "lugar": "Lab. Info 1",
      "detalhe": "Fechado",
      "tipo": "Fechado",
      "x": 633.8,
      "y": 40.5,
      "w": 120.8,
      "h": 155.9,
  
      "palavras": [
        "laboratorio",
        "informatica",
        "info",
        "noite",
        "curso"
      ]
    },
    {
      "id": "corredor-rampa",
      "titulo": "Em frente à rampa",
      "zona": "superior",
      "lugar": "Em frente à rampa",
      "detalhe": "Corredor à direita da rampa. Contém o estande 19.",
      "tipo": "sala",
      "x": 633.8,
      "y": 197,
      "w": 93.7,
      "h": 147,
      "palavras": [
        "rampa",
        "corredor"
      ]
    },
    {
      "id": "rampa-sup",
      "titulo": "Rampa",
      "zona": "superior",
      "lugar": "Rampa",
      "detalhe": "Rampa de acesso ao piso superior, no centro da planta.",
      "tipo": "referencia",
      "x": 154.4,
      "y": 240.3,
      "w": 479.4,
      "h": 63,
      "citacao": "Rampa de acesso ao piso superior",
      "palavras": [
        "rampa"
      ]
    },
    {
      "id": "lab-alimentos",
      "titulo": "Lab. Alimentos",
      "zona": "superior",
      "lugar": "Lab. Alimentos",
      "detalhe": "Não será utilizado",
      "tipo": "referencia",
      "x": 29.1,
      "y": 343.4,
      "w": 65.8,
      "h": 154.6,
      "nota": "",
      "palavras": [
        "laboratorio",
        "alimentos"
      ]
    },
    {
      "id": "sala-5",
      "titulo": "Sala 5",
      "zona": "superior",
      "lugar": "Sala 5",
      "detalhe": "Sala 5. Reúne os estandes 14 e 45.",
      "tipo": "sala",
      "x": 150.1,
      "y": 344,
      "w": 121.1,
      "h": 138.4,
      "palavras": [
        "sala 5"
      ]
    },
    {
      "id": "sala-4",
      "titulo": "Sala 4",
      "zona": "superior",
      "lugar": "Sala 4",
      "detalhe": "Sala 4. Reúne os estandes 16, 24 e 23.",
      "tipo": "sala",
      "x": 271,
      "y": 344,
      "w": 120.8,
      "h": 138.2,
      "palavras": [
        "sala 4"
      ]
    },
    {
      "id": "banheiro-sup",
      "titulo": "Banheiro",
      "zona": "superior",
      "lugar": "Banheiro",
      "detalhe": "Banheiro do piso superior marcado como fechado.",
      "tipo": "fechado",
      "x": 391.9,
      "y": 344,
      "w": 121,
      "h": 138.2,
      "citacao": "Fechado",
      "palavras": [
        "banheiro",
        "wc"
      ]
    },
    {
      "id": "sala-3",
      "titulo": "Sala 3",
      "zona": "superior",
      "lugar": "Sala 3",
      "detalhe": "Sala 3. Reúne os estandes 42, 37 e 38.",
      "tipo": "sala",
      "x": 512.8,
      "y": 344,
      "w": 121,
      "h": 138.2,
      "palavras": [
        "sala 3"
      ]
    },
    {
      "id": "lab-info-2",
      "titulo": "Lab. Info 2",
      "zona": "superior",
      "lugar": "Lab. Info 2",
      "detalhe": "",
      "tipo": "fechado",
      "x": 633.8,
      "y": 344,
      "w": 120.8,
      "h": 156.6,
      "citacao": "Fechado",
      "palavras": [
        "laboratorio",
        "informatica",
        "info"
      ]
    }
  ],
  "notas": [
    
    
    
    
   
    "Os quadrinhos 05, 06, 16, 24, 27 e 32 encostam na parede entre duas salas. ",
    "O projeto 46 fica na borda direita do barracão, ao lado da Padaria.",
    "A Sala Maker estará fechada",
    

  ]
};

(function () {
  var ITENS = FEIRA.itens;
  var NOTAS = FEIRA.notas;
  var SVG = "http://www.w3.org/2000/svg";

  var ZONAS = {
    externa: { nome: "Área externa", apelido: "Chegada, barracão e pátio", cor: "olive" },
    inferior: { nome: "Piso inferior", apelido: "Térreo do prédio", cor: "accent" },
    superior: { nome: "Piso superior", apelido: "Segundo andar", cor: "lagoon" },
  };
  var ORDEM = ["externa", "inferior", "superior"];
  var ROTULO = {
    projeto: "Estande numerado",
    sala: "Ambiente",
    fechado: "Fechado",
    restrito: "Restrito",
    horario: "Horário especial",
    servico: "Apoio",
    referencia: "Referência",
  };
  var SELO = { sala: "Sala", fechado: "Fech.", restrito: "Rest.", horario: "Hora", servico: "Apoio", referencia: "Ref." };
  var SELO_TIPO = { sala: "paper", fechado: "stone", restrito: "stone", horario: "gold", servico: "moss", referencia: "lagoon-soft" };
  var CHIP_TIPO = { sala: "paper", fechado: "stone", restrito: "stone", horario: "gold", servico: "moss", referencia: "lagoon" };
  var PARADA = { de: 1, do: 1, da: 1, das: 1, dos: 1, e: 1, em: 1, no: 1, na: 1, ao: 1, a: 1, o: 1 };
  var PROJETOS = ITENS.filter(function (item) { return item.tipo === "projeto"; });

  var piso = "externa";
  var selecionadoId = null;
  var consulta = "";
  var zoom = 1;

  var app = document.getElementById("app");
  var campo = document.getElementById("campo");
  var limpar = document.getElementById("limpar");
  var abas = document.getElementById("abas");
  var apelido = document.getElementById("apelido");
  var visor = document.getElementById("visor");
  var planta = document.getElementById("planta");
  var painel = document.getElementById("painel");
  var lista = document.getElementById("lista");
  var notas = document.getElementById("notas");
  var zoomMenos = document.getElementById("zoom-menos");
  var zoomMais = document.getElementById("zoom-mais");

  document.getElementById("total-estandes").textContent = String(PROJETOS.length);
  NOTAS.forEach(function (nota) {
    var li = document.createElement("li");
    li.textContent = nota;
    notas.appendChild(li);
  });

  function normalizar(texto) {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function numerosDe(texto) {
    var achados = String(texto || "").match(/\d+/g) || [];
    return achados.map(function (n) { return String(Number(n)); });
  }

  function textoBusca(item) {
    var zona = ZONAS[item.zona];
    var apelidos = item.zona === "externa"
      ? "area externa campus patio externo"
      : item.zona === "inferior"
        ? "piso inferior terreo terrio andar de baixo"
        : "piso superior segundo andar segundo 2 andar";
    return normalizar([
      item.titulo, item.lugar, item.posicao || "", item.detalhe, item.citacao || "", item.nota || "",
      zona.nome, apelidos, ROTULO[item.tipo], (item.palavras || []).join(" "),
    ].join(" "));
  }

  function combina(item, bruto) {
    var tokens = normalizar(bruto).split(/\s+/).filter(function (token) {
      return token && (/^\d+$/.test(token) || !PARADA[token]);
    });
    if (!tokens.length) return false;
    var palavras = tokens.filter(function (token) { return !/^\d+$/.test(token); });
    var numeros = tokens.filter(function (token) { return /^\d+$/.test(token); }).map(function (token) {
      return String(Number(token));
    });
    var blob = textoBusca(item);
    if (palavras.some(function (palavra) { return blob.indexOf(palavra) === -1; })) return false;
    if (!numeros.length) return true;
    var noLugar = {};
    numerosDe(item.lugar).forEach(function (n) { noLugar[n] = true; });
    var peloNumero = palavras.some(function (palavra) {
      return palavra === "projeto" || palavra === "estande" || palavra === "bancada";
    });
    return numeros.every(function (numero) {
      if (palavras.length > 0 && !peloNumero) return !!noLugar[numero];
      if (item.numero && String(Number(item.numero)) === numero) return true;
      return !!noLugar[numero];
    });
  }

  function porId(id) {
    for (var i = 0; i < ITENS.length; i++) if (ITENS[i].id === id) return ITENS[i];
    return null;
  }

  function resolverId(id) {
    if (!id) return null;
    var direto = porId(id);
    if (direto) return direto;
    if (/^p?\d+$/i.test(id)) {
      var n = String(Number(String(id).replace(/^p/i, "")));
      for (var i = 0; i < PROJETOS.length; i++) {
        if (PROJETOS[i].numero && String(Number(PROJETOS[i].numero)) === n) return PROJETOS[i];
      }
    }
    return null;
  }

  function projetosDoGrupo(id) {
    return PROJETOS.filter(function (item) { return item.grupo === id; }).sort(function (a, b) {
      return Number(a.numero) - Number(b.numero);
    });
  }

  function localCurto(item) {
    var partes = [ZONAS[item.zona].nome, item.lugar];
    if (item.posicao) partes.push(item.posicao);
    return partes.join(" · ");
  }

  function lerUrl() {
    var params = new URLSearchParams(location.search);
    var informado = params.get("piso");
    var item = resolverId(params.get("e") || "");
    if (item) {
      selecionadoId = item.id;
      piso = item.zona;
      if (item.tipo === "projeto") zoom = 3;
    } else {
      selecionadoId = null;
      piso = informado === "externa" || informado === "inferior" || informado === "superior" ? informado : "externa";
    }
  }

  function gravarUrl() {
    var params = new URLSearchParams();
    params.set("piso", piso);
    if (selecionadoId) params.set("e", selecionadoId);
    var proxima = location.pathname + "?" + params.toString();
    if (location.search !== "?" + params.toString()) history.replaceState(null, "", proxima);
  }

  function irPara(item) {
    piso = item.zona;
    selecionadoId = item.id;
    if (item.tipo === "projeto") zoom = 3;
    gravarUrl();
    desenhar();
  }

  function escolherPiso(novo) {
    piso = novo;
    selecionadoId = null;
    gravarUrl();
    desenhar();
  }

  function el(tag, classe, texto) {
    var no = document.createElement(tag);
    if (classe) no.className = classe;
    if (texto != null) no.textContent = texto;
    return no;
  }

  function hitBox(item) {
    var alvo = item.tipo === "projeto" ? 34 : 0;
    var w = Math.max(item.w, alvo);
    var h = Math.max(item.h, alvo);
    return { x: item.x + item.w / 2 - w / 2, y: item.y + item.h / 2 - h / 2, w: w, h: h };
  }

  function desenharMapa() {
    var selecionado = porId(selecionadoId);
    planta.setAttribute("aria-label", "Planta oficial: " + ZONAS[piso].nome);
    planta.setAttribute("class", "planta zoom-" + zoom);
    planta.replaceChildren();
    visor.scrollTop = 0;
    visor.scrollLeft = 0;
    var imagem = document.createElementNS(SVG, "image");
    imagem.setAttribute("href", "assets/mapas/" + piso + ".png");
    imagem.setAttribute("x", "0");
    imagem.setAttribute("y", "0");
    imagem.setAttribute("width", "780");
    imagem.setAttribute("height", "540");
    planta.appendChild(imagem);

    var doPiso = ITENS.filter(function (item) { return item.zona === piso; });
    var salas = doPiso.filter(function (item) { return item.tipo !== "projeto"; });
    var estandes = doPiso.filter(function (item) { return item.tipo === "projeto"; });
    salas.concat(estandes).forEach(function (item) { planta.appendChild(spot(item, selecionado)); });
  }

  function spot(item, selecionado) {
    var ativo = selecionado && selecionado.id === item.id;
    var pai = !!(selecionado && selecionado.grupo === item.id);
    var grupo = document.createElementNS(SVG, "g");
    var alvo = hitBox(item);
    var hit = document.createElementNS(SVG, item.forma === "ellipse" ? "ellipse" : "rect");
    var marca = document.createElementNS(SVG, item.forma === "ellipse" ? "ellipse" : "rect");
    hit.setAttribute("class", "hit");
    hit.setAttribute("role", "button");
    hit.setAttribute("tabindex", "0");
    hit.setAttribute("aria-label", item.titulo + ". " + localCurto(item));
    hit.setAttribute("aria-pressed", ativo ? "true" : "false");
    marca.setAttribute("id", "marca-" + item.id);
    marca.setAttribute("class", "marca" + (ativo ? " is-on" : pai ? " is-pai" : ""));
    marca.setAttribute("pointer-events", "none");
    if (item.forma === "ellipse") {
      hit.setAttribute("cx", alvo.x + alvo.w / 2);
      hit.setAttribute("cy", alvo.y + alvo.h / 2);
      hit.setAttribute("rx", alvo.w / 2);
      hit.setAttribute("ry", alvo.h / 2);
      marca.setAttribute("cx", item.x + item.w / 2);
      marca.setAttribute("cy", item.y + item.h / 2);
      marca.setAttribute("rx", item.w / 2);
      marca.setAttribute("ry", item.h / 2);
    } else {
      hit.setAttribute("x", alvo.x);
      hit.setAttribute("y", alvo.y);
      hit.setAttribute("width", alvo.w);
      hit.setAttribute("height", alvo.h);
      hit.setAttribute("rx", "3");
      marca.setAttribute("x", item.x);
      marca.setAttribute("y", item.y);
      marca.setAttribute("width", item.w);
      marca.setAttribute("height", item.h);
      marca.setAttribute("rx", "3");
    }
    hit.addEventListener("click", function () { irPara(item); });
    hit.addEventListener("keydown", function (evento) {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        irPara(item);
      }
    });
    grupo.appendChild(hit);
    grupo.appendChild(marca);
    return grupo;
  }

  function desenharAbas() {
    abas.replaceChildren();
    ORDEM.forEach(function (zona) {
      var quantidade = PROJETOS.filter(function (item) { return item.zona === zona; }).length;
      var ativo = piso === zona;
      var botao = el("button", "aba" + (ativo ? " is-on " + ZONAS[zona].cor : ""));
      botao.type = "button";
      botao.setAttribute("role", "tab");
      botao.setAttribute("aria-selected", ativo ? "true" : "false");
      var ponto = el("span", "ponto" + (ativo ? "" : " " + ZONAS[zona].cor));
      ponto.setAttribute("aria-hidden", "true");
      var texto = el("span");
      texto.appendChild(el("span", "nome", ZONAS[zona].nome));
      texto.appendChild(el("span", "qtd", quantidade + " projetos"));
      botao.appendChild(ponto);
      botao.appendChild(texto);
      botao.addEventListener("click", function () { escolherPiso(zona); });
      abas.appendChild(botao);
    });
    apelido.textContent = ZONAS[piso].apelido + ". Toque um número ou escolha na lista.";
  }

  function desenharPainel() {
    var item = porId(selecionadoId);
    var zona = item ? item.zona : piso;
    var cor = ZONAS[zona].cor;
    painel.replaceChildren();
    var cartao = el("div", "cartao");
    cartao.appendChild(el("div", "faixa " + cor));
    var miolo = el("div", "cartao-miolo");
    if (!item) {
      var quantidade = PROJETOS.filter(function (entrada) { return entrada.zona === piso; }).length;
      miolo.appendChild(el("p", "kicker", ZONAS[piso].nome));
      var titulo = el("h2", null, "Onde está o projeto");
      miolo.appendChild(titulo);
      miolo.appendChild(el("p", "texto", quantidade + " estandes neste piso. Pesquise o número ou toque o quadrinho na planta. Salas fechadas e áreas de apoio também estão no mapa, sem número de projeto."));
      cartao.appendChild(miolo);
      painel.appendChild(cartao);
      return;
    }
    var topo = el("div", "painel-topo");
    topo.appendChild(el("p", "kicker", ZONAS[item.zona].nome));
    var fechar = el("button", "fechar", "Fechar");
    fechar.type = "button";
    fechar.addEventListener("click", function () { escolherPiso(piso); });
    topo.appendChild(fechar);
    miolo.appendChild(topo);
    if (item.numero) miolo.appendChild(el("p", "numero-grande " + cor, item.numero));
    miolo.appendChild(el("h2", null, item.titulo));
    miolo.appendChild(el("p", "onde", item.lugar + (item.posicao ? " · " + item.posicao : "")));
    var chipCor = item.tipo === "projeto" ? cor : CHIP_TIPO[item.tipo];
    miolo.appendChild(el("p", "chip " + chipCor, ROTULO[item.tipo]));
    miolo.appendChild(el("p", "texto", item.detalhe));
    if (item.citacao) miolo.appendChild(el("blockquote", cor, item.citacao));
    if (item.nota) miolo.appendChild(el("p", "nota", item.nota));
    var filhos = item.tipo === "projeto" ? [] : projetosDoGrupo(item.id);
    if (filhos.length) {
      var bloco = el("div", "filhos");
      bloco.appendChild(el("p", null, "Estandes neste espaço"));
      var ul = el("ul");
      filhos.forEach(function (filho) {
        var li = el("li");
        var botao = el("button", "filho");
        botao.type = "button";
        botao.appendChild(el("span", "num " + ZONAS[filho.zona].cor, filho.numero));
        botao.appendChild(el("span", null, filho.posicao || filho.lugar));
        botao.addEventListener("click", function () { irPara(filho); });
        li.appendChild(botao);
        ul.appendChild(li);
      });
      bloco.appendChild(ul);
      miolo.appendChild(bloco);
    }
    cartao.appendChild(miolo);
    painel.appendChild(cartao);
  }

  function itensVisiveis() {
    var termo = consulta.trim();
    var base = termo
      ? ITENS.filter(function (item) { return combina(item, termo); })
      : ITENS.filter(function (item) { return item.zona === piso; });
    return base.slice().sort(function (a, b) {
      if (a.tipo === "projeto" && b.tipo !== "projeto") return -1;
      if (b.tipo === "projeto" && a.tipo !== "projeto") return 1;
      if (a.tipo === "projeto" && b.tipo === "projeto") {
        if (/^\d+$/.test(termo)) {
          var alvo = String(Number(termo));
          var aExato = String(Number(a.numero)) === alvo;
          var bExato = String(Number(b.numero)) === alvo;
          if (aExato !== bExato) return aExato ? -1 : 1;
        }
        return Number(a.numero) - Number(b.numero);
      }
      return a.titulo.localeCompare(b.titulo, "pt");
    });
  }

  function desenharLista() {
    var termo = consulta.trim();
    var visiveis = itensVisiveis();
    var projetos = visiveis.filter(function (item) { return item.tipo === "projeto"; });
    var demais = visiveis.filter(function (item) { return item.tipo !== "projeto"; });
    lista.replaceChildren();
    var topo = el("div", "lista-topo");
    topo.appendChild(el("h2", null, termo ? "Resultados" : "Projetos · " + ZONAS[piso].nome));
    topo.appendChild(el("p", null, termo ? visiveis.length + " encontrados" : projetos.length + " estandes"));
    lista.appendChild(topo);
    if (!visiveis.length) {
      lista.appendChild(el("p", "vazio", "Nada encontrado. Tente o número do projeto, como 12, ou o nome da sala, como Sala 8."));
      return;
    }
    lista.appendChild(grupoLista("Estandes", projetos));
    if (demais.length) lista.appendChild(grupoLista("Salas e serviços", demais));
  }

  function grupoLista(titulo, itens) {
    var bloco = el("div", "grupo");
    bloco.appendChild(el("h3", null, titulo));
    var ul = el("ul", "cartas");
    itens.forEach(function (item) {
      var ativo = item.id === selecionadoId;
      var cor = ZONAS[item.zona].cor;
      var li = el("li");
      var botao = el("button", "carta" + (ativo ? " is-on " + cor : ""));
      botao.type = "button";
      botao.setAttribute("aria-pressed", ativo ? "true" : "false");
      var seloCor = item.numero ? cor + (ativo ? " is-on" : "") : SELO_TIPO[item.tipo];
      var selo = el("span", "selo" + (item.numero ? "" : " miudo") + " " + seloCor, item.numero || SELO[item.tipo]);
      var txt = el("span", "txt");
      txt.appendChild(el("strong", null, item.titulo));
      txt.appendChild(el("span", null, item.posicao ? item.lugar + " · " + item.posicao : localCurto(item)));
      botao.appendChild(selo);
      botao.appendChild(txt);
      botao.addEventListener("click", function () { irPara(item); });
      li.appendChild(botao);
      ul.appendChild(li);
    });
    bloco.appendChild(ul);
    return bloco;
  }

  function centralizar() {
    if (!selecionadoId) return;
    var marca = document.getElementById("marca-" + selecionadoId);
    if (!marca) return;
    var caixaVisor = visor.getBoundingClientRect();
    var caixa = marca.getBoundingClientRect();
    var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    visor.scrollBy({
      left: caixa.left - caixaVisor.left - caixaVisor.width / 2 + caixa.width / 2,
      top: caixa.top - caixaVisor.top - caixaVisor.height / 2 + caixa.height / 2,
      behavior: reduzido ? "auto" : "smooth",
    });
  }

  function desenhar() {
    app.dataset.piso = piso;
    limpar.hidden = !consulta;
    zoomMenos.disabled = zoom === 1;
    zoomMais.disabled = zoom === 3;
    desenharAbas();
    desenharMapa();
    desenharPainel();
    desenharLista();
    requestAnimationFrame(centralizar);
  }

  document.getElementById("busca").addEventListener("submit", function (evento) {
    evento.preventDefault();
    var visiveis = itensVisiveis();
    var primeiro = visiveis.filter(function (item) { return item.tipo === "projeto"; })[0] || visiveis[0];

    // Tirar o foco do campo fecha o teclado virtual em celulares.
    campo.blur();
    if (primeiro) irPara(primeiro);

    // Espera o teclado recolher e o painel ser redesenhado antes de rolar até os detalhes.
    window.setTimeout(function () {
      var destino = primeiro ? painel : lista;
      if (destino) {
        destino.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
        });
      }
    }, 300);
  });
  campo.addEventListener("input", function () {
    consulta = campo.value;
    desenhar();
  });
  limpar.addEventListener("click", function () {
    consulta = "";
    campo.value = "";
    campo.focus();
    desenhar();
  });
  zoomMenos.addEventListener("click", function () {
    if (zoom > 1) zoom -= 1;
    desenhar();
  });
  zoomMais.addEventListener("click", function () {
    if (zoom < 3) zoom += 1;
    desenhar();
  });
  window.addEventListener("keydown", function (evento) {
    var alvo = evento.target;
    var digitando = alvo instanceof HTMLInputElement || alvo instanceof HTMLTextAreaElement;
    if (evento.key === "/" && !digitando) {
      evento.preventDefault();
      campo.focus();
    }
    if (evento.key === "Escape") {
      consulta = "";
      campo.value = "";
      if (selecionadoId) escolherPiso(piso);
      else desenhar();
    }
  });

  zoomMenos.innerHTML = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' aria-hidden='true'><path d='M5 12h14'/></svg>";
  zoomMais.innerHTML = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' aria-hidden='true'><path d='M12 5v14M5 12h14'/></svg>";

  lerUrl();
  desenhar();
})();
