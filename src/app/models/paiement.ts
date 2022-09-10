import { Employe } from "./employe";

export class Paiement {

    public paiementId? : Number;
    public annee! : Number;
    public mois! : Number;
    public somme? : Number;
    public travailleur! : Employe;
    public datePaiement! : Date;
    public others? : String;

    constructor(
        
    )
    {

    }
}
