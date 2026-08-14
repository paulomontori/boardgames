const games = [
  {
    "title": "Bananagrams",
    "images": ["assets/games/bananagram_1.jpg", "assets/games/bananagram_2.jpg"],
    "players": "1–8",
    "time": "10–20 min",
    "age": "",
    "style": "Palavras / velocidade",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Cada pessoa recebe letras e monta, ao mesmo tempo, uma grade de palavras cruzadas própria. Quando alguém usa todas as suas letras, todos compram mais uma letra e precisam reorganizar a grade se necessário. A partida termina quando não há letras suficientes para todos comprarem; vence quem ficar sem letras primeiro e tiver apenas palavras válidas.",
    "feeling": "Corrida de palavras rápida, silenciosamente caótica e cheia de rearranjos de última hora.",
    "strength": "Explica em poucos segundos e funciona muito bem para partidas curtas ou aquecimento."
  },
  {
    "title": "Balde de Caranguejo",
    "images": ["assets/games/balde_carangejo_1.png", "assets/games/balde_carangejo_2.png"],
    "players": "2–8",
    "time": "20–40 min",
    "age": "",
    "style": "Humor / sabotagem / cartas",
    "mode": "Competitivo",
    "bluff": "Leve",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Cada jogador tenta avançar nos próprios objetivos, mas a graça está em puxar os outros de volta para o “balde”. As cartas permitem atrapalhar planos, roubar vantagens, criar efeitos inesperados e fazer alianças temporárias. Você precisa escolher quando se proteger, quando atacar e quando deixar outra pessoa virar alvo do grupo.",
    "feeling": "Competitivo, bagunçado e cheio de vinganças engraçadas entre amigos.",
    "strength": "Gera interação o tempo todo e transforma pequenas sabotagens em histórias divertidas."
  },
  {
    "title": "Bandido",
    "images": ["assets/games/bandido_1.png", "assets/games/bandido_2.jpg"],
    "players": "1–4",
    "time": "10–20 min",
    "age": "",
    "style": "Cooperativo / puzzle / cartas",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Não muito",
    "complexity": "Fácil",
    "how": "Um prisioneiro está fugindo por túneis que se espalham a partir da carta inicial. Em cada turno, o grupo coloca cartas para fechar caminhos, desviar túneis ou reduzir as saídas abertas. Todos vencem se conseguirem bloquear todas as rotas de fuga antes que o baralho acabe.",
    "feeling": "Quebra-cabeça cooperativo pequeno, direto e cada vez mais apertado.",
    "strength": "É simples de ensinar, ocupa pouco espaço e cria decisões interessantes rapidamente."
  },
  {
    "title": "Bandida",
    "images": ["assets/games/bandida_1.jpg", "assets/games/bandida_2.jpg"],
    "players": "1–4",
    "time": "10–20 min",
    "age": "",
    "style": "Cooperativo / puzzle / cartas",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Não muito",
    "complexity": "Fácil",
    "how": "A ideia central é parecida com Bandido: o grupo precisa controlar uma rede de túneis antes que a fugitiva escape. A diferença é que há cartas e modos que criam efeitos mais variados, como caminhos especiais e decisões sobre como lidar com a fuga. O grupo precisa conversar bem para fechar as saídas certas na hora certa.",
    "feeling": "Puzzle cooperativo leve, mas com mais surpresa e variedade.",
    "strength": "Mantém a facilidade do original e acrescenta formas diferentes de jogar."
  },
  {
    "title": "Boggle Slam!",
    "images": ["assets/games/boggle_1.jpg", "assets/games/boggle_2.jpg"],
    "players": "2–4",
    "time": "10–20 min",
    "age": "",
    "style": "Palavras / velocidade / cartas",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Uma palavra de quatro letras fica no centro da mesa. Todos jogam ao mesmo tempo, trocando uma letra por vez para formar uma nova palavra válida. O objetivo é ficar sem cartas antes dos outros, então é preciso enxergar mudanças rápidas e agir antes que alguém use a palavra que você pensou.",
    "feeling": "Disputa acelerada de vocabulário, reflexo e raciocínio rápido.",
    "strength": "Partidas curtas, regras muito diretas e bastante energia na mesa."
  },
  {
    "title": "Código Secreto: Imagens",
    "images": ["assets/games/codigo_secreto_imagens_1.png", "assets/games/codigo_secreto_imagens_2.jpg"],
    "players": "2–8",
    "time": "15–30 min",
    "age": "",
    "style": "Associação / dedução / jogo em equipes",
    "mode": "Competitivo em equipes",
    "bluff": "Não, mas existe informação secreta",
    "party": "Sim",
    "complexity": "Fácil/Média",
    "how": "Duas equipes observam várias imagens na mesa, mas só os chefes de equipe sabem quais imagens pertencem a cada time. Em cada rodada, o chefe dá uma dica com uma palavra e um número, como “frio, 2”, para indicar quantas imagens estão ligadas à dica. A equipe tenta acertar suas imagens sem escolher cartas neutras, do adversário ou o assassino, que causa derrota imediata.",
    "feeling": "Criativo e cheio de conexões inesperadas entre imagens aparentemente sem relação.",
    "strength": "Combina comunicação, dedução e trabalho em equipe de um jeito muito acessível."
  },
  {
    "title": "Cores com Dicas",
    "images": ["assets/games/cores_1.png", "assets/games/cores_2.png"],
    "players": "3–10",
    "time": "20–30 min",
    "age": "",
    "style": "Associação / dedução / cores",
    "mode": "Competitivo em equipes ou individual",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Um jogador escolhe secretamente um tom em uma cartela cheia de cores e dá uma dica curta, como “céu”, “limão” ou “ferrugem”. Os outros marcam qual tom acham que combina com a dica. Quanto mais perto chegarem da cor escolhida, mais pontos fazem; quem deu a dica também pontua quando o grupo entende bem a associação.",
    "feeling": "Leve, criativo e cheio de discussões sobre como cada pessoa imagina uma cor.",
    "strength": "Funciona muito bem com grupos grandes porque todo mundo participa ao mesmo tempo."
  },
  {
    "title": "Coup",
    "images": ["assets/games/coup_1.jpg", "assets/games/coup_2.png"],
    "players": "2–6",
    "time": "15 min",
    "age": "",
    "style": "Bluff",
    "mode": "Competitivo",
    "bluff": "Sim",
    "party": "Sim",
    "complexity": "Média",
    "how": "Cada jogador tem personagens secretos que dão poderes, mas você pode fingir ter qualquer personagem para usar suas ações. Os outros precisam decidir se acreditam, bloqueiam ou desafiam seu blefe. Quem é desafiado e estava mentindo perde influência; quem perde todas as influências sai da rodada. Vence o último sobrevivente.",
    "feeling": "Blefe psicológico curto, tenso e cheio de acusações.",
    "strength": "Poucas cartas criam muita leitura social e decisões arriscadas."
  },
  {
    "title": "Dany",
    "images": ["assets/games/dany_1.png", "assets/games/dany_2.jpg"],
    "players": "3–8",
    "time": "20–40 min",
    "age": "",
    "style": "Dedução / associação / comunicação limitada",
    "mode": "Cooperativo",
    "bluff": "Sim",
    "party": "Sim",
    "complexity": "Fácil/Média",
    "how": "Os jogadores precisam interpretar pistas visuais para descobrir ideias, palavras ou conceitos. Um dos participantes pode estar tentando confundir o grupo sem se revelar, então cada resposta precisa ser analisada com cuidado. A partida mistura criatividade, comunicação limitada e dedução sobre quem está ajudando de verdade.",
    "feeling": "Mistério social leve, com confusão divertida e interpretações bem diferentes.",
    "strength": "Ótimo para grupos que gostam de conversar, suspeitar e rir das pistas estranhas."
  },
  {
    "title": "Decisões de Merda",
    "images": ["assets/games/decisoes_de_merda_1.png", "assets/games/decisoes_de_merda_2.png"],
    "players": "3–10",
    "time": "20–40 min",
    "age": "",
    "style": "Humor adulto",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Muito",
    "complexity": "Fácil",
    "how": "A cada rodada, os jogadores encaram situações absurdas, desconfortáveis ou moralmente péssimas e precisam escolher uma resposta. O jogo funciona mais pela conversa do que pela estratégia: as escolhas revelam preferências, geram debates e rendem piadas internas. Ganha quem melhor prever o grupo ou se destacar nas decisões, dependendo da carta usada.",
    "feeling": "Humor adulto, constrangedor e feito para grupos que já têm intimidade.",
    "strength": "Cria discussões engraçadas rapidamente e não exige experiência com jogos."
  },
  {
    "title": "Dixit",
    "images": ["assets/games/dixit_1.jpg", "assets/games/dixit_2.png"],
    "players": "3–8",
    "time": "30 min",
    "age": "",
    "style": "Criatividade / interpretação",
    "mode": "Competitivo leve",
    "bluff": "Não exatamente",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Em cada rodada, o narrador escolhe uma carta ilustrada da mão e dá uma dica aberta: pode ser uma frase, palavra, som ou referência. Os outros jogam cartas que combinem com a dica para tentar confundir a votação. Depois todos tentam descobrir qual era a carta original do narrador; a melhor dica é aquela que alguns acertam, mas não todo mundo.",
    "feeling": "Poético, subjetivo e cheio de interpretações inesperadas.",
    "strength": "As ilustrações puxam criatividade até de quem não costuma jogar muito."
  },
  {
    "title": "Exploding Kittens",
    "images": ["assets/games/exploding_kittens_1.jpg", "assets/games/exploding_kittens_1.png"],
    "players": "2–5",
    "time": "15 min",
    "age": "",
    "style": "Cartas / caos",
    "mode": "Competitivo",
    "bluff": "Leve",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "No seu turno, você usa cartas de ação se quiser e depois compra uma carta do baralho. Se comprar um Exploding Kitten e não tiver como desarmar, você é eliminado. As cartas permitem espiar o topo, pular turnos, embaralhar, atacar jogadores e roubar cartas, criando uma disputa para sobreviver até o fim.",
    "feeling": "Caos leve, engraçado e com tensão a cada compra de carta.",
    "strength": "É extremamente acessível e costuma funcionar mesmo com jogadores iniciantes."
  },
  {
    "title": "F.D.P.",
    "images": ["assets/games/fpd_1.png", "assets/games/fpd_2.png"],
    "players": "4–10+",
    "time": "30–60 min",
    "age": "",
    "style": "Humor adulto / cartas / respostas criativas",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Muito",
    "complexity": "Fácil",
    "how": "Um jogador lê uma pergunta ou frase incompleta. Os demais escolhem, em segredo, a carta de resposta mais absurda, ofensiva ou engraçada que tiverem na mão. O leitor embaralha as respostas, lê todas em voz alta e escolhe a favorita; quem enviou a carta escolhida marca ponto.",
    "feeling": "Zoeira pesada, politicamente incorreta e dependente do senso de humor do grupo.",
    "strength": "É fácil de começar e rende muitas risadas com pessoas que gostam de humor sem filtro."
  },
  {
    "title": "Hanabi",
    "images": ["assets/games/hanabi_1.jpg"],
    "players": "2–5",
    "time": "25 min",
    "age": "",
    "style": "Coop / dedução",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Média",
    "how": "O grupo precisa montar fogos de artifício em ordem crescente por cor, mas cada jogador segura as próprias cartas viradas para fora: todos veem suas cartas, menos você. Em vez de falar livremente, os jogadores dão dicas limitadas sobre cores ou números. A graça é deduzir quais cartas jogar, guardar ou descartar com base nessas pistas.",
    "feeling": "Comunicação indireta inteligente, silenciosa e cheia de pequenas revelações.",
    "strength": "A inversão de ver a mão dos outros, mas não a sua, torna o jogo muito original."
  },
  {
    "title": "Hitster",
    "images": ["assets/games/hitster_1.png", "assets/games/hitster_2.jpg"],
    "players": "2–10",
    "time": "30 min",
    "age": "",
    "style": "Música / trivia",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Uma música é tocada pelo aplicativo, e o jogador precisa colocá-la na posição correta da sua linha do tempo, antes ou depois das músicas que já acertou. Não é necessário saber o ano exato; basta comparar épocas, estilos e memórias musicais. Quem montar primeiro uma sequência suficiente de músicas vence.",
    "feeling": "Nostalgia musical, cantoria espontânea e palpites confiantes que dão errado.",
    "strength": "Perfeito para festas porque vira conversa sobre músicas e lembranças."
  },
  {
    "title": "ITO",
    "images": ["assets/games/ito_1.jpg", "assets/games/ito_2.png"],
    "players": "2–8",
    "time": "20–30 min",
    "age": "",
    "style": "Associação / comunicação / coop",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Cada jogador recebe um número secreto dentro de uma escala. O grupo também recebe um tema, como “coisas assustadoras” ou “comidas gostosas”. Cada pessoa dá uma pista que represente a intensidade do seu número sem revelá-lo; depois todos tentam colocar as pistas em ordem, do menor para o maior, antes de revelar os números.",
    "feeling": "Engraçado e revelador, porque cada pessoa mede as coisas de um jeito diferente.",
    "strength": "Gera conversa naturalmente e é muito fácil adaptar ao humor do grupo."
  },
  {
    "title": "Jenga",
    "images": ["assets/games/jenga_1.jpg"],
    "players": "2–8+",
    "time": "10–20 min",
    "age": "",
    "style": "Habilidade física / destreza",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Os jogadores retiram um bloco por vez de qualquer andar permitido da torre e colocam esse bloco no topo. A estrutura fica mais alta, torta e instável a cada jogada. O objetivo é completar seu turno sem derrubar a torre; quem causa a queda perde.",
    "feeling": "Tensão crescente, mãos tremendo e comemoração quando uma jogada impossível funciona.",
    "strength": "Quase não precisa de explicação e diverte pessoas de qualquer nível de experiência."
  },
  {
    "title": "Kariba",
    "images": ["assets/games/kariba_1.jpg", "assets/games/kariba_2.png"],
    "players": "2–4",
    "time": "15–20 min",
    "age": "",
    "style": "Cartas / controle de área leve",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Fácil",
    "how": "Os animais se reúnem ao redor de um lago, e cada jogador baixa cartas para formar grupos de uma espécie. Quando há animais suficientes, eles espantam espécies mais fracas e geram pontos para quem provocou a fuga. Como animais maiores também podem ser pressionados depois, é preciso escolher o momento certo de jogar cada conjunto.",
    "feeling": "Rápido, leve e com pequenas viradas estratégicas.",
    "strength": "Regras simples, boa interação e partidas que pedem revanche."
  },
  {
    "title": "Kingdomino",
    "images": ["assets/games/king_domino_1.jpg", "assets/games/king_domino_2.png"],
    "players": "2–4",
    "time": "15–25 min",
    "age": "",
    "style": "Construção / estratégia leve / colocação de peças",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Fácil",
    "how": "Cada jogador constrói um reino usando peças parecidas com dominós, sempre conectando ao menos um terreno igual ao que já existe no seu tabuleiro. Áreas grandes valem mais quando têm coroas, então você tenta equilibrar tamanho e multiplicadores. A escolha de uma peça forte pode fazer você jogar mais tarde na rodada seguinte, criando uma decisão simples e importante.",
    "feeling": "Construção rápida, visualmente satisfatória e com escolhas leves, mas relevantes.",
    "strength": "É um excelente jogo de entrada para quem quer experimentar estratégia moderna."
  },
  {
    "title": "Love Letter",
    "images": ["assets/games/love_letter_1.png", "assets/games/love_letter_2.png"],
    "players": "2–6",
    "time": "20 min",
    "age": "",
    "style": "Dedução leve",
    "mode": "Competitivo",
    "bluff": "Sim, leve",
    "party": "Parcialmente",
    "complexity": "Fácil",
    "how": "Em cada turno, você compra uma carta, fica com duas na mão e joga uma delas para usar seu efeito. As cartas permitem adivinhar a mão dos outros, proteger-se, comparar valores ou eliminar jogadores. A rodada termina quando só resta uma pessoa ou quando o baralho acaba; vence quem terminar com a carta mais alta ou sobreviver.",
    "feeling": "Dedução rápida com blefes pequenos e muita leitura das escolhas dos outros.",
    "strength": "Usa pouquíssimas cartas, mas cada turno parece uma decisão importante."
  },
  {
    "title": "Magic Maze",
    "images": ["assets/games/magic_maze_1.jpg", "assets/games/magic_maze_2.png"],
    "players": "1–8",
    "time": "15 min",
    "age": "",
    "style": "Coop em tempo real",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Média",
    "how": "O grupo controla aventureiros dentro de um shopping mágico, mas cada jogador só pode executar alguns tipos de movimento ou ação. Quase não é permitido conversar, e tudo acontece contra o relógio. Vocês precisam explorar o mapa, pegar equipamentos e escapar antes que o tempo acabe, coordenando ações sem explicar demais.",
    "feeling": "Desespero coletivo, olhares intensos e vontade de gritar instruções que não pode dar.",
    "strength": "É um cooperativo muito diferente, acelerado e memorável."
  },
  {
    "title": "Misty",
    "images": ["assets/games/misty_1.jpg", "assets/games/misty_2.png"],
    "players": "2–4",
    "time": "15–30 min",
    "age": "",
    "style": "Cartas / estratégia leve / coleção",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Não muito",
    "complexity": "Fácil",
    "how": "Os jogadores montam uma pequena janela de cartas, escolhendo quais figuras colocar e onde posicioná-las. Algumas cartas pontuam diretamente, outras se movem ou interagem com cartas vizinhas no fim da rodada. A decisão principal é criar uma composição que renda pontos sem deixar efeitos ruins atrapalharem sua própria janela.",
    "feeling": "Calmo, bonito e estratégico na medida certa.",
    "strength": "Partidas curtas com escolhas táticas claras e fáceis de visualizar."
  },
  {
    "title": "Munchkin",
    "images": ["assets/games/munchkin_1.jpg", "assets/games/munchkin_2.jpg"],
    "players": "3–6",
    "time": "60–120 min",
    "age": "",
    "style": "Cartas / humor / traição leve",
    "mode": "Competitivo",
    "bluff": "Sim, bastante negociação e traição",
    "party": "Parcialmente",
    "complexity": "Média",
    "how": "Cada jogador explora masmorras, enfrenta monstros, ganha equipamentos e tenta subir até o nível 10. Quando alguém luta contra um monstro, os outros podem ajudar em troca de recompensa ou atrapalhar jogando cartas que deixam a luta pior. A partida vira uma negociação constante, principalmente quando alguém está perto de vencer.",
    "feeling": "Caótico, engraçado e cheio de traições “só dessa vez”.",
    "strength": "O humor de RPG e a interação direta criam momentos muito marcantes."
  },
  {
    "title": "Mysterium",
    "images": ["assets/games/mysterium_1.jpg", "assets/games/mysterium_2.jpg"],
    "players": "2–7",
    "time": "45 min",
    "age": "",
    "style": "Dedução cooperativa",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Média",
    "how": "Um jogador é o fantasma e não pode falar livremente. Ele entrega cartas com imagens abstratas para os médiuns tentarem descobrir suspeito, local e objeto ligados a um crime. Os médiuns discutem as interpretações, avançam quando acertam e, no final, precisam identificar juntos a solução verdadeira.",
    "feeling": "Investigação onírica, como tentar interpretar sonhos estranhos em grupo.",
    "strength": "A atmosfera e as cartas surrealistas tornam a experiência muito imersiva."
  },
  {
    "title": "Nem a Pato",
    "images": ["assets/games/nem_a_pato_1.png", "assets/games/nem_a_pato_2.png"],
    "players": "2–10",
    "time": "15–25 min",
    "age": "",
    "style": "Cartas / estratégia leve / sabotagem",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "é um jogo de trivia e blefe: uma carta traz uma pergunta com resposta numérica, e cada jogador chuta um número sem saber a resposta certa, tentando ficar próximo sem exagerar. Os demais podem aumentar esse palpite ou duvidar dele gritando Nem a Pato!, revelando a carta, quem passou do valor real se dá mal na rodada.",
    "feeling": "Rápido, brincalhão e um pouco caótico.",
    "strength": "Tem bastante interação sem ficar pesado ou difícil de acompanhar."
  },
  {
    "title": "Nem a Pato 2",
    "images": ["assets/games/nem_a_pato_2_1.png", "assets/games/nem_a_pato_2_2.png"],
    "players": "2–10",
    "time": "15–25 min",
    "age": "",
    "style": "Cartas / estratégia leve / sabotagem",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "é um jogo de trivia e blefe: uma carta traz uma pergunta com resposta numérica, e cada jogador chuta um número sem saber a resposta certa, tentando ficar próximo sem exagerar. Os demais podem aumentar esse palpite ou duvidar dele gritando Nem a Pato!, revelando a carta, quem passou do valor real se dá mal na rodada.",
    "feeling": "Rápido, brincalhão e um pouco caótico.",
    "strength": "Tem bastante interação sem ficar pesado ou difícil de acompanhar."
  },
  {
    "title": "Nova Luna",
    "images": ["assets/games/nova_luna_1.jpg", "assets/games/nova_luna_2.jpg"],
    "players": "1–4",
    "time": "30–60 min",
    "age": "",
    "style": "Estratégia abstrata / puzzle",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Não",
    "complexity": "Média",
    "how": "Você escolhe peças coloridas de uma roda comum e as encaixa no seu tabuleiro para cumprir objetivos impressos nas próprias peças. Esses objetivos pedem cores específicas ao redor ou conexões entre peças. Ao cumprir um objetivo, você coloca um marcador; quem colocar todos os marcadores primeiro vence. Peças melhores podem custar mais tempo e fazer você demorar a jogar de novo.",
    "feeling": "Puzzle calmo, estratégico e muito satisfatório quando os encaixes funcionam.",
    "strength": "Oferece profundidade sem depender de conflito direto entre jogadores."
  },
  {
    "title": "Odin",
    "images": ["assets/games/odin_1.jpg"],
    "players": "2–6",
    "time": "15–30 min",
    "age": "",
    "style": "Vazamento de mão / estratégia leve",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Fácil",
    "how": "O objetivo é se livrar das cartas da mão jogando combinações mais fortes do que a combinação atual da mesa. Você pode jogar cartas de mesmo valor ou de mesma cor, e precisa avaliar quando gastar cartas altas ou guardar opções para depois. Quem termina a mão primeiro encerra a rodada e os outros pontuam negativamente pelas cartas restantes.",
    "feeling": "Ágil, esperto e com clima de jogo de descarte mais estratégico.",
    "strength": "É fácil de aprender, mas recompensa timing e leitura da mesa."
  },
  {
    "title": "Pandemic",
    "images": ["assets/games/pandemic_1.png", "assets/games/pandemic_2.jpg"],
    "players": "2–4",
    "time": "45–60 min",
    "age": "",
    "style": "Estratégia cooperativa",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Não",
    "complexity": "Média",
    "how": "O grupo é uma equipe de especialistas tentando conter quatro doenças pelo mundo. Em seus turnos, vocês viajam pelo mapa, tratam infecções, constroem estações, trocam cartas e pesquisam curas. Depois de cada turno, o próprio jogo espalha novas doenças e pode causar surtos em cadeia. Todos vencem ao descobrir as quatro curas antes que alguma condição de derrota aconteça.",
    "feeling": "Urgência constante, planejamento em equipe e sensação de crise global.",
    "strength": "É um dos cooperativos modernos mais clássicos e ensina bem trabalho em equipe."
  },
  {
    "title": "Parade",
    "images": ["assets/games/parade_1.png", "assets/games/parade_2.jpg"],
    "players": "2–6",
    "time": "20–30 min",
    "age": "",
    "style": "Cartas / controle de risco",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Fácil/Média",
    "how": "Os jogadores colocam cartas em uma fila de desfile e tentam evitar pegar cartas que virarão pontos negativos. O valor da carta jogada define quantas cartas ficam protegidas no início da fila e quais podem ser coletadas. Como no final a menor pontuação vence, cada jogada envolve decidir o que é menos ruim pegar agora ou deixar para os outros.",
    "feeling": "Leve, elegante e cheio de decisões simples que doem um pouco.",
    "strength": "É fácil de ensinar e tem uma pontuação esperta que muda suas prioridades."
  },
  {
    "title": "Perfil Express: Filmes e Séries",
    "images": ["assets/games/perfil_filmes_series_1.jpg", "assets/games/perfil_filmes_series_2.jpg"],
    "players": "2–10+",
    "time": "20–40 min",
    "age": "",
    "style": "Trivia / adivinhação",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Uma carta traz a resposta de um filme ou série e várias dicas numeradas. Os jogadores vão pedindo pistas aos poucos e podem tentar adivinhar a qualquer momento. Quanto mais cedo alguém acerta, mais pontos ganha, mas chutar cedo demais pode entregar informação para os outros.",
    "feeling": "Quiz leve de cultura pop, memória afetiva e palpites em voz alta.",
    "strength": "Funciona muito bem com quem gosta de filmes e séries, mesmo sem ser jogador frequente."
  },
  {
    "title": "Piratas!",
    "images": ["assets/games/piratas_1.jpg", "assets/games/piratas_2.png"],
    "players": "2–6",
    "time": "20–40 min",
    "age": "",
    "style": "Cartas / coleção / confronto leve",
    "mode": "Competitivo",
    "bluff": "Não muito",
    "party": "Parcialmente",
    "complexity": "Fácil/Média",
    "how": "Cada jogador tenta juntar tesouros, contratar personagens e montar combinações que rendam mais ouro. As cartas permitem usar habilidades, roubar recursos, proteger sua tripulação e atrapalhar os planos dos rivais. O desafio é equilibrar acumular pontos com se defender das interferências dos outros piratas.",
    "feeling": "Aventura leve, bagunçada e cheia de pequenas provocações.",
    "strength": "Tem tema fácil de entender e muita interação entre os jogadores."
  },
  {
    "title": "Potion Rush",
    "images": ["assets/games/potion_rush_1.jpg"],
    "players": "2–6",
    "time": "20–40 min",
    "age": "",
    "style": "Cartas / combinação / estratégia leve",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Fácil/Média",
    "how": "Os jogadores coletam ingredientes e usam combinações para preparar poções que dão pontos ou efeitos especiais. Em cada rodada, você decide quais recursos pegar, quais receitas completar e como aproveitar bônus antes dos adversários. A partida premia quem monta bons combos sem desperdiçar cartas.",
    "feeling": "Leve, colorido e satisfatório quando uma sequência de poções encaixa.",
    "strength": "Mistura estratégia simples com um tema fácil de visualizar."
  },
  {
    "title": "Project L",
    "images": ["assets/games/project_l_1.png", "assets/games/project_l_2.jpg"],
    "players": "1–6",
    "time": "20–40 min",
    "age": "",
    "style": "Puzzle / engine building",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Não",
    "complexity": "Média",
    "how": "Você pega quebra-cabeças e preenche seus espaços com peças geométricas parecidas com Tetris. Ao completar um quebra-cabeças, ganha pontos e, muitas vezes, peças melhores para resolver desafios maiores. A partida é uma corrida para construir uma “máquina” eficiente: pegar peças, completar puzzles e transformar recompensas em novas oportunidades.",
    "feeling": "Muito satisfatório visualmente, com sensação clara de evolução a cada peça nova.",
    "strength": "É elegante, bonito e oferece decisões estratégicas sem regras complicadas."
  },
  {
    "title": "Quartz",
    "images": ["assets/games/quartz_1.jpg", "assets/games/quartz_2.jpg"],
    "players": "3–5",
    "time": "20–30 min",
    "age": "",
    "style": "Push your luck / coleta de recursos",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Fácil",
    "how": "Os jogadores são anões minerando cristais em uma caverna. No seu turno, você decide continuar cavando para tentar pegar mais cristais ou sair da mina para garantir o que já coletou. Continuar pode render mais pontos, mas também pode revelar perigos que fazem você perder recursos. Vence quem administrar melhor o risco ao longo das rodadas.",
    "feeling": "Tensão divertida de “só mais uma compra” antes de tudo dar errado.",
    "strength": "É muito acessível e cria torcida, provocação e risadas rapidamente."
  },
  {
    "title": "Saboteur",
    "images": ["assets/games/saboteur_1.png", "assets/games/saboteur_2.jpg"],
    "players": "3–10",
    "time": "30 min",
    "age": "",
    "style": "Dedução social",
    "mode": "Competitivo",
    "bluff": "Sim",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "A maioria dos jogadores são anões tentando construir túneis até o ouro, mas alguns são sabotadores secretos. Em cada turno, você pode colocar caminhos, consertar ou quebrar ferramentas e dificultar o avanço dos outros. O grupo precisa observar ações suspeitas para descobrir quem está ajudando e quem está desviando o túnel de propósito.",
    "feeling": "Paranoia divertida, acusações constantes e alianças instáveis.",
    "strength": "Equilibra bem construção de caminho, blefe e dedução social."
  },
  {
    "title": "Sintonia",
    "images": ["assets/games/sintonia_1.jpg", "assets/games/sintonia_2.jpg"],
    "players": "2–10+",
    "time": "20–40 min",
    "age": "",
    "style": "Associação / comunicação",
    "mode": "Cooperativo em equipes",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "O jogo apresenta um tema, palavra ou situação, e os jogadores tentam dar respostas que combinem entre si sem combinar antes. A pontuação vem de pensar parecido: quanto mais respostas iguais ou compatíveis aparecem, melhor para o grupo ou equipe. O desafio é prever o raciocínio das outras pessoas, não encontrar uma resposta perfeita.",
    "feeling": "Social, leve e engraçado quando todo mundo descobre que pensou diferente.",
    "strength": "Gera conversa imediatamente e funciona bem até com grupos grandes."
  },
  {
    "title": "Só Uma",
    "images": ["assets/games/so_uma_1.jpg", "assets/games/so_uma_2.jpg"],
    "players": "3–7",
    "time": "20–30 min",
    "age": "",
    "style": "Associação de palavras / coop",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Um jogador precisa adivinhar uma palavra secreta. Os demais escrevem, sem conversar, uma única palavra de dica para ajudar. Antes da dica chegar ao adivinhador, dicas repetidas são canceladas e removidas, então o grupo precisa ser criativo sem ficar obscuro demais. O objetivo é acertar o máximo de palavras possível em conjunto.",
    "feeling": "Leve, cooperativo e muito divertido quando dicas óbvias somem da mesa.",
    "strength": "É extremamente simples e costuma funcionar com qualquer tipo de grupo."
  },
  {
    "title": "Sonora",
    "images": ["assets/games/sonora_1.png", "assets/games/sonora_2.jpg"],
    "players": "1–4",
    "time": "30–45 min",
    "age": "",
    "style": "Flick & write",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Não muito",
    "complexity": "Média",
    "how": "Você arremessa discos em um tabuleiro e registra resultados em uma folha individual. A área atingida define quais espaços podem ser marcados, quais combos ativam e quais multiplicadores entram em jogo. A partida mistura mira física com planejamento: acertar uma área boa é importante, mas usar bem o resultado na folha é o que rende pontos.",
    "feeling": "Mistura diferente de habilidade manual, sorte controlada e quebra-cabeça estratégico.",
    "strength": "A mecânica de arremessar discos deixa o jogo bem distinto de outros “roll/write”."
  },
  {
    "title": "Spyfall 2",
    "images": ["assets/games/spyfall_dois_1.png", "assets/games/spyfall_dois_2.jpg"],
    "players": "3–12",
    "time": "15 min",
    "age": "",
    "style": "Dedução social",
    "mode": "Competitivo",
    "bluff": "Sim",
    "party": "Sim",
    "complexity": "Média",
    "how": "Todos recebem uma carta com o mesmo local secreto, menos o espião, que não sabe onde está. Os jogadores fazem perguntas uns aos outros para descobrir quem está perdido, enquanto o espião tenta responder de forma convincente e deduzir o local. O grupo vence se identificar o espião; o espião vence se não for descoberto ou se adivinhar o local.",
    "feeling": "Interrogatório social com respostas vagas, suspeitas e risadas nervosas.",
    "strength": "Brilha com grupos falantes que gostam de improvisar e blefar."
  },
  {
    "title": "The Mind",
    "images": ["assets/games/the_mind_1.jpg", "assets/games/the_mind_2.png"],
    "players": "2–4",
    "time": "20 min",
    "age": "8+",
    "style": "Coop silencioso",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "O grupo precisa jogar cartas numeradas em ordem crescente, mas ninguém pode falar, mostrar cartas ou combinar sinais. Cada pessoa tenta sentir o momento certo de jogar com base no tempo que passou e na reação dos outros. A cada fase, mais cartas entram na mão e a coordenação silenciosa fica mais difícil.",
    "feeling": "Parece telepatia quando dá certo e desastre inevitável quando alguém se precipita.",
    "strength": "Oferece uma experiência cooperativa única usando regras mínimas."
  },
  {
    "title": "Time's Up!",
    "images": ["assets/games/times_up_1.jpg", "assets/games/times_up_2.jpg"],
    "players": "4–12+",
    "time": "30–60 min",
    "age": "",
    "style": "Mímica / associação",
    "mode": "Competitivo em equipes",
    "bluff": "Não",
    "party": "Muito",
    "complexity": "Fácil",
    "how": "As equipes tentam adivinhar os mesmos nomes ou personagens ao longo de três rodadas. Na primeira, quem dá a dica pode falar bastante; na segunda, só pode usar uma palavra; na terceira, precisa fazer mímica. Como as cartas se repetem, o jogo fica mais engraçado a cada rodada, porque todos lembram das pistas anteriores.",
    "feeling": "Barulhento, progressivamente caótico e cheio de piadas internas.",
    "strength": "É excelente para grupos grandes e coloca todo mundo para participar."
  },
  {
    "title": "Trial by Trolley",
    "images": ["assets/games/trial_by_trolley_1.jpg"],
    "players": "3–13",
    "time": "30–90 min",
    "age": "",
    "style": "Debate / humor",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Muito",
    "complexity": "Fácil",
    "how": "Duas equipes montam trilhos com personagens bons, ruins e modificadores absurdos. Um jogador atua como condutor do bonde e decide qual trilho será atropelado. Cada equipe argumenta para salvar seu lado e condenar o outro, usando lógica torta, humor e improviso. A graça está mais no debate do que em vencer.",
    "feeling": "Debate absurdo, humor sombrio e argumentos cada vez mais exagerados.",
    "strength": "Perfeito para quem gosta de improvisar, convencer e criar cenas ridículas."
  },
  {
    "title": "Trio",
    "images": ["assets/games/trio_1.jpg", "assets/games/trio_2.jpg"],
    "players": "3–6",
    "time": "15–30 min",
    "age": "",
    "style": "Memória / dedução",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Os jogadores tentam encontrar três cartas de mesmo número. No seu turno, você pode revelar cartas da mesa ou pedir a menor ou maior carta da mão de outro jogador. Como as informações aparecem aos poucos, é preciso memorizar números vistos, deduzir o que está nas mãos e escolher o momento certo de tentar formar um trio.",
    "feeling": "Leve, esperto e viciante, com pequenas descobertas a cada turno.",
    "strength": "É muito simples de aprender e agrada tanto crianças quanto adultos."
  },
  {
    "title": "Tuki",
    "images": ["assets/games/tuki_1.jpg", "assets/games/tuki_2.jpg"],
    "players": "2–4",
    "time": "30–45 min",
    "age": "",
    "style": "Puzzle / habilidade / velocidade",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Fácil/Média",
    "how": "A cada rodada, os jogadores precisam construir uma figura mostrada em uma carta usando peças coloridas e blocos brancos de suporte. A estrutura precisa respeitar posição, equilíbrio e orientação correta. Quem completa o desafio corretamente mais rápido evita penalidades, então o jogo mistura visão espacial com mãos firmes.",
    "feeling": "Quebra-cabeça físico com pressa, concentração e pequenas quedas dramáticas.",
    "strength": "É bonito na mesa e transforma raciocínio espacial em uma disputa divertida."
  },
  {
    "title": "Turing Machine",
    "images": ["assets/games/turing_machine_1.png", "assets/games/turing_machine_2.png"],
    "players": "1–4",
    "time": "20 min",
    "age": "",
    "style": "Lógica / dedução",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Não",
    "complexity": "Alta",
    "how": "Os jogadores tentam descobrir um código secreto de três números usando perguntas lógicas. Em cada rodada, você testa uma hipótese em verificadores que respondem apenas se uma condição é verdadeira ou falsa, como comparar valores ou identificar padrões. Vence quem cruzar as pistas com eficiência e anunciar o código correto primeiro.",
    "feeling": "Dedução pura, cerebral e parecida com resolver um sudoku tecnológico.",
    "strength": "É brilhante para quem gosta de lógica, eliminação de possibilidades e desafios difíceis."
  },
  {
    "title": "Unicorn Fever",
    "images": ["assets/games/unicorn_fever_1.jpg", "assets/games/unicorn_fever_2.jpg"],
    "players": "2–6",
    "time": "45–60 min",
    "age": "",
    "style": "Corrida / apostas",
    "mode": "Competitivo",
    "bluff": "Leve",
    "party": "Sim",
    "complexity": "Média",
    "how": "Os jogadores não controlam diretamente um unicórnio; eles apostam em corridas e tentam manipular o resultado. Antes e durante as provas, é possível usar cartas, melhorar ou prejudicar competidores e ajustar suas apostas para ganhar mais dinheiro. Vence quem administrar melhor risco, informação e sabotagem ao longo das corridas.",
    "feeling": "Corrida imprevisível, colorida e cheia de gritos quando o favorito tropeça.",
    "strength": "Mistura apostas, humor e interferência direta sem exigir estratégia pesada."
  },
  {
    "title": "UNO Flex!",
    "images": ["assets/games/uno_flex_1.png", "assets/games/uno_flex_2.png"],
    "players": "2–8",
    "time": "20–40 min",
    "age": "",
    "style": "Cartas / caos / estratégia leve",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "A base é o UNO clássico: descartar cartas combinando cor ou número e tentar ficar sem cartas primeiro. O diferencial são as cartas Flex, que podem mudar de cor ou ativar versões mais fortes de efeitos conhecidos, dependendo do estado do seu marcador. Você precisa decidir quando gastar esse poder para virar a rodada a seu favor.",
    "feeling": "UNO familiar, mas com mais reviravoltas e escolhas de timing.",
    "strength": "Mantém a simplicidade do UNO e adiciona uma camada divertida de surpresa."
  },
  {
    "title": "UNO Flip!",
    "images": ["assets/games/uno_flip_1.jpg", "assets/games/uno_flip_2.jpg"],
    "players": "2–10",
    "time": "20–40 min",
    "age": "",
    "style": "Cartas / caos / estratégia leve",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "O jogo começa como UNO, mas todas as cartas têm dois lados: claro e escuro. Quando alguém joga uma carta Flip, todos viram a mão, o baralho e o descarte para o outro lado. O lado escuro tem punições mais fortes, então a partida pode mudar totalmente de ritmo de uma hora para outra.",
    "feeling": "Familiar no começo e muito mais agressivo quando o lado escuro aparece.",
    "strength": "É uma das variações mais fáceis de explicar e mais caóticas de jogar."
  },
  {
    "title": "UNO Show 'em No Mercy",
    "images": ["assets/games/uno_no_mercy_1.jpg", "assets/games/uno_no_mercy_2.jpg"],
    "players": "2–6",
    "time": "30–60 min",
    "age": "",
    "style": "Cartas / caos / punição",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Esta versão mantém a lógica do UNO, mas aumenta muito a agressividade das cartas. Há punições com compra de muitas cartas, efeitos que se acumulam e regras que podem eliminar jogadores quando a mão fica grande demais. O objetivo ainda é ficar sem cartas, mas sobreviver às sequências de punição vira parte central da diversão.",
    "feeling": "UNO em modo extremo, cruel e cheio de viradas absurdas.",
    "strength": "Perfeito para grupos que querem caos, provocação e pouca piedade."
  },
  {
    "title": "UNO Party!",
    "images": ["assets/games/uno_party_1.jpg", "assets/games/uno_party_2.jpg"],
    "players": "6–16",
    "time": "30–60 min",
    "age": "",
    "style": "Cartas / caos / festa",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Muito",
    "complexity": "Fácil",
    "how": "A base continua sendo descartar cartas por cor ou número até ficar sem cartas. Esta versão foi pensada para mesas grandes e inclui cartas que envolvem várias pessoas ao mesmo tempo, como trocas coletivas, punições em massa e efeitos que mudam o sentido da confusão. Quanto mais gente na mesa, mais barulhenta a partida fica.",
    "feeling": "UNO ampliado para festa, com rodadas longas, gritos e muitas reações em cadeia.",
    "strength": "É uma ótima opção quando o grupo é grande demais para jogos de cartas tradicionais."
  },
  {
    "title": "Wandering Towers",
    "images": ["assets/games/wandering_towers_1.jpg", "assets/games/wandering_towers_2.jpg"],
    "players": "2–6",
    "time": "30–45 min",
    "age": "",
    "style": "Estratégia leve / movimentação / corrida",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Parcialmente",
    "complexity": "Fácil/Média",
    "how": "Cada jogador controla magos que precisam chegar ao castelo, mas as torres do tabuleiro também se movem. Quando uma torre passa por cima de um mago, ele fica escondido e pode ser esquecido até ser revelado novamente. Você usa cartas para mover magos ou torres, tenta cumprir requisitos e ainda atrapalha os adversários cobrindo peças importantes.",
    "feeling": "Dinâmico, engraçado e cheio de momentos de “onde foi parar meu mago?”.",
    "strength": "Mistura corrida, memória e estratégia leve com presença de mesa muito charmosa."
  },
  {
    "title": "Zombicide: 2nd Edition",
    "images": ["assets/games/zombicide_second_1.jpg", "assets/games/zombicide_second_2.jpg"],
    "players": "1–6",
    "time": "60–180 min",
    "age": "",
    "style": "Combate cooperativo",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Não",
    "complexity": "Média/Alta",
    "how": "Os jogadores controlam sobreviventes em cenários cheios de objetivos, armas e hordas de zumbis. A cada rodada, o grupo explora o mapa, busca equipamentos, ataca inimigos e tenta completar a missão antes de ser cercado. Conforme os sobreviventes ficam mais fortes, mais zumbis aparecem, então o grupo precisa avançar sem deixar a ameaça sair do controle.",
    "feeling": "Filme de ação cooperativo, exagerado e cheio de momentos desesperados.",
    "strength": "É muito temático e entrega bem a fantasia de sobreviver a uma invasão zumbi em equipe."
  }
];

