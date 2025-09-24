// Bem vindos ao meu projeto pessoal marveldex
// Aperte em continuar para seguir o sistema
// Ou não para fechar.

const inicio = prompt("Bem vindos ao meu projeto pessoal marveldex\n\nDigite 'continuar' para seguir o sistema\nOu 'nao' para fechar.")

if (inicio === "nao") {
  alert("Fechando o sistema...");
} else {

  //primeiro mostra a tabela de heróis
alert("Heróis disponíveis (1 - 22):\n\n" +
"1 - Homem de Ferro\n" +
"2 - Capitão América\n" +
"3 - Thor\n" +
"4 - Hulk\n" +
"5 - Viúva Negra\n" +
"6 - Pantera Negra\n" +
"7 - Doutor Estranho\n" +
"8 - Homem-Aranha\n" +
"9 - Princesa Maria Vitória\n" +
"10 - Tempestade\n" +
"11 - Homem-Formiga\n" +
"12 - Feiticeira Escarlate\n" +
"13 - Visão\n" +
"14 - Gavião Arqueiro\n" +
"15 - Drax\n" +
"16 - Gamora\n" +
"17 - Senhor das Estrelas\n" +
"18 - Rocket Raccoon\n" +
"19 - Groot\n" +
"20 - Superman\n" +
"21 - Batman\n" +
"22 - Flash");

// Segunda parte
alert("Heróis disponíveis (22 - 48):\n\n" +
"27 - Shazam\n" +
"28 - Wolverine\n" +
"29 - Deadpool\n" +
"30 - Cavaleiro da Lua\n" +
"31 - Capitã Marvel\n" +
"32 - Homem-Aranha 2099\n" +
"33 - Gambit\n" +
"34 - Hércules\n" +
"35 - Homem de Ferro 2020\n" +
"36 - Miss Marvel (Kamala Khan)\n" +
"37 - Falcão\n" +
"38 - Gaviã Negra\n" +
"39 - Homem de Gelo\n" +
"40 - Noturno\n" +
"41 - Colossus\n" +
"42 - Kitty Pryde\n" +
"43 - Sr. Fantástico\n" +
"44 - Mulher invisivel);

// Escolha do usuário
let escolha = prompt("Digite o número do herói que você quer escolher (1 a 52):");

// Mostrar nome baseado no número
if (escolha == "1") alert("Você escolheu: Homem de Ferro");
else if (escolha == "2") alert("Você escolheu: Capitão América");
else if (escolha == "3") alert("Você escolheu: Thor");
else if (escolha == "4") alert("Você escolheu: Hulk");
else if (escolha == "5") alert("Você escolheu: Viúva Negra");
else if (escolha == "6") alert("Você escolheu: Pantera Negra");
else if (escolha == "7") alert("Você escolheu: Doutor Estranho");
else if (escolha == "8") alert("Você escolheu: Homem-Aranha");
else if (escolha == "9") alert("Você escolheu: Princesa Maria Vitória");
else if (escolha == "10") alert("Você escolheu: Tempestade");
else if (escolha == "11") alert("Você escolheu: Homem-Formiga");
else if (escolha == "12") alert("Você escolheu: Feiticeira Escarlate");
else if (escolha == "13") alert("Você escolheu: Visão");
else if (escolha == "14") alert("Você escolheu: Gavião Arqueiro");
else if (escolha == "15") alert("Você escolheu: Drax");
else if (escolha == "16") alert("Você escolheu: Gamora");
else if (escolha == "17") alert("Você escolheu: Senhor das Estrelas");
else if (escolha == "18") alert("Você escolheu: Rocket Raccoon");
else if (escolha == "19") alert("Você escolheu: Groot");
else if (escolha == "20") alert("Você escolheu: Superman");
else if (escolha == "21") alert("Você escolheu: Batman");
else if (escolha == "22") alert("Você escolheu: Flash");
else if (escolha == "23") alert("Você escolheu: Mulher-Maravilha");
else if (escolha == "24") alert("Você escolheu: Aquaman");
else if (escolha == "25") alert("Você escolheu: Lanterna Verde");
else if (escolha == "26") alert("Você escolheu: Ciborgue");
else if (escolha == "27") alert("Você escolheu: Shazam");
else if (escolha == "28") alert("Você escolheu: Wolverine");
else if (escolha == "29") alert("Você escolheu: Deadpool");
else if (escolha == "30") alert("Você escolheu: Cavaleiro da Lua");
else if (escolha == "31") alert("Você escolheu: Capitã Marvel");
else if (escolha == "32") alert("Você escolheu: Homem-Aranha 2099");
else if (escolha == "33") alert("Você escolheu: Gambit");
else if (escolha == "34") alert("Você escolheu: Hércules");
else if (escolha == "35") alert("Você escolheu: Homem de Ferro 2020");
else if (escolha == "36") alert("Você escolheu: Miss Marvel (Kamala Khan)");
else if (escolha == "37") alert("Você escolheu: Falcão");
else if (escolha == "38") alert("Você escolheu: Gaviã Negra");
else if (escolha == "39") alert("Você escolheu: Homem de Gelo");
else if (escolha == "40") alert("Você escolheu: Noturno");
else if (escolha == "41") alert("Você escolheu: Colossus");
else if (escolha == "42") alert("Você escolheu: Kitty Pryde");
else if (escolha == "43") alert("Você escolheu: Sr. Fantástico");
else if (escolha == "44") alert("Você escolheu: Mulher Invisível");
else if (escolha == "45") alert("Você escolheu: Tocha Humana");
else if (escolha == "46") alert("Você escolheu: Coisa");
else if (escolha == "47") alert("Você escolheu: Arqueiro Noturno");
else if (escolha == "48") alert("Você escolheu: Jessica Jones");
else if (escolha == "49") alert("Você escolheu: Luke Cage");
else if (escolha == "50") alert("Você escolheu: Punho de Ferro");
else if (escolha == "51") alert("Você escolheu: Doutor Estranho Supremo");
else if (escolha == "52") alert("Você escolheu: Cavaleira da Lua");
else alert("Opção inválida!");
// Depois pergunta o nome do herói
const heroi = prompt("Digite o nome do herói exatamente como está na lista para ver informações")

  if (heroi === "Homem de Ferro") {
    alert("Homem de Ferro\nNome real: Tony Stark\nNasceu em: Long Island, Nova York\nOrigem: Gênio bilionário que criou uma armadura de alta tecnologia\nPoderes: armaduras tecnológicas, inteligência superior")
  } else if (heroi === "Capitão América") {
    alert("Capitão América\nNome real: Steve Rogers\nNasceu em: Brooklyn, Nova York\nOrigem: Soldado da Segunda Guerra Mundial aprimorado com o soro do supersoldado\nPoderes: força, agilidade, resistência, escudo indestrutível")
  } else if (heroi === "Thor") {
    alert("Thor\nNome real: Thor Odinson\nNasceu em: Asgard\nOrigem: Deus do trovão, filho de Odin\nPoderes: controle do trovão, Mjölnir, imortalidade")
  } else if (heroi === "Hulk") {
    alert("Hulk\nNome real: Bruce Banner\nNasceu em: Dayton, Ohio\nOrigem: Cientista exposto a radiação gama\nPoderes: força descomunal, regeneração")
  } else if (heroi === "Viúva Negra") {
    alert("Viúva Negra\nNome real: Natasha Romanoff\nNasceu em: Stalingrado, Rússia\nOrigem: Espiã treinada pela KGB\nPoderes: artes marciais, espionagem, agilidade")
  } else if (heroi === "Pantera Negra") {
    alert("Pantera Negra\nNome real: T’Challa\nNasceu em: Wakanda\nOrigem: Rei de Wakanda, defensor de sua nação\nPoderes: força aprimorada, traje tecnológico")
  } else if (heroi === "Princesa Maria Vitória") {
    alert("Princesa Maria Vitória\nA heroína real que me salva todos os dias e cuida de mim com amor.")
  } else {
    alert("Herói não encontrado no MarvelDex básico.")
  } 
  }
  if (heroi === "Superman") {
    alert("Superman\nNome real: Clark Kent (Kal-El)\nNasceu em: Krypton\nOrigem: Último filho de Krypton enviado à Terra\nPoderes: superforça, voo, visão de calor, invulnerabilidade")
  } else if (heroi === "Batman") {
    alert("Batman\nNome real: Bruce Wayne\nNasceu em: Gotham City\nOrigem: Bilionário que jurou combater o crime após a morte dos pais\nPoderes: inteligência, artes marciais, tecnologia avançada")
  } else if (heroi === "Flash") {
    alert("Flash\nNome real: Barry Allen\nNasceu em: Central City\nOrigem: Cientista atingido por um raio em meio a produtos químicos\nPoderes: supervelocidade, viagem no tempo, reflexos sobre-humanos")
  } else if (heroi === "Mulher-Maravilha") {
    alert("Mulher-Maravilha\nNome real: Diana Prince\nNasceu em: Ilha de Themyscira\nOrigem: Princesa amazona, guerreira escolhida pelos deuses\nPoderes: superforça, voo, laço da verdade, resistência incrível")
  } else if (heroi === "Aquaman") {
    alert("Aquaman\nNome real: Arthur Curry\nNasceu em: Atlântida\nOrigem: Herdeiro do trono de Atlântida\nPoderes: respirar debaixo d’água, comunicar-se com criaturas marinhas, superforça")
  } else if (heroi === "Lanterna Verde") {
    alert("Lanterna Verde\nNome real: Hal Jordan\nNasceu em: Coast City\nOrigem: Piloto escolhido pelo anel de poder da Tropa dos Lanternas Verdes\nPoderes: construtos de energia, voo, resistência")
  } else if (heroi === "Ciborgue") {
    alert("Ciborgue\nNome real: Victor Stone\nNasceu em: Detroit, EUA\nOrigem: Jovem salvo por tecnologia alienígena após acidente\nPoderes: corpo cibernético, armas tecnológicas, conexão com sistemas")
  } else if (heroi === "Shazam") {
    alert("Shazam\nNome real: Billy Batson\nNasceu em: Filadélfia, EUA\nOrigem: Jovem escolhido por um mago ancestral\nPoderes: força, velocidade, magia, sabedoria dos deuses")
  } else if (heroi === "Wolverine") {
    alert("Wolverine\nNome real: James Howlett (Logan)\nNasceu em: Alberta, Canadá\nOrigem: Mutante com fator de cura acelerado\nPoderes: garras de adamantium, regeneração, sentidos aguçados")
  } else if (heroi === "Deadpool") {
    alert("Deadpool\nNome real: Wade Wilson\nNasceu em: Canadá\nOrigem: Mercenário submetido a experimentos ilegais\nPoderes: fator de cura, imortalidade, habilidade em combate, humor afiado")
  } else if (heroi === "Minha Heroína")
    alert("Minha Heroína\nNome real: Maria Vitória ❤️\nOrigem: Não é apenas uma história em quadrinhos, mas a história da minha vida.\nDescrição: Ela me salva todos os dias, faz meus dias serem perfeitos. Ela não só salva meu mundo... ela é o meu mundo. 🌎❤️")
     else if (heroi === "Tempestade") {
    alert("Tempestade\nNome real: Ororo Munroe\nNasceu em: Nova Iorque (criada no Cairo, Egito)\nOrigem: Mutante descendente de sacerdotisas africanas\nPoderes: manipulação do clima, voo, resistência")
  } else if (heroi === "Homem-Formiga") {
    alert("Homem-Formiga\nNome real: Scott Lang\nNasceu em: Coral Gables, EUA\nOrigem: Ex-ladrão que herdou a tecnologia de Hank Pym\nPoderes: encolhimento, crescimento gigante, força proporcional")
  } else if (heroi === "Feiticeira Escarlate") {
    alert("Feiticeira Escarlate\nNome real: Wanda Maximoff\nNasceu em: Sokovia\nOrigem: Jovem com poderes despertados pela Joia da Mente\nPoderes: magia do caos, manipulação da realidade, telecinese")
  } else if (heroi === "Visão") {
    alert("Visão\nNome real: Sintozóide criado por Ultron\nNasceu em: Laboratório da HYDRA/Ultron\nOrigem: Criado a partir da Joia da Mente\nPoderes: intangibilidade, disparos de energia, superforça")
  } else if (heroi === "Gavião Arqueiro") {
    alert("Gavião Arqueiro\nNome real: Clint Barton\nNasceu em: Waverly, Iowa\nOrigem: Atirador de elite treinado pelo circo e pela SHIELD\nPoderes: mestre em arco e flecha, combate corpo a corpo, estratégia")
  } else if (heroi === "Drax") {
    alert("Drax, o Destruidor\nNome real: Arthur Douglas\nNasceu em: Califórnia, EUA\nOrigem: Humano transformado em guerreiro cósmico\nPoderes: superforça, resistência, combate brutal")
  } else if (heroi === "Gamora") {
    alert("Gamora\nNome real: Gamora Zen Whoberi Ben Titan\nNasceu em: Planeta Zen-Whoberi\nOrigem: Última de sua raça, criada e treinada por Thanos\nPoderes: artes marciais, armas cósmicas, força aumentada")
  } else if (heroi === "Senhor das Estrelas") {
    alert("Senhor das Estrelas\nNome real: Peter Quill\nNasceu em: Missouri, EUA\nOrigem: Filho de humana com alienígena, sequestrado por saqueadores espaciais\nPoderes: mestre em armas de fogo, voo com botas a jato, líder dos Guardiões")
  } else if (heroi === "Rocket Raccoon") {
    alert("Rocket Raccoon\nNome real: ??? (identidade desconhecida)\nNasceu em: Planeta Halfworld\nOrigem: Experimento genético que lhe deu inteligência e fala\nPoderes: atirador, engenheiro, estrategista")
  } else if (heroi === "Groot") 
    alert("Groot\nNome real: Groot\nNasceu em: Planeta X\nOrigem: Ser da raça Flora Colossus\nPoderes: regeneração, crescimento corporal, superforça, só fala 'Eu sou Groot'")
     else if (heroi === "Caçador de Marte") {
    alert("Caçador de Marte\nNome real: J'onn J'onzz\nNasceu em: Marte\nOrigem: Último sobrevivente marciano que veio à Terra\nPoderes: telepatia, intangibilidade, mudança de forma, superforça, voo")
  } else if (heroi === "Mulher-Gavião") {
    alert("Mulher-Gavião\nNome real: Shayera Hol\nNasceu em: Planeta Thanagar\nOrigem: Guerreira alienígena enviada à Terra\nPoderes: voo, superforça, habilidade em combate com maça encantada")
  } else if (heroi === "Arqueiro Verde") {
    alert("Arqueiro Verde\nNome real: Oliver Queen\nNasceu em: Star City\nOrigem: Bilionário que se tornou vigilante após sobreviver em ilha deserta\nPoderes: mestre em arco e flecha, artes marciais, estratégia")
  } else if (heroi === "Supergirl") {
    alert("Supergirl\nNome real: Kara Zor-El\nNasceu em: Krypton\nOrigem: Prima de Superman enviada à Terra\nPoderes: superforça, voo, visão de calor, invulnerabilidade")
  } else if (heroi === "Robin") {
    alert("Robin\nNome real: Dick Grayson (primeiro Robin)\nNasceu em: Gotham City\nOrigem: Acrobata de circo adotado por Bruce Wayne\nPoderes: agilidade, combate corpo a corpo, investigação")
  } else if (heroi === "Batgirl") {
    alert("Batgirl\nNome real: Barbara Gordon\nNasceu em: Gotham City\nOrigem: Filha do Comissário Gordon que assumiu a identidade de vigilante\nPoderes: inteligência, combate corpo a corpo, habilidades tecnológicas")
  } else if (heroi === "Zatanna") {
    alert("Zatanna\nNome real: Zatanna Zatara\nNasceu em: Nova York, EUA\nOrigem: Filha do mágico Giovanni Zatara\nPoderes: magia, feitiços, manipulação da realidade ao falar palavras ao contrário")
  } else if (heroi === "Constantine") {
    alert("Constantine\nNome real: John Constantine\nNasceu em: Liverpool, Inglaterra\nOrigem: Ocultista e detetive paranormal\nPoderes: magia, exorcismo, conhecimento sobrenatural, manipulação")
  } else if (heroi === "Mulher-Leopardo") {
    alert("Mulher-Leopardo\nNome real: Barbara Minerva\nNasceu em: Reino Unido\nOrigem: Arqueóloga amaldiçoada por rituais antigos\nPoderes: agilidade felina, força, sentidos apurados")
  } else if (heroi === "Raio Negro") {
    alert("Raio Negro\nNome real: Jefferson Pierce\nNasceu em: Metropolis\nOrigem: Diretor de escola que se tornou herói\nPoderes: controle da eletricidade, superforça, resistência")
    } else if (heroi === "Cavaleiro da Lua") {
    alert("Cavaleiro da Lua\nNome real: Marc Spector\nNasceu em: Chicago, EUA\nOrigem: Ex-militar e mercenário, escolhido pelo deus egípcio Khonshu\nPoderes: força e resistência aumentadas à noite, combate corpo a corpo, habilidades táticas")
  } else if (heroi === "Capitã Marvel") {
    alert("Capitã Marvel\nNome real: Carol Danvers\nNasceu em: Boston, EUA\nOrigem: Piloto da Força Aérea que recebeu poderes alienígenas\nPoderes: voo, superforça, rajadas de energia, resistência")
  } else if (heroi === "Homem-Aranha 2099") {
    alert("Homem-Aranha 2099\nNome real: Miguel O'Hara\nNasceu em: Nova York, 2099\nOrigem: Cientista geneticamente alterado\nPoderes: agilidade, teia orgânica, garras retráteis, visão aprimorada")
  } else if (heroi === "Gambit") {
    alert("Gambit\nNome real: Remy LeBeau\nNasceu em: Nova Orleans, EUA\nOrigem: Mutante com talento para manipular energia cinética\nPoderes: energia cinética explosiva, combate com cartas, acrobacia")
  } else if (heroi === "Tempestade (DC)") {
    alert("Tempestade (DC)\nNome real: Desconhecida\nOrigem: Personagem DC alternativa com poderes de manipulação climática\nPoderes: tempestades, voo, eletricidade")
  } else if (heroi === "Hércules") {
    alert("Hércules\nNome real: Hércules\nNasceu em: Olímpia, Grécia\nOrigem: Semideus da mitologia, aliado ocasional dos heróis da Marvel\nPoderes: superforça, imortalidade, combate corpo a corpo")
  } else if (heroi === "Homem de Ferro 2020") {
    alert("Homem de Ferro 2020\nNome real: Arno Stark\nNasceu em: EUA\nOrigem: Parente de Tony Stark que assume a armadura avançada\nPoderes: armaduras tecnológicas, inteligência, combate tático")
  } else if (heroi === "Miss Marvel (Kamala Khan)") {
    alert("Miss Marvel\nNome real: Kamala Khan\nNasceu em: Jersey City, EUA\nOrigem: Adolescente com poderes mutantes inspirada pela Capitã Marvel\nPoderes: elasticidade, forma corporal alterável, cura acelerada")
  } else if (heroi === "Falcão") {
    alert("Falcão\nNome real: Sam Wilson\nNasceu em: Detroit, EUA\nOrigem: Ex-militar, aliado de Steve Rogers\nPoderes: voo com asas mecânicas, combate corpo a corpo, liderança")
  } else if (heroi === "Gaviã Negra") {
    alert("Gaviã Negra\nNome real: Barbara Ann Minerva\nNasceu em: Reino Unido\nOrigem: Arqueóloga amaldiçoada que se torna guerreira mística\nPoderes: força aumentada, agilidade, sentidos felinos")
    } else if (heroi === "Homem-Aranha Noir") {
    alert("Homem-Aranha Noir\nNome real: Peter Parker\nNasceu em: Nova York, anos 30\nOrigem: Peter Parker em uma versão sombria da Marvel\nPoderes: agilidade, força, sentidos aracnídeos, combate corpo a corpo")
  } else if (heroi === "Homem-Aranha Superior") {
    alert("Homem-Aranha Superior\nNome real: Peter Parker\nNasceu em: Nova York\nOrigem: Peter Parker com mente do Doutor Octopus\nPoderes: inteligência aprimorada, teias mecânicas, agilidade")
  } else if (heroi === "Pantera Negra 2099") {
    alert("Pantera Negra 2099\nNome real: T'Challa do futuro\nNasceu em: Wakanda, 2099\nOrigem: Herdeiro de Wakanda no futuro\nPoderes: força aumentada, traje tecnológico avançado, agilidade")
  } else if (heroi === "Hulk Vermelho") {
    alert("Hulk Vermelho\nNome real: General Thaddeus Ross\nNasceu em: EUA\nOrigem: Transformado em Hulk Vermelho por radiação gama\nPoderes: superforça, resistência, combate estratégico")
  } else if (heroi === "Surfista Prateado") {
    alert("Surfista Prateado\nNome real: Norrin Radd\nNasceu em: Zenn-La\nOrigem: Escolhido para servir Galactus\nPoderes: voo, manipulação de energia cósmica, força sobre-humana")
  } else if (heroi === "Eternos - Ikaris") {
    alert("Ikaris\nNome real: Ikaris\nNasceu em: Terra\nOrigem: Membro dos Eternos, raça imortal\nPoderes: voo, energia cósmica, superforça, longevidade")
  } else if (heroi === "Eternos - Sersi") {
    alert("Sersi\nNome real: Sersi\nNasceu em: Terra\nOrigem: Eternos com afinidade à matéria\nPoderes: manipulação de matéria, imortalidade, habilidades de combate")
  } else if (heroi === "Eternos - Kingo") {
    alert("Kingo\nNome real: Kingo Sunen\nNasceu em: Japão\nOrigem: Eternos que escolheu se tornar estrela de cinema\nPoderes: energia cósmica, combate corpo a corpo, imortalidade")
  } else if (heroi === "Eternos - Thena") {
    alert("Thena\nNome real: Thena\nNasceu em: Terra\nOrigem: Guerreira eterna\nPoderes: superforça, combate, energia cósmica")
  } else if (heroi === "Eternos - Phastos") {
    alert("Phastos\nNome real: Phastos\nNasceu em: Terra\nOrigem: Eternos inventor e estrategista\nPoderes: manipulação de tecnologia, energia cósmica, imortalidade")
  } else if (heroi === "Homem de Gelo") {
    alert("Homem de Gelo\nNome real: Bobby Drake\nNasceu em: Boston, EUA\nOrigem: Mutante fundador dos X-Men\nPoderes: controle de gelo e frio, criação de estruturas congeladas, voo limitado")
  } else if (heroi === "Noturno") {
    alert("Noturno\nNome real: Kurt Wagner\nNasceu em: Alemanha\nOrigem: Mutante com aparência demoníaca\nPoderes: teletransporte, agilidade, combate corpo a corpo, regeneração")
  } else if (heroi === "Colossus") {
    alert("Colossus\nNome real: Piotr Rasputin\nNasceu em: Rússia\nOrigem: Mutante com capacidade de transformação em metal orgânico\nPoderes: superforça, invulnerabilidade, combate corpo a corpo")
  } else if (heroi === "Kitty Pryde") {
    alert("Kitty Pryde\nNome real: Katherine Pryde\nNasceu em: Jersey City, EUA\nOrigem: Mutante dos X-Men\nPoderes: intangibilidade, atravessar objetos sólidos, combate")
  } else if (heroi === "Sr. Fantástico") {
    alert("Sr. Fantástico\nNome real: Reed Richards\nNasceu em: EUA\nOrigem: Cientista que ganhou poderes após acidente cósmico\nPoderes: elasticidade extrema, inteligência superior, líder dos Quarteto Fantástico")
  } else if (heroi === "Mulher Invisível") {
    alert("Mulher Invisível\nNome real: Susan Storm\nNasceu em: EUA\nOrigem: Quarteto Fantástico\nPoderes: invisibilidade, campos de força, voo")
  } else if (heroi === "Tocha Humana") {
    alert("Tocha Humana\nNome real: Johnny Storm\nNasceu em: EUA\nOrigem: Quarteto Fantástico\nPoderes: controlar fogo, voo, resistência a altas temperaturas")
  } else if (heroi === "Coisa") {
    alert("Coisa\nNome real: Ben Grimm\nNasceu em: EUA\nOrigem: Quarteto Fantástico transformado por radiação cósmica\nPoderes: superforça, resistência, combate corpo a corpo")
  } else if (heroi === "Arqueiro Noturno") {
    alert("Arqueiro Noturno\nNome real: Kate Bishop\nNasceu em: EUA\nOrigem: Treinada pelo Gavião Arqueiro original\nPoderes: arco e flecha, combate corpo a corpo, estratégia")
  } else if (heroi === "Jessica Jones") {
    alert("Jessica Jones\nNome real: Jessica Campbell Jones\nNasceu em: EUA\nOrigem: Super-heroína e investigadora particular\nPoderes: superforça, resistência, habilidades de detetive")
  } else if (heroi === "Luke Cage") {
    alert("Luke Cage\nNome real: Carl Lucas\nNasceu em: Nova York, EUA\nOrigem: Ganhou força e pele invulnerável após experimento\nPoderes: superforça, resistência, combate")
  } else if (heroi === "Punho de Ferro") {
    alert("Punho de Ferro\nNome real: Daniel Rand\nNasceu em: K’un-Lun\nOrigem: Treinado em artes marciais e com chi controlado\nPoderes: punho de ferro (energia concentrada), combate corpo a corpo, agilidade")
  } else if (heroi === "Doutor Estranho Supremo") {
    alert("Doutor Estranho Supremo\nNome real: Stephen Strange\nNasceu em: EUA\nOrigem: Feiticeiro Supremo, protetor da Terra\nPoderes: magia, manipulação de tempo, teleportação, escudos místicos")
  } else if (heroi === "Cavaleira da Lua") 
    alert("Cavaleira da Lua\nNome real: Marc Spector\nNasceu em: Chicago, EUA\nOrigem: Mercenário escolhido pelo deus Khonshu\nPoderes: força aumentada à noite, combate, resistência, táticas militares")
else {
  alert("Esse Herói não está no Sistema ainda. Verifique se digitou exatamente como na lista.");
}
// Mensagem final
alert("obrigado por ultilizar a MarvelDex,Volte Sempre.")

