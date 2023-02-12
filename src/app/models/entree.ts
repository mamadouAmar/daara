export class Entree {
    public id? : string
    public date? : Date
    public sourceEntree? : string
    public somme? : number

    constructor(
        obj? : any
    ){
        this.id = obj.id
        this.date = obj.date
        this.sourceEntree = obj.sourceEntree
        this.somme = obj.somme
    }
}
