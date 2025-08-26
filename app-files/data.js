var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2714647493703666,
          "pitch": 0.2797473825279546,
          "rotation": 0,
          "target": "1-bloco2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3651665742078745,
          "pitch": 0.1910512547694445,
          "title": "Hall de entrada",
          "text": "Se o estudante é para a esquerda ele entra no bloco1, onde ele consegue acessar alguns apartamentos e a lavanderia, enquanto, que se ele entrar no bloco 2 a direita ele só conseguirá acessar os apartamentos desse bloco."
        }
      ]
    },
    {
      "id": "1-bloco2",
      "name": "Bloco2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.9893746175687212,
        "pitch": 0.09521639441522645,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -3.00522370038936,
          "pitch": 0.18592940886827236,
          "rotation": 0,
          "target": "2-escada_meio"
        },
        {
          "yaw": 0.7072824975790972,
          "pitch": 0.5535280796579585,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5847526092425603,
          "pitch": 0.18505973179291502,
          "title": "Entrada Bloco 2",
          "text": "Aqui é possível visualizar duas portas para entrar em apartamentos e também uma escada, que se subir ela irá chegar a outros apartamentos."
        }
      ]
    },
    {
      "id": "2-escada_meio",
      "name": "Escada_Meio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.00005056978385020727,
        "pitch": 0,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 0.11822003402261139,
          "pitch": 0.6730012439516333,
          "rotation": 0,
          "target": "1-bloco2"
        },
        {
          "yaw": -0.5465343164652587,
          "pitch": 0.22597595540690918,
          "rotation": 0,
          "target": "3-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2167962728098196,
          "pitch": 0.166246928090791,
          "title": "Metade do caminho",
          "text": "Continue subindo"
        }
      ]
    },
    {
      "id": "3-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3387832596221134,
        "pitch": 0.22316769870657893,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -2.3772237774059093,
          "pitch": 0.3907580200836698,
          "rotation": 0,
          "target": "4-apartamento"
        },
        {
          "yaw": 2.726628414866476,
          "pitch": 0.6703767028093548,
          "rotation": 0,
          "target": "2-escada_meio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6074570069839549,
          "pitch": -0.030204317565090122,
          "title": "Segundo andar",
          "text": "Entre no apartamento da esquerda, para visualiza-lo."
        }
      ]
    },
    {
      "id": "4-apartamento",
      "name": "Apartamento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -0.31046084251904915,
          "pitch": 0.22383067633169595,
          "rotation": 0,
          "target": "5-cozinha"
        },
        {
          "yaw": -3.0889058144247166,
          "pitch": 0.42771054116422746,
          "rotation": 0,
          "target": "3-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.13247833556380684,
          "pitch": 0.1232122055310505,
          "title": "Apartamento",
          "text": "Aqui é possível visualizar as portas do quartos e também um freezer para colocar as comidas que precisam estar congeladas."
        }
      ]
    },
    {
      "id": "5-cozinha",
      "name": "Cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1287666106058989,
          "pitch": 0.3282344760353766,
          "rotation": 0,
          "target": "4-apartamento"
        },
        {
          "yaw": 2.884198979996736,
          "pitch": 0.43276913930774974,
          "rotation": 0,
          "target": "6-convivencia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1920932951108796,
          "pitch": 0.44447418415388995,
          "title": "Cozinha",
          "text": "Cozinha para os estudante fazerem comida, e uma regra dela é que quando sujar a louça logo em seguida lave ela."
        }
      ]
    },
    {
      "id": "6-convivencia",
      "name": "Convivencia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1586061725625143,
          "pitch": 0.3881420701330782,
          "rotation": 0,
          "target": "5-cozinha"
        },
        {
          "yaw": 1.455823696359852,
          "pitch": 0.28873315056793913,
          "rotation": 0,
          "target": "7-varanda"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3667468001884657,
          "pitch": 0.13093674890794915,
          "title": "Área de convivência",
          "text": "Área de convivência para os estudantes interagirem entre eles."
        }
      ]
    },
    {
      "id": "7-varanda",
      "name": "Varanda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3989145918071566,
          "pitch": 0.49209802202757835,
          "rotation": 0,
          "target": "6-convivencia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.17858213919696553,
          "pitch": 0.709555873956802,
          "title": "Varanda",
          "text": "Varanda para o estudante tomar um ar e olhar a vista, além de ter acesso a varanda de outros estudantes, a fim que seja possível essa interação entre as pessoas."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
