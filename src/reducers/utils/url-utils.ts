import {Page} from "../../beans/page";

const pages = () => Page.all.join('|');


export const extractPage = (path: string): Page.Name => {
    const regex = '(' + pages() + ')';

    const match = path.match(regex);
    return match && match[1] ? Page.toPage(match[1]).id : Page.ACCEUIL;
};