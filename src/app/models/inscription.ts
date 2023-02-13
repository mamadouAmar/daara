import { AnneeScolaire } from "./annee-scolaire";
import { Eleve } from "./eleve";
import { Niveau } from "./niveau";

export class Inscription {
    
    id! : string;
    dateInscription! : Date;
    anneeInscription! : number;
    classe! : Niveau;
    anneeScolaire! : AnneeScolaire
    eleve! : Eleve;
    somme! : number;

    constructor(
        // obj? : any
    )
    {
        // this.id = obj.id
        // this.dateInscription = obj.dateInscription
        // this.anneeInscription = obj.anneeInscription
        // this.classe = obj.classe
        // this.anneeScolaire = obj.anneeScolaire
        // this.eleve = obj.eleve
        // this.somme = obj.somme

    }
}
