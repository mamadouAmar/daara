import { Entree } from "./entree";
import { Sortie } from "./sortie";

export class Bilan {
    public bilanId?: number
    public totalEntre? : number;
    public totalSorties? : number;
    public gain? : number;
    public dateBilan? : Date;
    public debutBilan! : Date;
    public finBilan! : Date;
    public entrees : Entree[] = [];
    public sorties : Sortie[] = [];

    constructor(
        
        
    ){}
}
