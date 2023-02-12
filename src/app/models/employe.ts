import { Job } from "./enums/job";
import { Niveau } from "./niveau";

export class Employe {

    public id? : string;
    public prenom! : string;
    public nom! : string;
    public adresse? : string;
    public numeroTelephone? : string;
    public dateNaissance? : Date;
    public dateDebut? : Date;
    public profession? : Job;
    public salaire? : number;
    public enActivite? : boolean
    public enRegle? : boolean
    constructor(
        obj? : any
    )
    {
        this.id = obj.id
        this.prenom = obj.prenom
        this.nom = obj.nom
        this.adresse = obj.adresse
        this.numeroTelephone = obj.numeroTelephone
        this.dateNaissance = obj.dateNaissance
        this.dateDebut = obj.dateDebut
        this.profession = obj.profession
        this.salaire = obj.salaire
        this.enActivite = obj.enActivite
        this.enRegle = obj.enRegle
    }
}
