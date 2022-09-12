import { Niveau } from "./niveau";

export class Eleve {

    public eleveId? : Number; 
    public prenom! : String;
    public nom! : String; 
    public prenomPere? : String;
    public prenomNomMere? : String; 
    public dateNaissance! : Date; 
    public addresse? : String; 
    public numeroTelephone? : String;
    public dateDebut? : Date;
    public classe? : Niveau;
    public argentDePoche? : Number;
    public aSavoir? : String;
    
    constructor(
        
    )
    {

    }
}
