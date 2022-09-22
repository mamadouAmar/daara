import { Eleve } from "./eleve";

export class Mensualite {

    mensualiteId? : number;
    annee! : number;
    mois! : number;
    datePaiement! : Date;
    eleveMensualite! : Eleve;
    somme : number = 0;
    supplementArgent? : number;
    others? : string

    constructor(
        
    )
    {

    }
}
