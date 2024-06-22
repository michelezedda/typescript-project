# Progetto TypeScript - Gestione Startup e Incentivi

Questo progetto TypeScript è focalizzato sulla gestione di startup, incentivi e partecipazione dei cittadini a iniziative delle startup stesse. Qui di seguito sono presentati gli elementi principali del progetto:

## Interfacce

1. **IStartup**
   - Proprietà: `nome`, `settoreDiFocus`, `descrizione`, `prodottiServiziOfferti`
   - Metodi: `riceviIncentivo(incentivo: IIncentivo): void`

2. **IIncentivo**
   - Proprietà: `codiceIdentificativo`, `descrizione`, `valore`, `criteriDiEleggibilita`
   - Metodi: `assegnaAStartup(startup: IStartup): void`

3. **ICittadino**
   - Proprietà: `nome`, `cognome`, `eta`, `interessiSportivi`
   - Metodi: `partecipaAttivita(startup: IStartup): void`

## Classi Implementate

1. **Startup**
   - Implementa: `IStartup`
   - Descrizione: Rappresenta una startup con le sue informazioni e la capacità di ricevere incentivi.

2. **Incentivo**
   - Implementa: `IIncentivo`
   - Descrizione: Rappresenta un incentivo offerto alle startup, con criteri di assegnazione.

3. **Cittadino**
   - Implementa: `ICittadino`
   - Descrizione: Rappresenta un cittadino interessato a partecipare alle attività di una startup.

## Esempi di Utilizzo

```typescript
const startup1 = new Startup(
  "Sportech",
  "Tecnologie wearable",
  "Sviluppo di dispositivi indossabili per il monitoraggio delle prestazioni sportive",
  ["Smartwatch sportivi", "Sensori di attività"]
);

const incentivo1 = new Incentivo(
  "INV001",
  "Incentivo per lo sviluppo di tecnologie sportive",
  5000,
  ["Startup innovative nel settore sportivo"]
);

const cittadino1 = new Cittadino("Mario", "Rossi", 35, ["Jogging", "Calcio"]);

incentivo1.assegnaAStartup(startup1);
startup1.riceviIncentivo(incentivo1);
cittadino1.partecipaAttivita(startup1);
