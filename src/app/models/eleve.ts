import { Niveau } from "./niveau";

export class Eleve {

    public eleveId? : number; 
    public prenom! : string;
    public nom! : string; 
    public prenomPere? : string;
    public prenomNomMere? : string; 
    public dateNaissance! : Date; 
    public lieuDeNaissance! : String;
    public addresse? : string; 
    public numeroTelephone? : string;
    public dateDebut? : Date;
    public classe! : Niveau;
    public argentDePoche? : number;
    public aSavoir? : string;
    
    constructor(
        
    )
    {

    }
}
