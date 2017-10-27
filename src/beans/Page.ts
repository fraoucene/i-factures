export class Page {

    readonly id: Page.Name;
    readonly label: string;

    constructor(id: Page.Name, label: string) {
        this.id = id;
        this.label = label;
    }

}

export namespace Page {
    export type Name = 'acceuil' | 'factures' | 'devis' | 'rapport' | 'compte' | 'login';

    export const ACCEUIL: Name = 'acceuil';
    export const FACTURE: Name = 'factures';
    export const DEVIS: Name = 'devis';
    export const RAPPORT: Name = 'rapport';
    export const COMPTE: Name = 'compte';
    export const LOGIN: Name = 'login';
    export const all = [ACCEUIL, FACTURE, DEVIS, RAPPORT, COMPTE, LOGIN];

    export const toPage: (s: string) => Page = (from: string) => {
        switch (from) {
            case 'acceuil':
                return new Page(ACCEUIL, 'Acceuil');
            case 'factures':
                return new Page(FACTURE, 'Factures');
            case 'devis':
                return new Page(DEVIS, 'Devis');
            case 'rapport':
                return new Page(RAPPORT, 'Rapports');
            case 'compte':
                return new Page(COMPTE, 'Compte');
            case 'login':
                return new Page(LOGIN, 'Lompte');
            default:
                return new Page(ACCEUIL, 'Acceuil');
        }
    };
}