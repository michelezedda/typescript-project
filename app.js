var Startup = /** @class */ (function () {
    function Startup(nome, settoreDiFocus, descrizione, prodottiServiziOfferti) {
        this.nome = nome;
        this.settoreDiFocus = settoreDiFocus;
        this.descrizione = descrizione;
        this.prodottiServiziOfferti = prodottiServiziOfferti;
    }
    Startup.prototype.riceviIncentivo = function (incentivo) {
        console.log("La startup ".concat(this.nome, " ha ricevuto l'incentivo ").concat(incentivo.descrizione));
    };
    return Startup;
}());
var Incentivo = /** @class */ (function () {
    function Incentivo(codiceIdentificativo, descrizione, valore, criteriDiEleggibilita) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteriDiEleggibilita = criteriDiEleggibilita;
    }
    Incentivo.prototype.assegnaAStartup = function (startup) {
        console.log("L'incentivo ".concat(this.descrizione, " \u00E8 stato assegnato alla startup ").concat(startup.nome));
    };
    return Incentivo;
}());
var Cittadino = /** @class */ (function () {
    function Cittadino(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    Cittadino.prototype.partecipaAttivita = function (startup) {
        console.log("".concat(this.nome, " ").concat(this.cognome, " partecipa alle attivit\u00E0 della startup ").concat(startup.nome));
    };
    return Cittadino;
}());
var startup1 = new Startup("Sportech", "Tecnologie wearable", "Sviluppo di dispositivi indossabili per il monitoraggio delle prestazioni sportive", ["Smartwatch sportivi", "Sensori di attività"]);
var startup2 = new Startup("FitApp", "App per il fitness", "Piattaforma mobile per la gestione e il monitoraggio dell'allenamento personale", ["App di fitness personalizzata"]);
var incentivo1 = new Incentivo("INV001", "Incentivo per lo sviluppo di tecnologie sportive", 5000, ["Startup innovative nel settore sportivo"]);
var incentivo2 = new Incentivo("INV002", "Incentivo per promuovere l'attività fisica nelle scuole", 3000, ["Scuole primarie e secondarie"]);
var cittadino1 = new Cittadino("Mario", "Rossi", 35, ["Jogging", "Calcio"]);
incentivo1.assegnaAStartup(startup1);
startup1.riceviIncentivo(incentivo1);
cittadino1.partecipaAttivita(startup1);
