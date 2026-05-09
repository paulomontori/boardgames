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
    "how": "Cada jogador recebe letras aleatórias e tenta montar palavras cruzadas o mais rápido possível. Não existem turnos. Todo mundo joga simultaneamente. Quando alguém usa todas as letras: todos compram novas letras. Vence quem terminar primeiro.",
    "feeling": "Caos mental de caça-palavras em tempo real.",
    "strength": "Muito rápido e acessível."
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
    "how": "Os jogadores tentam alcançar objetivos enquanto os outros fazem de tudo para puxá-los “de volta para o balde”, atrapalhando seus planos. Durante a partida: •cartas criam sabotagens •jogadores roubam vantagens •efeitos inesperados mudam a rodada •alianças momentâneas podem surgir",
    "feeling": "Caótico, competitivo e cheio de traições engraçadas.",
    "strength": "Muita interação e momentos absurdos entre amigos."
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
    "how": "Um bandido está tentando escapar da prisão por vários túneis. Os jogadores colocam cartas de túneis tentando: •bloquear caminhos •fechar saídas •impedir a fuga O grupo vence se conseguir fechar todas as rotas antes das cartas acabarem.",
    "feeling": "Puzzle cooperativo rápido e inteligente.",
    "strength": "Muito simples de aprender e ótimo para partidas rápidas."
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
    "how": "Funciona de forma parecida com Bandido, mas agora a fugitiva cria situações mais imprevisíveis. Os jogadores precisam fechar túneis e impedir a fuga usando cartas estrategicamente. O jogo possui diferentes modos e caminhos alternativos, deixando as partidas mais variadas e difíceis.",
    "feeling": "Puzzle cooperativo leve e estratégico.",
    "strength": "Mais variedade e possibilidades que Bandido."
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
    "how": "Os jogadores alteram palavras na mesa trocando apenas uma letra por vez para formar novas palavras válidas. Exemplo: •GATO •troca uma letra →PATO •depois →PATO →PICO etc. Tudo acontece em tempo real, então velocidade e raciocínio rápido são essenciais.",
    "feeling": "Muito acelerado e caótico.",
    "strength": "Partidas rápidas e extremamente fáceis de ensinar."
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
    "how": "Duas equipes competem para encontrar seus agentes secretos escondidos entre várias imagens na mesa. Os “espiões mestres” sabem quais imagens pertencem ao time e dão dicas usando uma palavrae um número. Exemplo:“Frio 2” A equipe tenta descobrir quais 2 imagens estão relacionadas à dica. Existem imagens do time rival, civis inocentes e o assassino. Se alguém escolher o assassino, perde instantaneamente.",
    "feeling": "Muito criativo e cheio de conexões mentais inesperadas.",
    "strength": "Excelente mistura de criatividade, dedução e trabalho em equipe."
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
    "how": "Os jogadores precisam associar dicas a tons específicos de cores em uma cartela. Um jogador dá uma dica comopor exemplo: “céu”; “lava”; “limão” Os outros tentam adivinhar exatamente qual tom de cor ele quis indicar. Quanto mais próximo do tom correto, mais pontos ganha.",
    "feeling": "Leve, criativo e cheio de interpretações diferentes.",
    "strength": "Muito divertido perceber como cada pessoa enxerga cores de forma diferente."
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
    "how": "Você pode mentir sobre seus poderes. Os outros podem: •acreditar •desafiar •bloquear",
    "feeling": "Blefe psicológico intenso.",
    "strength": "Altíssima tensão em jogo pequeno."
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
    "how": "Um jogador assume o papel de Dany e conhece a resposta secreta, mas tenta impedir que os outros a descubram facilmente. Os demais jogadores fazem perguntas e recebem pistas limitadas e ambíguas, precisando conectar ideias e interpretar cuidadosamente as respostas para chegar à solução correta.",
    "feeling": "Mistura de mistério leve com momentos engraçados de confusão coletiva.",
    "strength": "Muito social e ótimo para grupos que gostam de dedução leve."
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
    "how": "Os jogadores escolhem entre situações horríveis e engraçadas. O objetivo é prever respostas ou gerar discussão.",
    "feeling": "Humor pesado e constrangedor.",
    "strength": "Muito engraçado em grupos íntimos."
  },
  {
    "title": "Dixit",
    "images": ["assets/games/dixit_1.jpg", "assets/games/dixit_2.png"],
    "players": "3–8",
    "time": "30 min",
    "age": "",
    "style": "Criatividade / interpretação",
    "mode": "Competitivoleve",
    "bluff": "Não exatamente",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "O narrador dá uma dica para sua carta ilustrada. Os outros colocam cartas parecidas para confundir. Depois todos tentam descobrir a carta original.",
    "feeling": "Muito subjetivo e criativo.",
    "strength": "As artes e interpretações."
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
    "how": "Os jogadores puxam cartas tentando não explodir. Cartas especiais: •evitam explosões •roubam cartas •pulam turnos",
    "feeling": "Caos leve e engraçado.",
    "strength": "Extremamente acessível."
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
    "how": "Um jogador lê uma frase incompleta ou pergunta, e os outros escolhem cartas com respostas absurdas, ofensivas ou engraçadas para completar. O jogador da rodada escolhe a resposta mais divertida, e quem venceu ganha pontos. O foco do jogo é: •humor pesado •criatividade •zoeira entre amigos",
    "feeling": "Caótico, politicamente incorreto e muito engraçado com o grupo certo.",
    "strength": "Excelente para grupos que gostam de humor sem filtro."
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
    "how": "Você vê as cartas dos outros…mas não as suas. O grupo precisa montar fogos de artifício corretamente usando dicas limitadas.",
    "feeling": "Comunicação indireta extremamente inteligente.",
    "strength": "Muito original."
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
    "how": "Você escaneia músicas no Spotify e tenta colocá-las na ordem cronológica correta.",
    "feeling": "Mistura nostalgia e memória musical.",
    "strength": "Perfeito para festas."
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
    "how": "Cada jogador recebe secretamente um número. O grupo recebe um tema, comopor exemplo:“coisas assustadoras”; “comidas gostosas”; “personagens fortes” Cada pessoa dá uma dica relacionada ao seu número sem revelá-lo diretamente. Depois, o grupo tenta organizar todos os números na ordem correta baseado apenas nas dicas dadas.",
    "feeling": "Muito engraçado e cheio de interpretações inesperadas.",
    "strength": "Excelente para gerar conversa e descobrir como cada pessoa pensa."
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
    "how": "Os jogadores removem blocos da torre um por vez e os colocam no topo sem derrubar a estrutura. A cada rodada:a torre fica mais alta, instável e difícil de manipular. Perde quem derrubar a torre.",
    "feeling": "Tensão crescente e muitos momentos engraçados.",
    "strength": "Extremamente simples, acessível e ótimo para qualquer grupo."
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
    "how": "Os jogadores baixam cartas de animais ao redor de um lago tentando expulsar animais mais fracos. Cada animal possui uma posição na cadeia alimentar: animais fortes espantam os menores, mas podem ser expulsos por outros depois. O objetivo é acumular mais pontos ao final da partida.",
    "feeling": "Leve, rápido e estratégico.",
    "strength": "Muito simples de aprender e ótimo para partidas rápidas."
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
    "how": "Os jogadores constroem um reino usando peças estilo dominó com diferentes tipos de terrenos: As peças precisam se conectar corretamente para formar áreas maiores e multiplicar pontos com coroas. A escolha das peças também define a ordem da próxima rodada, criando decisões entrepegar peças fortesou jogar antes",
    "feeling": "Leve, rápido e muito satisfatório.",
    "strength": "Excelente jogo de entrada para estratégia moderna."
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
    "how": "Você joga cartas tentando terminar a rodada com o personagem mais valioso. Cada carta possui poderes simples,mas estratégicos.",
    "feeling": "Leitura social constante.",
    "strength": "Poucas cartas, muita profundidade."
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
    "how": "Cada jogador controla apenas certos movimentos dos personagens. O grupo precisa coordenar tudo rapidamente sem poder conversar direito.",
    "feeling": "Desespero coletivo.",
    "strength": "Muito diferente da maioria dos cooperativos."
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
    "how": "Os jogadores coletam cartas e montam combinações para fazer pontos, enquanto tentam controlar riscos e aproveitar bônus. As decisões envolvem: •quais cartas pegar •quando pontuar •como bloquear adversários",
    "feeling": "Calmo, leve e estratégico.",
    "strength": "Partidas rápidas com boas decisões táticas."
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
    "how": "Os jogadores enfrentam monstros, ganham equipamentos e sobem de nível tentando chegar ao nível 10 primeiro. Durante a partida, os outros podem ajudar, atrapalhar, fortalecer monstros ou trair você no momento mais importante.",
    "feeling": "Caótico, engraçado e cheio de “amizades destruídas”.",
    "strength": "Humor absurdo e muita interação entre jogadores."
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
    "how": "Um fantasma dá pistasaos jogadores (médiuns)usando cartas abstratas. Os médiuns precisam interpretar: •assassino •local •objeto usado no assassinato",
    "feeling": "Interpretar sonhos estranhose lúdicos.",
    "strength": "Atmosfera incrível."
  },
  {
    "title": "Nem a Pato",
    "images": ["assets/games/nem_a_pato_1.png", "assets/games/nem_a_pato_2.png"],
    "players": "2–6",
    "time": "15–25 min",
    "age": "",
    "style": "Cartas / estratégia leve / sabotagem",
    "mode": "Competitivo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Os jogadores baixam cartas tentando cumprir objetivos e atrapalhar os adversários usando efeitos especiais e combinações. O jogo gira em torno de timing, gerenciamento de mão e pequenas sabotagens entre os jogadores.",
    "feeling": "Leve, rápido e caótico.",
    "strength": "Partidas rápidas e muita interação entre jogadores."
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
    "how": "Os jogadores escolhem peçasda “roda da lua” para completar objetivos pessoais. Cada peça possui tarefas relacionadas a:cores; posicionamento; conexões entre peças Ao cumprir objetivos, você gastamarcadores.Quem gastartodos primeiro vence. A ordem dos turnos muda conforme as peças escolhidas, criando decisões entre jogar antes ou pegar peças mais vantajosas para futuros combos.",
    "feeling": "Calmo, estratégico e muito viciante.",
    "strength": "Puzzle elegante com profundidade surpreendente."
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
    "how": "Os jogadores tentam se livrar de todas as cartas da mão jogando combinações maiores que as da mesa. As cartas possuem cores e valores, e algumas combinações permitem jogadas especiais ou mudam o ritmo da rodada. Vence quem conseguir terminar a mão primeiro e evitar penalidades.",
    "feeling": "Rápido, estratégico e com clima de “UNO mais inteligente”.",
    "strength": "Fácil de aprender, mas com boas decisões táticas."
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
    "how": "O grupo tenta impedir doenças globais. Vocês: •tratam infecções •viajam pelo mapa •trocam cartas •pesquisam curas Enquanto isso o jogo espalha novas doenças constantemente. Se houver surtos demais:todos perdem.",
    "feeling": "Urgência constante.",
    "strength": "Um dos cooperativos mais clássicos."
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
    "how": "Os jogadores jogam cartas em uma fila (“parada”) tentando evitar pegar cartas negativas. Dependendo do valor e posição da carta jogada, você pode acabar coletando cartas da mesa, e elas viram pontos negativos no final. O objetivo é terminar com a menor pontuação possível.",
    "feeling": "Leve, estratégico e com decisões simples,mas inteligentes.",
    "strength": "Muito elegante e fácil de ensinar."
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
    "how": "Os jogadores tentam adivinhar filmes e séries usando dicas reveladas aos poucos. As primeiras pistas costumam ser vagas, e conforme novas dicas aparecem fica mais fácil descobrir a resposta. Quem adivinhar mais cedo ganha mais pontos.",
    "feeling": "Mistura de quiz com memória de cultura pop.",
    "strength": "Muito divertido para quem gosta de filmes e séries."
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
    "how": "Os jogadores assumem o papel de piratas tentando acumular tesouros, formar tripulações e ganhar mais ouro que os adversários. Durante a partida: •recrutam personagens •usam habilidades •roubam recursos •fazem combinações para pontuar",
    "feeling": "Leve, caótico e bem divertido.",
    "strength": "Muita interação entre jogadores e partidas descontraídas."
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
    "how": "Os jogadores coletam ingredientes e montam combinações para criar poções e ganhar pontos. Cada rodada envolve: •escolher cartas •criar combos •usar efeitos especiais •administrar recursos melhor que os adversários",
    "feeling": "Leve, rápido e cheio de combos satisfatórios.",
    "strength": "Boa mistura de estratégia simples com visual divertido."
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
    "how": "Você resolve puzzles usando peças tipo Tetris. Completar puzzles melhora suas peças e acelera sua evolução.",
    "feeling": "Muito satisfatório visualmente.",
    "strength": "Elegante e inteligente."
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
    "how": "Os jogadores são mineradores tentando coletar cristais valiosos em uma mina. A cada rodada você decide: •continuar minerando para ganhar mais cristais •ou sair antes e garantir seus pontos O problema é que criaturas e perigos podem aparecer, fazendo você perder parte do que coletou.",
    "feeling": "Tensão leve e divertida de “arriscar ou garantir”.",
    "strength": "Muito acessível e com partidas rápidas."
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
    "how": "Os jogadores constroem túneis até o ouro. Mas sabotadores secretos tentam atrapalhar: •quebrando ferramentas •criando caminhos errados •atrasando o grupo",
    "feeling": "Paranoia divertida.",
    "strength": "Ótimo equilíbrio entre estratégia e suspeita."
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
    "how": "Os jogadores tentam entrar “em sintonia” pensando de forma parecida. Uma palavra, tema ou situação é apresentada, e os jogadores precisam dar respostas que combinem entre si sem poder combinar antes. Quanto mais pessoas pensarem parecido, mais pontos o grupo faz.",
    "feeling": "Muito leve, social e engraçado.",
    "strength": "Gera conversas e momentos inesperados rapidamente."
  },
  {
    "title": "Sóuma",
    "images": ["assets/games/so_uma_1.jpg", "assets/games/so_uma_2.jpg"],
    "players": "3–7",
    "time": "20–30 min",
    "age": "",
    "style": "Associação de palavras / coop",
    "mode": "Cooperativo",
    "bluff": "Não",
    "party": "Sim",
    "complexity": "Fácil",
    "how": "Um jogador tenta adivinhar uma palavra secreta. Os outros escrevem dicas de uma palavra para ajudá-lo…mas existe um detalhe: dicas iguais são apagadas antes dele ver. Então o grupo precisa pensar em pistas criativas sem combinar entre si.",
    "feeling": "Leve, engraçado e muito satisfatório quando o grupo entra em sintonia.",
    "strength": "Extremamente simples e funciona com praticamente qualquer pessoa."
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
    "how": "Você arremessa discos num tabuleiro e marca pontos dependendo da área atingida. Cada área ativa efeitos diferentes: •combos •multiplicadores •bônus",
    "feeling": "Mistura habilidade física com puzzle estratégico.",
    "strength": "Mecânica muito diferente."
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
    "how": "Todos sabem o local secreto…menos o espião. Os jogadores fazem perguntas tentando descobrir: •quem é o espião •ou qual é o local",
    "feeling": "Interrogatório social.",
    "strength": "Muito bom com grupos falantes."
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
    "how": "O grupo deve jogar cartas em ordem…sem conversar. Vocês precisam “sentir” o timing.",
    "feeling": "Parece telepatia.",
    "strength": "Experiência muito única."
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
    "how": "Os jogadores tentam fazer sua equipe adivinhar nomes/personagens. Rodada 1: vale falar livremente. Rodada 2: apenas uma palavra. Rodada 3: somente mímica.",
    "feeling": "Vai ficando cada vez mais caótico e engraçado.",
    "strength": "Excelente para grupos grandes."
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
    "how": "Cada equipe tenta convencer o juiz sobre qual trilho o trem deve atropelar. As cartas criam cenários absurdos. Você argumenta defendendo pessoas horríveis ou salvando personagens bizarros.",
    "feeling": "Humor caótico e debates absurdos.",
    "strength": "Excelente para improviso."
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
    "how": "Os jogadores tentam formar trios de cartas iguais revelando cartas da mesa ou a menor/maior carta da mão dos outros jogadores. É preciso memorizar números já vistos e deduzir onde estão os pares restantes.",
    "feeling": "Leve, rápido e viciante.",
    "strength": "Muito simples de aprender e ótimo para qualquer grupo."
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
    "how": "Os jogadores precisam construir estruturas usando peças de madeira e blocos seguindo cartas de desafio. Cada construção deve respeitar regras específicas: •equilíbrio •posição das peças •formato correto Quem montar corretamente mais rápido ganha a rodada.",
    "feeling": "Mistura de quebra-cabeça com tensão de habilidade manual.",
    "strength": "Muito bonito visualmente e divertido de jogar em grupo."
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
    "how": "Os jogadores tentam descobrir um código secreto usando verificadores lógicos. Você faz perguntas indiretas e deduz números corretos.",
    "feeling": "Sudoku hardcore.",
    "strength": "Dedução brilhante."
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
    "how": "Os jogadores apostam em corridas de unicórnios. Durante a corrida: •usam cartas •sabotam adversários •fortalecem unicórnios •manipulam resultados O objetivo não é controlar um unicórnio. É ganhar dinheiro apostando corretamente.",
    "feeling": "Muito imprevisível e caótico.",
    "strength": "Mistura aposta + humor + sabotagem."
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
    "how": "Segue a base clássica do UNO: os jogadores precisam descartar cartas combinando cores ou números. O diferencial são as cartas “Flex”, que permitem mudar regras e usar versões mais poderosas das ações tradicionais. Dependendo do estado do seu marcador Flex, você pode: •trocar cor livremente •inverter efeitos •fazer jogadores comprarem mais cartas",
    "feeling": "UNO mais estratégico e imprevisível.",
    "strength": "Mantém a simplicidade do UNO com muito mais caos e reviravoltas."
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
    "how": "Segue as regras clássicas do UNO, mas o baralho possui dois lados: •lado claro •lado escuro Quando uma carta FLIP é jogada:todos viram suas cartas para o outro lado. O lado escuro possui ações muito mais agressivas. Ex: comprar muitas cartas; pular vários turnos; punições mais fortes",
    "feeling": "A partida muda completamente do nada.",
    "strength": "Uma das versões mais divertidas e caóticas do UNO."
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
    "how": "É uma versão extremamente caótica e cruel do UNO. Além das regras clássicas, existem cartas muito mais agressivas: •comprar grandes quantidades de cartas •empilhar punições •eliminar jogadores rapidamente •inverter completamente a partida As punições acumulam facilmente, criando rodadas absurdas.",
    "feeling": "UNO no modo “violência máxima”.",
    "strength": "Perfeito para grupos que gostam de caos e zoeira pesada."
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
    "how": "Segue as regras clássicas doUNO: os jogadores precisam descartar cartas combinando cor ou número. A diferença é que esta versão adiciona cartas especiais focadas em grupos grandes, criando: •rodadas gigantes •troca coletiva de cartas •punições em massa •muito mais caos",
    "feeling": "UNO totalmente descontrolado.",
    "strength": "Excelente para grupos grandes e festas."
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
    "how": "Os jogadores controlam pequenos magos tentando chegar ao castelo antes dos outros.O diferencial é que as torres do tabuleiro se movem e podem “capturar” magos, escondendo-os temporariamente. Você precisa: •mover magos •movimentar torres •libertar personagens •atrapalhar adversários Tudo isso enquanto tenta administrar suas cartas da melhor forma.",
    "feeling": "Caótico, divertido e bem dinâmico.",
    "strength": "Mistura estratégia leve com momentos muito engraçados."
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
    "how": "Sobreviventes enfrentam hordas gigantes de zumbis enquanto completam objetivos.",
    "feeling": "Filme de ação exagerado.",
    "strength": "Muito temático e divertido."
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
