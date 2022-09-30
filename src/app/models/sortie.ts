export class Sortie {
    public idSortie? : number;
    
    constructor(
        public date : Date,
        public sourceSortie : string,
        public somme : number
    ){}
}
