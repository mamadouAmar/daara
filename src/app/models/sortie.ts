export class Sortie {
    public idSortie? : number;
    
    constructor(
        public dateSortie : Date,
        public typeSortie : string,
        public somme : number
    ){}
}