const searchInput = document.querySelector("#search");
const modeFilter = document.querySelector("#mode-filter");
const complexityFilter = document.querySelector("#complexity-filter");
const partyFilter = document.querySelector("#party-filter");
const clearButton = document.querySelector("#clear-filters");
const gamesGrid = document.querySelector("#games");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

const normalize = (value) =>
  value
    .toString()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const uniqueValues = (key) =>
  [...new Set(games.map((game) => game[key]).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );

const fillSelect = (select, values) => {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
};

const getPartyBucket = (value) => {
  if (!value) return "";
  if (value.startsWith("Não")) return "Não";
  if (value.startsWith("Muito")) return "Muito";
  if (value.startsWith("Parcialmente")) return "Parcialmente";
  if (value.startsWith("Sim")) return "Sim";
  return value;
};

const cardTemplate = (game) => {
  const [coverImage, secondaryImage] = game.images || [];

  return `
  <article class="game-card">
    ${
      coverImage
        ? `<figure class="card-media ${secondaryImage ? "has-secondary" : ""}">
            <img class="cover primary-cover" src="${coverImage}" alt="Imagem do jogo ${game.title}" loading="lazy" />
            ${secondaryImage ? `<img class="cover secondary-cover" src="${secondaryImage}" alt="Outra imagem do jogo ${game.title}" loading="lazy" />` : ""}
          </figure>`
        : ""
    }
    <div class="card-top">
      <h3>${game.title}</h3>
      <span class="players" title="Jogadores">${game.players || "—"}</span>
    </div>
    <div class="meta" aria-label="Metadados do jogo">
      ${game.time ? `<span class="tag">⏱ ${game.time}</span>` : ""}
      ${game.age ? `<span class="tag">👶 ${game.age}</span>` : ""}
      ${game.complexity ? `<span class="tag accent">${game.complexity}</span>` : ""}
      ${game.mode ? `<span class="tag">${game.mode}</span>` : ""}
      ${game.party ? `<span class="tag">Party: ${game.party}</span>` : ""}
      ${game.bluff ? `<span class="tag">Bluff: ${game.bluff}</span>` : ""}
    </div>
    <section>
      <h4>Estilo</h4>
      <p>${game.style || "Não informado."}</p>
    </section>
    <section>
      <h4>Como funciona</h4>
      <p>${game.how || "Descrição não informada."}</p>
    </section>
    <section>
      <h4>Sensação</h4>
      <p>${game.feeling || "Não informada."}</p>
    </section>
    <section>
      <h4>Ponto forte</h4>
      <p>${game.strength || "Não informado."}</p>
    </section>
  </article>
`;
};

const matchesFilters = (game) => {
  const query = normalize(searchInput.value.trim());
  const searchable = normalize(Object.values(game).join(" "));
  const matchesSearch = !query || searchable.includes(query);
  const matchesMode = !modeFilter.value || game.mode === modeFilter.value;
  const matchesComplexity =
    !complexityFilter.value || game.complexity === complexityFilter.value;
  const matchesParty = !partyFilter.value || getPartyBucket(game.party) === partyFilter.value;

  return matchesSearch && matchesMode && matchesComplexity && matchesParty;
};

const renderGames = () => {
  const filteredGames = games.filter(matchesFilters);
  gamesGrid.innerHTML = filteredGames.map(cardTemplate).join("");
  resultCount.textContent = filteredGames.length;
  emptyState.hidden = filteredGames.length > 0;
};

fillSelect(modeFilter, uniqueValues("mode"));
fillSelect(complexityFilter, uniqueValues("complexity"));

document.querySelector("#total-games").textContent = games.length;
document.querySelector("#party-count").textContent = games.filter((game) =>
  ["Sim", "Muito"].includes(getPartyBucket(game.party)),
).length;
document.querySelector("#coop-count").textContent = games.filter((game) =>
  normalize(game.mode).includes("cooperativo"),
).length;

[searchInput, modeFilter, complexityFilter, partyFilter].forEach((control) =>
  control.addEventListener("input", renderGames),
);

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  modeFilter.value = "";
  complexityFilter.value = "";
  partyFilter.value = "";
  renderGames();
  searchInput.focus();
});

renderGames();
