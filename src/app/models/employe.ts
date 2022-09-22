import { Niveau } from "./niveau";

export class Employe {

    public interneId? : number;
    public prenom! : string;
    public nom! : string;
    public adresse? : string;
    public numeroTelephone? : string;
    public dateNaissance? : Date;
    public dateDebut? : Date;
    public profession? : string;
    public salaire? : number;
    public classeGeree? : Niveau;

    constructor(
        
    )
    {

    }
}
