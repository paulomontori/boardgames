const games = [
  {
    "title": "Bananagrams",
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

const STORAGE_KEYS = {
  theme: "boardgames-theme",
  favorites: "boardgames-favorites",
  ratings: "boardgames-ratings",
  recent: "boardgames-recent",
};

const state = {
  moods: new Set(),
  lastRecommendation: null,
  favorites: readStorage(STORAGE_KEYS.favorites, []),
  ratings: readStorage(STORAGE_KEYS.ratings, {}),
  recent: readStorage(STORAGE_KEYS.recent, []),
};

const elements = {
  search: document.querySelector("#search"),
  players: document.querySelector("#players-filter"),
  time: document.querySelector("#time-filter"),
  complexity: document.querySelector("#complexity-filter"),
  clear: document.querySelector("#clear-filters"),
  random: document.querySelector("#random-game"),
  randomHero: document.querySelector("#random-hero"),
  themeToggle: document.querySelector("#theme-toggle"),
  gamesGrid: document.querySelector("#games"),
  shelves: document.querySelector("#shelves"),
  recommendation: document.querySelector("#recommendation"),
  resultCount: document.querySelector("#result-count"),
  activeSummary: document.querySelector("#active-summary"),
  emptyState: document.querySelector("#empty-state"),
  dialog: document.querySelector("#game-dialog"),
  dialogContent: document.querySelector("#dialog-content"),
  dialogClose: document.querySelector("#dialog-close"),
};

const moodConfig = {
  funny: { label: "Quer rir", tags: ["😂 Engraçado", "🎉 Party game"], terms: ["humor", "engraçado", "zoeira", "mímica"] },
  strategic: { label: "Quer pensar", tags: ["🧠 Estratégico"], terms: ["estratégia", "dedução", "lógica", "puzzle", "tática"] },
  fast: { label: "Algo rápido", tags: ["⚡ Rápido"], maxTime: 30 },
  chaos: { label: "Caos", tags: ["🔥 Caótico"], terms: ["caos", "caótico", "imprevisível", "sabotagem"] },
  coop: { label: "Cooperação", tags: ["🤝 Cooperativo"], terms: ["cooperativo", "coop"] },
  bluff: { label: "Blefe", tags: ["😈 Blefe"], terms: ["bluff", "blefe", "mentir", "secreta", "espião"] },
  easy: { label: "Pouca regra", complexity: "leve" },
  party: { label: "Party game", tags: ["🎉 Party game"], terms: ["party", "festa", "grupo grande"] },
};

function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const normalize = (value = "") =>
  value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const slugify = (value) => normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const bySlug = new Map(games.map((game) => [slugify(game.title), game]));
const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

const parseNumbers = (value = "") => (value.match(/\d+/g) || []).map(Number);
const playerRange = (players) => {
  const nums = parseNumbers(players);
  if (!nums.length) return { min: 1, max: 99, best: "grupo flexível" };
  const min = nums[0];
  const max = players.includes("+") ? 99 : nums[nums.length - 1];
  const displayMax = max === 99 ? `${min}+` : max;
  const middle = max === 99 ? Math.min(min + 3, 8) : Math.round((min + max) / 2);
  return { min, max, best: max === 99 ? `${min}–${middle}+` : `${middle}${max - min > 2 ? `–${Math.min(max, middle + 1)}` : ""}` , displayMax };
};

const timeInfo = (time) => {
  const nums = parseNumbers(time);
  const min = nums[0] || 20;
  const max = nums[nums.length - 1] || min;
  return { min, max, average: Math.round((min + max) / 2) };
};

const complexityLevel = (complexity = "") => {
  const value = normalize(complexity);
  if (value.includes("alta")) return { key: "pesado", label: "🔴 pesado" };
  if (value.includes("media") || value.includes("média")) return { key: "medio", label: "🟡 médio" };
  return { key: "leve", label: "🟢 leve" };
};

const includesAny = (game, terms) => {
  const haystack = normalize([game.title, game.style, game.mode, game.bluff, game.party, game.how, game.feeling, game.strength].join(" "));
  return terms.some((term) => haystack.includes(normalize(term)));
};

const getTags = (game) => {
  const tags = new Set();
  const text = normalize([game.title, game.style, game.mode, game.bluff, game.party, game.how, game.feeling, game.strength].join(" "));
  if (/caos|caot|sabot|imprevis|trai/.test(text)) tags.add("🔥 Caótico");
  if (/estrateg|deducao|dedu|logica|puzzle|tatica|controle/.test(text)) tags.add("🧠 Estratégico");
  if (/humor|engrac|zoeira|absurd|mimica|criativ/.test(text)) tags.add("😂 Engraçado");
  if (/cooperativo|coop/.test(text)) tags.add("🤝 Cooperativo");
  if (timeInfo(game.time).max <= 30) tags.add("⚡ Rápido");
  if (/bluff|blefe|mentir|secreta|espiao|espião/.test(text)) tags.add("😈 Blefe");
  if (["Sim", "Muito"].includes(getPartyBucket(game.party)) || /party|festa|grupo grande/.test(text)) tags.add("🎉 Party game");
  return [...tags].slice(0, 5);
};

const getPartyBucket = (value = "") => {
  if (value.startsWith("Não")) return "Não";
  if (value.startsWith("Muito")) return "Muito";
  if (value.startsWith("Parcialmente")) return "Parcialmente";
  if (value.startsWith("Sim")) return "Sim";
  return value;
};

const getSetupTime = (game) => {
  const base = timeInfo(game.time).average;
  const level = complexityLevel(game.complexity).key;
  if (level === "pesado") return "10–15 min";
  if (level === "medio") return base >= 60 ? "8–12 min" : "5–8 min";
  return base <= 20 ? "1–3 min" : "3–5 min";
};

const getTeachTime = (game) => {
  const level = complexityLevel(game.complexity).key;
  const base = timeInfo(game.time).average;
  if (level === "pesado") return "12–20 min";
  if (level === "medio") return base >= 60 ? "8–12 min" : "5–8 min";
  return "2–5 min";
};

const scoreGame = (game) => {
  let score = 0;
  const query = normalize(elements.search.value.trim());
  const playerCount = Number(elements.players.value);
  const maxTime = Number(elements.time.value);
  const selectedComplexity = elements.complexity.value;
  const searchable = normalize(Object.values(game).join(" "));
  const range = playerRange(game.players);
  const gameTime = timeInfo(game.time);
  const level = complexityLevel(game.complexity).key;

  if (query && !searchable.includes(query)) return -Infinity;
  if (query) score += 8;
  if (playerCount) {
    if (playerCount < range.min || playerCount > range.max) return -Infinity;
    score += 10 - Math.abs(playerCount - clamp(playerCount, range.min, range.max));
  }
  if (maxTime) {
    if (gameTime.min > maxTime) return -Infinity;
    score += gameTime.max <= maxTime ? 8 : 3;
  }
  if (selectedComplexity && level !== selectedComplexity) return -Infinity;

  state.moods.forEach((mood) => {
    const config = moodConfig[mood];
    if (config.maxTime && gameTime.max <= config.maxTime) score += 8;
    if (config.complexity && level === config.complexity) score += 8;
    if (config.terms && includesAny(game, config.terms)) score += 7;
    if (config.tags && config.tags.some((tag) => getTags(game).includes(tag))) score += 5;
  });

  if (state.favorites.includes(game.title)) score += 4;
  score += Number(state.ratings[game.title] || 0) * 1.5;
  if (state.recent.includes(game.title)) score -= 5;
  return score;
};

const getRankedGames = () => games
  .map((game) => ({ game, score: scoreGame(game) }))
  .filter((item) => item.score > -Infinity)
  .sort((a, b) => b.score - a.score || a.game.title.localeCompare(b.game.title, "pt-BR"));

const similarGames = (game, limit = 4) => {
  const tags = getTags(game);
  const styleWords = normalize(game.style).split(/\s+|\//).filter((word) => word.length > 3);
  return games
    .filter((candidate) => candidate.title !== game.title)
    .map((candidate) => {
      const candidateTags = getTags(candidate);
      const sharedTags = tags.filter((tag) => candidateTags.includes(tag)).length;
      const sharedStyle = styleWords.filter((word) => normalize(candidate.style).includes(word)).length;
      const sameMode = candidate.mode === game.mode ? 2 : 0;
      return { game: candidate, score: sharedTags * 3 + sharedStyle + sameMode };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.game.title.localeCompare(b.game.title, "pt-BR"))
    .slice(0, limit)
    .map((item) => item.game);
};

const escapeHtml = (value = "") => value.toString().replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

const cardTemplate = (game, compact = false) => {
  const range = playerRange(game.players);
  const level = complexityLevel(game.complexity);
  const tags = getTags(game);
  const isFavorite = state.favorites.includes(game.title);
  const rating = Number(state.ratings[game.title] || 0);
  return `
    <article class="game-card fade-in" data-game="${escapeHtml(slugify(game.title))}">
      <div class="card-top">
        <div>
          <p class="microcopy">Brilha em ${escapeHtml(range.best)} jogadores</p>
          <h3>${escapeHtml(game.title)}</h3>
        </div>
        <button class="icon-button favorite-button ${isFavorite ? "active" : ""}" type="button" data-action="favorite" aria-label="Favoritar ${escapeHtml(game.title)}" aria-pressed="${isFavorite}">♥</button>
      </div>
      <div class="card-metrics" aria-label="Informações rápidas">
        <span><strong>${escapeHtml(game.players || "—")}</strong><small>jogadores</small></span>
        <span><strong>${escapeHtml(game.time || "—")}</strong><small>partida</small></span>
        <span><strong>${getTeachTime(game)}</strong><small>explicação</small></span>
        <span><strong>${getSetupTime(game)}</strong><small>setup</small></span>
      </div>
      <div class="meta">
        <span class="tag complexity ${level.key}">${level.label}</span>
        ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <p>${escapeHtml(game.feeling || game.strength || "Jogo pronto para entrar na mesa.")}</p>
      ${compact ? "" : `<p class="strength"><strong>Ponto forte:</strong> ${escapeHtml(game.strength || "Não informado.")}</p>`}
      <div class="card-actions">
        <button class="details-button" type="button" data-action="details">Ver detalhes</button>
        <button class="ghost-button" type="button" data-action="played">Marcar jogado</button>
      </div>
      <label class="rating-control">Nota local
        <select data-action="rating" aria-label="Nota local para ${escapeHtml(game.title)}">
          <option value="0">Sem nota</option>
          ${[1,2,3,4,5].map((value) => `<option value="${value}" ${rating === value ? "selected" : ""}>${"★".repeat(value)}</option>`).join("")}
        </select>
      </label>
    </article>`;
};

const renderRecommendation = (ranked) => {
  const [best] = ranked;
  if (!best) {
    elements.recommendation.innerHTML = `<div class="empty-recommendation"><strong>Sem recomendação agora.</strong><span>Tente limpar algum filtro ou aumentar o tempo disponível.</span></div>`;
    return;
  }
  const game = state.lastRecommendation || best.game;
  const similar = similarGames(game, 3);
  elements.recommendation.innerHTML = `
    <div>
      <p class="eyebrow">Recomendação da mesa</p>
      <h2>${escapeHtml(game.title)}</h2>
      <p>${escapeHtml(game.feeling || game.how)}</p>
      <div class="meta">${getTags(game).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </div>
    <div class="recommendation-side">
      <span>⏱ ${escapeHtml(game.time)}</span>
      <span>👥 ${escapeHtml(game.players)} · brilha em ${escapeHtml(playerRange(game.players).best)}</span>
      <span>📖 explicação ${getTeachTime(game)}</span>
      <button class="primary-button" type="button" data-action="details" data-game="${escapeHtml(slugify(game.title))}">Abrir detalhes</button>
      <p><strong>Você pode gostar também:</strong> ${similar.map((item) => escapeHtml(item.title)).join(", ") || "mais jogos aparecerão com filtros."}</p>
    </div>`;
};

const shelfDefinitions = [
  { title: "Favoritos da mesa", filter: (game) => state.favorites.includes(game.title) || ["Dixit", "Coup", "Hitster", "The Mind"].includes(game.title) },
  { title: "Melhores para iniciantes", filter: (game) => complexityLevel(game.complexity).key === "leve" && timeInfo(game.time).max <= 30 },
  { title: "Melhores para festa", filter: (game) => ["Sim", "Muito"].includes(getPartyBucket(game.party)) && playerRange(game.players).max >= 8 },
  { title: "Jogos rápidos", filter: (game) => timeInfo(game.time).max <= 20 },
  { title: "Jogos estratégicos", filter: (game) => getTags(game).includes("🧠 Estratégico") && complexityLevel(game.complexity).key !== "leve" },
];

const renderShelves = () => {
  elements.shelves.innerHTML = shelfDefinitions.map((shelf) => {
    const items = games.filter(shelf.filter).slice(0, 6);
    return `
      <section class="shelf-card">
        <h3>${escapeHtml(shelf.title)}</h3>
        <div class="mini-card-list">
          ${items.map((game) => `<button class="mini-card" type="button" data-action="details" data-game="${escapeHtml(slugify(game.title))}"><strong>${escapeHtml(game.title)}</strong><span>${escapeHtml(game.time)} · ${escapeHtml(game.players)}</span></button>`).join("") || "<p>Favorite jogos para montar esta prateleira.</p>"}
        </div>
      </section>`;
  }).join("");
};

const renderGames = () => {
  const ranked = getRankedGames();
  const filteredGames = ranked.map((item) => item.game);
  elements.gamesGrid.innerHTML = filteredGames.map((game) => cardTemplate(game)).join("");
  elements.resultCount.textContent = filteredGames.length;
  elements.emptyState.hidden = filteredGames.length > 0;
  const moods = [...state.moods].map((mood) => moodConfig[mood].label);
  const parts = [
    moods.length ? moods.join(", ") : "todos os climas",
    elements.players.value ? `${elements.players.value} jogadores` : null,
    elements.time.value ? `até ${elements.time.value} min` : null,
  ].filter(Boolean);
  elements.activeSummary.textContent = `Mostrando ${parts.join(" · ")}.`;
  if (!state.lastRecommendation || !filteredGames.includes(state.lastRecommendation)) {
    state.lastRecommendation = filteredGames[0] || null;
  }
  renderRecommendation(ranked);
  renderShelves();
};

const chooseRandomGame = () => {
  const candidates = getRankedGames().map((item) => item.game).filter((game) => !state.recent.slice(0, 5).includes(game.title));
  const pool = candidates.length ? candidates : getRankedGames().map((item) => item.game);
  if (!pool.length) return;
  const weightedPool = pool.slice(0, Math.min(pool.length, 12));
  state.lastRecommendation = weightedPool[Math.floor(Math.random() * weightedPool.length)];
  renderGames();
  elements.recommendation.scrollIntoView({ behavior: "smooth", block: "center" });
};

const markPlayed = (title) => {
  state.recent = [title, ...state.recent.filter((item) => item !== title)].slice(0, 10);
  writeStorage(STORAGE_KEYS.recent, state.recent);
};

const toggleFavorite = (title) => {
  state.favorites = state.favorites.includes(title)
    ? state.favorites.filter((item) => item !== title)
    : [...state.favorites, title];
  writeStorage(STORAGE_KEYS.favorites, state.favorites);
};

const setRating = (title, rating) => {
  if (rating > 0) state.ratings[title] = rating;
  else delete state.ratings[title];
  writeStorage(STORAGE_KEYS.ratings, state.ratings);
};

const openDetails = (game) => {
  const similar = similarGames(game, 5);
  const recentLabel = state.recent.includes(game.title) ? "Já apareceu nos recentes" : "Ainda não jogado recentemente";
  elements.dialogContent.innerHTML = `
    <div class="dialog-hero">
      <p class="eyebrow">Detalhes do jogo</p>
      <h2 id="dialog-title">${escapeHtml(game.title)}</h2>
      <p>${escapeHtml(game.feeling || game.strength || "Uma opção do acervo para testar na mesa.")}</p>
      <div class="meta">${getTags(game).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </div>
    <div class="dialog-grid">
      <section><h3>Resumo útil</h3><ul>
        <li><strong>Jogadores:</strong> ${escapeHtml(game.players)} · brilha em ${escapeHtml(playerRange(game.players).best)}</li>
        <li><strong>Partida:</strong> ${escapeHtml(game.time)}</li>
        <li><strong>Explicação:</strong> ${getTeachTime(game)}</li>
        <li><strong>Setup:</strong> ${getSetupTime(game)}</li>
        <li><strong>Complexidade:</strong> ${complexityLevel(game.complexity).label} (${escapeHtml(game.complexity)})</li>
        <li><strong>Histórico:</strong> ${recentLabel}</li>
      </ul></section>
      <section><h3>Regras rápidas</h3><p>${escapeHtml(game.how || "Regras rápidas não informadas.")}</p></section>
      <section><h3>Por que escolher</h3><p>${escapeHtml(game.strength || "Boa opção para variar a mesa.")}</p></section>
      <section><h3>Tutorial / link</h3><p>Espaço reservado para adicionar um tutorial textual ou link leve no futuro.</p></section>
    </div>
    <section class="similar-block"><h3>Jogos similares · você pode gostar também</h3><div class="mini-card-list">${similar.map((item) => `<button class="mini-card" type="button" data-action="details" data-game="${escapeHtml(slugify(item.title))}"><strong>${escapeHtml(item.title)}</strong><span>${getTags(item).slice(0,2).join(" · ")}</span></button>`).join("")}</div></section>`;
  if (!elements.dialog.open) {
    elements.dialog.showModal();
  }
};

const handleAction = (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;
  const action = actionElement.dataset.action;
  const card = actionElement.closest("[data-game]");
  const slug = actionElement.dataset.game || card?.dataset.game;
  const game = bySlug.get(slug);
  if (!game) return;

  if (action === "details") openDetails(game);
  if (action === "favorite") {
    toggleFavorite(game.title);
    renderGames();
  }
  if (action === "played") {
    markPlayed(game.title);
    state.lastRecommendation = game;
    renderGames();
  }
  if (action === "rating") {
    setRating(game.title, Number(actionElement.value));
    renderGames();
  }
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  elements.themeToggle.textContent = theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
  elements.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  document.querySelector('meta[name="theme-color"]').setAttribute("content", theme === "dark" ? "#111827" : "#f8f4ec");
};

const initializeTheme = () => {
  const saved = localStorage.getItem(STORAGE_KEYS.theme);
  const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(saved || system);
};

const bindEvents = () => {
  document.querySelectorAll(".mood-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const mood = chip.dataset.mood;
      state.moods.has(mood) ? state.moods.delete(mood) : state.moods.add(mood);
      chip.classList.toggle("active", state.moods.has(mood));
      chip.setAttribute("aria-pressed", String(state.moods.has(mood)));
      state.lastRecommendation = null;
      renderGames();
    });
  });

  [elements.search, elements.players, elements.time, elements.complexity].forEach((control) => {
    control.addEventListener("input", () => {
      state.lastRecommendation = null;
      renderGames();
    });
  });

  elements.clear.addEventListener("click", () => {
    state.moods.clear();
    document.querySelectorAll(".mood-chip").forEach((chip) => {
      chip.classList.remove("active");
      chip.setAttribute("aria-pressed", "false");
    });
    elements.search.value = "";
    elements.players.value = "";
    elements.time.value = "";
    elements.complexity.value = "";
    state.lastRecommendation = null;
    renderGames();
    elements.search.focus();
  });

  elements.random.addEventListener("click", chooseRandomGame);
  elements.randomHero.addEventListener("click", chooseRandomGame);
  elements.gamesGrid.addEventListener("click", handleAction);
  elements.gamesGrid.addEventListener("change", handleAction);
  elements.shelves.addEventListener("click", handleAction);
  elements.recommendation.addEventListener("click", handleAction);
  elements.dialogContent.addEventListener("click", handleAction);
  elements.dialogClose.addEventListener("click", () => elements.dialog.close());
  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) elements.dialog.close();
  });

  elements.themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
    applyTheme(nextTheme);
  });
};

document.querySelector("#total-games").textContent = games.length;
document.querySelector("#party-count").textContent = games.filter((game) => ["Sim", "Muito"].includes(getPartyBucket(game.party))).length;
document.querySelector("#coop-count").textContent = games.filter((game) => normalize(game.mode).includes("cooperativo")).length;
document.querySelector("#fast-count").textContent = games.filter((game) => timeInfo(game.time).max <= 30).length;

initializeTheme();
bindEvents();
renderGames();
