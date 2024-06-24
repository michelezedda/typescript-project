function IStartup(nome, settoreDiFocus, descrizione, prodottiServiziOfferti) {
  this.nome = nome;
  this.settoreDiFocus = settoreDiFocus;
  this.descrizione = descrizione;
  this.prodottiServiziOfferti = prodottiServiziOfferti;
}

IStartup.prototype.riceviIncentivo = function (incentivo) {
  console.log(
    `La startup ${this.nome} ha ricevuto l'incentivo ${incentivo.descrizione}`
  );
};

function IIncentivo(
  codiceIdentificativo,
  descrizione,
  valore,
  criteriDiEleggibilita
) {
  this.codiceIdentificativo = codiceIdentificativo;
  this.descrizione = descrizione;
  this.valore = valore;
  this.criteriDiEleggibilita = criteriDiEleggibilita;
}

IIncentivo.prototype.assegnaAStartup = function (startup) {
  console.log(
    `L'incentivo ${this.descrizione} è stato assegnato alla startup ${startup.nome}`
  );
};

function ICittadino(nome, cognome, eta, interessiSportivi) {
  this.nome = nome;
  this.cognome = cognome;
  this.eta = eta;
  this.interessiSportivi = interessiSportivi;
}

ICittadino.prototype.partecipaAttivita = function (startup) {
  console.log(
    `${this.nome} ${this.cognome} partecipa alle attività della startup ${startup.nome}`
  );
};

const startup1 = new IStartup(
  "Sportech",
  "Tecnologie wearable",
  "Sviluppo di dispositivi indossabili per il monitoraggio delle prestazioni sportive",
  ["Smartwatch sportivi", "Sensori di attività"]
);

const startup2 = new IStartup(
  "FitApp",
  "App per il fitness",
  "Piattaforma mobile per la gestione e il monitoraggio dell'allenamento personale",
  ["App di fitness personalizzata"]
);

const incentivo1 = new IIncentivo(
  "INV001",
  "Incentivo per lo sviluppo di tecnologie sportive",
  5000,
  ["Startup innovative nel settore sportivo"]
);

const incentivo2 = new IIncentivo(
  "INV002",
  "Incentivo per promuovere l'attività fisica nelle scuole",
  3000,
  ["Scuole primarie e secondarie"]
);

const cittadino1 = new ICittadino("Mario", "Rossi", 35, ["Jogging", "Calcio"]);

incentivo1.assegnaAStartup(startup1);
startup1.riceviIncentivo(incentivo1);
cittadino1.partecipaAttivita(startup1);
