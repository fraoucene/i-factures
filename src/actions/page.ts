import {Page} from "../beans/page";

export type PageAction = {
    type: string,
    page: Page
};

export const setPage = (page: Page) => {
    return {type: 'SET_PAGE', page};
};