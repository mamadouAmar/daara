export class Sortie {
    public id? : string;
    public date? : Date
    public sourceSortie? : string
    public somme? : number

    constructor(
        obj? : any
    ){
        this.id = obj.id
        this.date = obj.date
        this.sourceSortie = obj.sourceSortie
        this.somme = obj.somme
    }
}
