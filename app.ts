interface IStartup {
  nome: string;
  settoreDiFocus: string;
  descrizione: string;
  prodottiServiziOfferti: string[];
  riceviIncentivo(incentivo: IIncentivo): void;
}

interface IIncentivo {
  codiceIdentificativo: string;
  descrizione: string;
  valore: number;
  criteriDiEleggibilita: string[];
  assegnaAStartup(startup: IStartup): void;
}

interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];
  partecipaAttivita(startup: IStartup): void;
}

class Startup implements IStartup {
  constructor(
    public nome: string,
    public settoreDiFocus: string,
    public descrizione: string,
    public prodottiServiziOfferti: string[]
  ) {}

  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(
      `La startup ${this.nome} ha ricevuto l'incentivo ${incentivo.descrizione}`
    );
  }
}

class Incentivo implements IIncentivo {
  constructor(
    public codiceIdentificativo: string,
    public descrizione: string,
    public valore: number,
    public criteriDiEleggibilita: string[]
  ) {}

  assegnaAStartup(startup: IStartup): void {
    console.log(
      `L'incentivo ${this.descrizione} è stato assegnato alla startup ${startup.nome}`
    );
  }
}

class Cittadino implements ICittadino {
  constructor(
    public nome: string,
    public cognome: string,
    public eta: number,
    public interessiSportivi: string[]
  ) {}

  partecipaAttivita(startup: IStartup): void {
    console.log(
      `${this.nome} ${this.cognome} partecipa alle attività della startup ${startup.nome}`
    );
  }
}

const startup1 = new Startup(
  "Sportech",
  "Tecnologie wearable",
  "Sviluppo di dispositivi indossabili per il monitoraggio delle prestazioni sportive",
  ["Smartwatch sportivi", "Sensori di attività"]
);

const startup2 = new Startup(
  "FitApp",
  "App per il fitness",
  "Piattaforma mobile per la gestione e il monitoraggio dell'allenamento personale",
  ["App di fitness personalizzata"]
);

const incentivo1 = new Incentivo(
  "INV001",
  "Incentivo per lo sviluppo di tecnologie sportive",
  5000,
  ["Startup innovative nel settore sportivo"]
);

const incentivo2 = new Incentivo(
  "INV002",
  "Incentivo per promuovere l'attività fisica nelle scuole",
  3000,
  ["Scuole primarie e secondarie"]
);

const cittadino1 = new Cittadino("Mario", "Rossi", 35, ["Jogging", "Calcio"]);

incentivo1.assegnaAStartup(startup1);
startup1.riceviIncentivo(incentivo1);
cittadino1.partecipaAttivita(startup1);
