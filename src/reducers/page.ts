import {PageAction} from "../actions/page";
import {Page} from "../beans/page";
import toPage = Page.toPage;

export const page = (state = toPage(Page.ACCEUIL), action: PageAction) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.page;
        default:
            return state;
    }
};