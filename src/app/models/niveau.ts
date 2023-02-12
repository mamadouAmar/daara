import { Classe } from "./enums/classe"

export class Niveau {

    public id? : Classe
    public sommeInscription? : number
    public mensualite? : number

    constructor(
       obj? : any
    ){
        this.id = obj.id
        this.sommeInscription = obj.sommeInscription
        this.mensualite = obj.mensualite
    }


}