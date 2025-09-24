// ==== MARVELDEX COMPLETO ====
// Sistema de heróis + homenagem especial para Maria Vitória 💖

const inicio = prompt("Bem vindos ao meu projeto pessoal MARVELDEX\n\nDigite 'continuar' para seguir o sistema\nOu 'nao' para fechar.");

if (inicio === "nao") {
  alert("Fechando o sistema...");
} else {

  // === TABELA DE HERÓIS ===
  alert("Heróis disponíveis (1 - 26):\n\n" +
  "1 - Homem de Ferro\n2 - Capitão América\n3 - Thor\n4 - Hulk\n5 - Viúva Negra\n6 - Pantera Negra\n7 - Doutor Estranho\n8 - Homem-Aranha\n9 - Princesa Maria Vitória 👑\n10 - Tempestade\n11 - Homem-Formiga\n12 - Feiticeira Escarlate\n13 - Visão\n14 - Gavião Arqueiro\n15 - Drax\n16 - Gamora");

  alert("Heróis disponíveis (27 - 37):\n\n" +
  "27 - Shazam\n28 - Wolverine\n29 - Deadpool\n30 - Cavaleiro da Lua\n31 - Capitã Marvel\n32 - Homem-Aranha 2099\n36 - Miss Marvel (Kamala Khan)\n37 - Falcão");

  // === ESCOLHA DO USUÁRIO ===
  let escolha = prompt("Digite o número do herói que você quer escolher:");

  // === DESCRIÇÕES POR NÚMERO ===
  if (escolha == "1") alert("Homem de Ferro\nNome real: Tony Stark\nOrigem: Gênio bilionário criador da armadura\nPoderes: tecnologia, inteligência e armaduras poderosas");
  else if (escolha == "2") alert("Capitão América\nNome real: Steve Rogers\nOrigem: Soldado da Segunda Guerra aprimorado\nPoderes: força, agilidade e escudo indestrutível");
  else if (escolha == "3") alert("Thor\nNome real: Thor Odinson\nOrigem: Deus do Trovão de Asgard\nPoderes: Mjolnir, trovões e imortalidade");
  else if (escolha == "4") alert("Hulk\nNome real: Bruce Banner\nOrigem: Exposição à radiação gama\nPoderes: força descomunal e regeneração");
  else if (escolha == "5") alert("Viúva Negra\nNome real: Natasha Romanoff\nOrigem: Espiã treinada pela KGB\nPoderes: artes marciais, espionagem, agilidade");
  else if (escolha == "6") alert("Pantera Negra\nNome real: T’Challa\nOrigem: Rei de Wakanda, defensor de sua nação\nPoderes: força aprimorada, traje tecnológico");
  else if (escolha == "7") alert("Doutor Estranho\nNome real: Stephen Strange\nOrigem: Feiticeiro Supremo\nPoderes: magia, manipulação do tempo, teleportação");
  else if (escolha == "8") alert("Homem-Aranha\nNome real: Peter Parker\nOrigem: Picado por aranha radioativa\nPoderes: agilidade, força, teias, sentidos aguçados");
  else if (escolha == "9") {
    // Homenagem especial pra Vitória
    alert("👑 Princesa Maria Vitória 👑\n\n" +
    "🌸 Origem: Do meu coração, onde nasceu e reina todos os dias.\n\n" +
    "💖 Poderes: O sorriso mais lindo do mundo, a luz que ilumina minhas manhãs, a voz que acalma minhas tempestades, e o abraço que faz qualquer dor desaparecer.\n\n" +
    "✨ Descrição: Entre todos os heróis, ela é única. Não precisa de capa nem de armadura, porque o que a torna invencível é o amor que ela transmite. " +
    "É a guardiã da minha vida, a razão dos meus sorrisos e a dona do meu futuro. Se o mundo tivesse mais Marias Vitórias, ele seria um lugar perfeito.\n\n" +
    "🌹 Ela não é só uma heroína... é a MINHA heroína, a minha inspiração e a minha felicidade eterna.\n\n" +
    "⭐ E diante de todos os universos, de todas as galáxias e realidades alternativas, eu escolheria você, Maria Vitória, em todas elas.");
    
    alert("💌 Vitória, se você está lendo isso, saiba que esse código foi feito como homenagem pra você.\n\n" +
    "Você é o motivo da minha alegria, meu maior orgulho e minha aventura favorita. Obrigado por existir na minha vida, meu amor. ❤️");
  } else if (escolha == "10") alert("Tempestade\nNome real: Ororo Munroe\nOrigem: Mutante descendente de sacerdotisas africanas\nPoderes: manipulação do clima, voo, resistência");
  else if (escolha == "11") alert("Homem-Formiga\nNome real: Scott Lang\nOrigem: Ex-ladrão que herdou a tecnologia de Hank Pym\nPoderes: encolhimento, crescimento gigante, força proporcional");
  else if (escolha == "12") alert("Feiticeira Escarlate\nNome real: Wanda Maximoff\nOrigem: Jovem com poderes despertados pela Joia da Mente\nPoderes: magia do caos, manipulação da realidade, telecinese");
  else if (escolha == "13") alert("Visão\nNome real: Sintozóide criado por Ultron\nOrigem: Criado a partir da Joia da Mente\nPoderes: intangibilidade, disparos de energia, superforça");
  else if (escolha == "14") alert("Gavião Arqueiro\nNome real: Clint Barton\nOrigem: Atirador de elite treinado pelo circo e pela SHIELD\nPoderes: mestre em arco e flecha, combate corpo a corpo, estratégia");
  else if (escolha == "15") alert("Drax\nNome real: Arthur Douglas\nOrigem: Humano transformado em guerreiro cósmico\nPoderes: superforça, resistência, combate brutal");
  else if (escolha == "16") alert("Gamora\nNome real: Gamora Zen Whoberi Ben Titan\nOrigem: Última de sua raça, criada e treinada por Thanos\nPoderes: artes marciais, armas cósmicas, força aumentada");
  else if (escolha == "27") alert("Shazam\nNome real: Billy Batson\nOrigem: Jovem escolhido por um mago ancestral\nPoderes: força, velocidade, magia, sabedoria dos deuses");
  else if (escolha == "28") alert("Wolverine\nNome real: James Howlett (Logan)\nOrigem: Mutante com fator de cura acelerado\nPoderes: garras de adamantium, regeneração, sentidos aguçados");
  else if (escolha == "29") alert("Deadpool\nNome real: Wade Wilson\nOrigem: Mercenário submetido a experimentos ilegais\nPoderes: fator de cura, imortalidade, combate, humor afiado");
  else if (escolha == "30") alert("Cavaleiro da Lua\nNome real: Marc Spector\nOrigem: Ex-militar escolhido pelo deus Khonshu\nPoderes: força aumentada à noite, combate tático");
  else if (escolha == "31") alert("Capitã Marvel\nNome real: Carol Danvers\nOrigem: Piloto que recebeu poderes alienígenas\nPoderes: voo, superforça, rajadas de energia");
  else if (escolha == "32") alert("Homem-Aranha 2099\nNome real: Miguel O'Hara\nOrigem: Cientista geneticamente alterado\nPoderes: agilidade, teia orgânica, garras retráteis");
  else if (escolha == "36") alert("Miss Marvel\nNome real: Kamala Khan\nOrigem: Adolescente com poderes mutantes inspirada pela Capitã Marvel\nPoderes: elasticidade, forma corporal alterável, cura acelerada");
  else if (escolha == "37") alert("Falcão\nNome real: Sam Wilson\nOrigem: Ex-militar, aliado de Steve Rogers\nPoderes: voo com asas mecânicas, combate corpo a corpo, liderança");
  else alert("Esse herói ainda não tem informações cadastradas no sistema.");

  // Mensagem final romântica
  alert("Obrigado por utilizar a MarvelDex!\n\nEntre todos os heróis e heroínas, a maior de todas sempre será você, Maria Vitória. 💖");
}
