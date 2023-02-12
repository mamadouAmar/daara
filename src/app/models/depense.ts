export class Depense {

    public id? : string;
    public somme! : number;
    public depense! : string;
    public dateDepense!: Date;

    constructor(obj : any = null)
    {
        this.id = obj.id
        this.somme = obj.somme
        this.depense = obj.depense
        this.dateDepense = obj.dateDepense

    }


}
