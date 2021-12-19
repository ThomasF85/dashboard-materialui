import {TRow} from "../common/type.def";

export type DashboardState = {
    rows: TRow[]
};

export type DashboardAction = {
    type: string;
    payload?: any;
};