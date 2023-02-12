import { EtatAnneeScolaire } from "./enums/etat-annee-scolaire"

export class AnneeScolaire {

    id? : string
    anneeDebut? : number
    anneeFin? : number
    dateDebut? : number
    dateFin? : number
    etatAnneeScolaire? : EtatAnneeScolaire

    constructor(obj : any = null) {
        this.id = obj.id
        this.anneeDebut = obj.anneeDebut
        this.anneeFin = obj.anneeFin
        this.dateDebut = obj.anneeDebut
        this.dateFin = obj.dateFin
        this.etatAnneeScolaire = obj.etatAnneeScolaire
    }

}
