import {createSelector, Selector} from "reselect";
import {State} from "./index";
import {Page} from "../beans/page";

const getPage: Selector<State, Page> = (state: State) => state.page;

export const getUrlCalculedPage = createSelector(
    getPage,
    (page) => '/ifacture/' + page.id
);