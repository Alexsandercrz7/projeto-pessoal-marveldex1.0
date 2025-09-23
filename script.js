// Lista de heróis
const herois = alert (prompt(`  Homem de Ferro
  Capitão América
  Thor
  Hulk
  Viúva Negra
  Pantera Negra
  Doutor Estranho
  Homem-Aranha
  Princesa Maria Vitória
`))
  

// Loop para verificar cada herói
herois.forEach((heroi) => {
  if (heroi === "Homem de Ferro") {
    alert(`${heroi} usa tecnologia avançada para lutar!`)
  } else if (heroi === "Capitão América") {
    alert(`${heroi} é o símbolo de coragem e liderança!`)
  } else if (heroi === "Thor") {
    alert(`${heroi} tem o poder do trovão!`)
  } else if (heroi === "Hulk") {
    alert(`${heroi} é a força bruta em pessoa!`)
  } else if (heroi === "Viúva Negra") {
    alert(`${heroi} é ágil, inteligente e muito estratégica!`)
  } else if (heroi === "Pantera Negra") {
    alert(`${heroi} defende Wakanda com honra!`)
  } else if (heroi === "Doutor Estranho") {
    alert(`${heroi} manipula magia e o tempo!`)
  } else if (heroi === "Homem-Aranha") {
    alert(`${heroi} é rápido, esperto e protege a vizinhança!`)
  } else if (heroi === "Princesa Maria Vitória - minha namorada, me salva todos os dias e cuida muito bem de mim") {
    alert(`${heroi} é minha heroína real e especial!`)
  } else {
    alert(`${heroi} é um herói misterioso!`)
  }
})
