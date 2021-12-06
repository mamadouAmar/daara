export class Eleve {

    constructor(
        private eleveId : Number, 
        private prenom : String,
        private nom : String, 
        private prenomPere : String,
        private prenomNomMere : String, 
        private dateNaissance : Date, 
        private addresse : String, 
        private numeroTelephone : String,
        private dateDebut : Date,
        private classe : Number,
        private argentDePoche : Number,
        private aSavoir : String
    )
    {

    }
}
