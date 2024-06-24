function IStartup(nome, settoreDiFocus, descrizione, prodottiServiziOfferti) {
    this.nome = nome;
    this.settoreDiFocus = settoreDiFocus;
    this.descrizione = descrizione;
    this.prodottiServiziOfferti = prodottiServiziOfferti;
}
IStartup.prototype.riceviIncentivo = function (incentivo) {
    console.log("La startup ".concat(this.nome, " ha ricevuto l'incentivo ").concat(incentivo.descrizione));
};
function IIncentivo(codiceIdentificativo, descrizione, valore, criteriDiEleggibilita) {
    this.codiceIdentificativo = codiceIdentificativo;
    this.descrizione = descrizione;
    this.valore = valore;
    this.criteriDiEleggibilita = criteriDiEleggibilita;
}
IIncentivo.prototype.assegnaAStartup = function (startup) {
    console.log("L'incentivo ".concat(this.descrizione, " \u00E8 stato assegnato alla startup ").concat(startup.nome));
};
function ICittadino(nome, cognome, eta, interessiSportivi) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.interessiSportivi = interessiSportivi;
}
ICittadino.prototype.partecipaAttivita = function (startup) {
    console.log("".concat(this.nome, " ").concat(this.cognome, " partecipa alle attivit\u00E0 della startup ").concat(startup.nome));
};
var startup1 = new IStartup("Sportech", "Tecnologie wearable", "Sviluppo di dispositivi indossabili per il monitoraggio delle prestazioni sportive", ["Smartwatch sportivi", "Sensori di attività"]);
var startup2 = new IStartup("FitApp", "App per il fitness", "Piattaforma mobile per la gestione e il monitoraggio dell'allenamento personale", ["App di fitness personalizzata"]);
var incentivo1 = new IIncentivo("INV001", "Incentivo per lo sviluppo di tecnologie sportive", 5000, ["Startup innovative nel settore sportivo"]);
var incentivo2 = new IIncentivo("INV002", "Incentivo per promuovere l'attività fisica nelle scuole", 3000, ["Scuole primarie e secondarie"]);
var cittadino1 = new ICittadino("Mario", "Rossi", 35, ["Jogging", "Calcio"]);
incentivo1.assegnaAStartup(startup1);
startup1.riceviIncentivo(incentivo1);
cittadino1.partecipaAttivita(startup1);
