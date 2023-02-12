import { Niveau } from "./niveau";

export class Eleve {

    public id? : string; 
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
    public aSavoir? : string;
    public inscrit? : boolean
    public enRegle? : boolean
    
    constructor(
        obj? : any
    )
    {
        this.id = obj.id
        this.prenom = obj.prenom
        this.nom = obj.nom
        this.prenomPere = obj.prenomPere
        this.prenomNomMere = obj.prenomNomMere
        this.dateNaissance = obj.dateNaissance
        this.lieuDeNaissance = obj.lieuDeNaissance
        this.addresse = obj.addresse
        this.numeroTelephone = obj.numeroTelephone
        this.dateDebut = obj.dateDebut
        this.aSavoir = obj.aSavoir
        this.inscrit = obj.inscrit
        this.enRegle = obj.enRegle
    }
}
