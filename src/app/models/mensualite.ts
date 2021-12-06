export class Mensualite {

    constructor(
        private mensualiteId : Number,
        private annee : Number,
        private mois : Number,
        private datePaiement : Date,
        private eleveMensualite : Number,
        private somme : Number,
        private supplementArgent : Number,
        private others : String
    )
    {

    }
}
