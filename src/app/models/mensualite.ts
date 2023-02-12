import { Eleve } from "./eleve";

export class Mensualite {

    id? : string;
    annee? : number;
    mois? : number;
    datePaiement? : Date;
    eleve? : Eleve;
    somme? : number;
    supplementArgent? : number;
    others? : string

    constructor(
        obj? : any
    )
    {
        this.id =  obj.id
        this.annee =  obj.annee
        this.mois =  obj.mois
        this.datePaiement =  obj.datePaiement
        this.eleve =  obj.eleve
        this.somme =  obj.somme
        this.supplementArgent =  obj.supplementArgent
        this.others =  obj.others
    }
}
