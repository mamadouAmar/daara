import { Employe } from "./employe";

export class Paiement {

    public id? : string;
    public annee? : number;
    public mois? : number;
    public somme? : number;
    public employe? : Employe;
    public datePaiement? : Date;
    public others? : string;

    constructor(
        obj? : any
    )
    {
        this.id = obj.id
        this.annee = obj.annee
        this.mois = obj.mois
        this.somme = obj.somme
        this.employe = obj.employe
        this.datePaiement = obj.datePaiement
        this.others = obj.others
    }
}
