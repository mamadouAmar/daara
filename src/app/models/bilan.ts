import { Entree } from "./entree";
import { Sortie } from "./sortie";

export class Bilan {
    public id?: string
    public totalEntre : number;
    public totalSorties : number;
    public gain? : number;
    public dateBilan? : Date;
    public debutBilan! : Date;
    public finBilan! : Date;
    public entrees : Entree[] = [];
    public sorties : Sortie[] = [];

    constructor(
        obj : any = null
    ){
        this.id = obj.id
        this.dateBilan = obj.dateBilan
        this.debutBilan = obj.dateBilan
        this.finBilan = obj.finBilan
        this.entrees = obj.entrees
        this.sorties = obj.sorties
        this.totalEntre = 0
        this.totalSorties = 0
        this.entrees.forEach(
            element => {
                this.totalEntre += element.somme? element.somme : 0
            }
        )
        this.sorties.forEach(
            element => {
                this.totalSorties += element.somme? element.somme : 0
            }
        )

        this.gain = this.totalEntre-this.totalSorties
    }
}
