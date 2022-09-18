import { Niveau } from "./niveau";

export class Employe {

    public interneId? : Number;
    public prenom! : String;
    public nom! : String;
    public adresse? : String;
    public numeroTelephone? : String;
    public dateNaissance? : Date;
    public dateDebut? : Date;
    public profession? : String;
    public salaire? : Number;
    public classeGeree? : Niveau;

    constructor(
        
    )
    {

    }
}
