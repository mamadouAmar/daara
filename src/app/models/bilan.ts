import { Entree } from "./entree";
import { Sortie } from "./sortie";

export class Bilan {
    public totalEntre? : number;
    public totalSorties? : number;
    public gain! : number;
    public debut! : Date;
    public fin! : Date;
    public entrees? : Entree[];
    public Sorties? : Sortie[];

    constructor(
        
        
    ){}
}
